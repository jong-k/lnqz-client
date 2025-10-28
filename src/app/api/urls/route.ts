import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const urlSchema = z.object({
  targetUrl: z.url({
    protocol: /^https?$/,
  }),
});

export async function POST(request: NextRequest) {
  const { targetUrl } = await request.json();
  const validation = urlSchema.safeParse({ targetUrl });
  if (!validation.success) {
    return NextResponse.json({ message: "URL이 유효하지 않습니다." }, { status: 400 });
  }

  const base = process.env.API_URL ?? process.env["API_URL"];
  if (!base) {
    console.error("API_URL 환경 변수가 런타임에 설정되어 있지 않습니다.");
    return NextResponse.json({ message: "서버 설정 오류(API_URL 누락)" }, { status: 500 });
  }

  try {
    const baseWithSlash = base.endsWith("/") ? base : `${base}/`;
    const url = new URL("urls", baseWithSlash).toString();
    const response = await fetch(url, {
      body: JSON.stringify({ targetUrl }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    if (response.ok) {
      const result = await response.json();
      return NextResponse.json(
        {
          data: {
            shortUrl: result.shortUrl,
            targetUrl: result.targetUrl,
          },
        },
        { status: 201 }
      );
    } else {
      const errorText = await response.text().catch(() => "");
      console.error("Create short URL failed", {
        errorText,
        status: response.status,
        statusText: response.statusText,
        url,
      });
      return NextResponse.json({ message: "단축 URL 생성에 실패했습니다." }, { status: 400 });
    }
  } catch (error) {
    console.error("Error creating short URL:", { base, error });
    return NextResponse.json({ message: "단축 URL 생성에 실패했습니다." }, { status: 400 });
  }
}
