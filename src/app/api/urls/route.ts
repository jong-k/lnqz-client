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
    console.error("URL이 유효하지 않습니다:", targetUrl);
    return NextResponse.json({ message: "URL이 유효하지 않습니다." }, { status: 400 });
  }

  const apiUrl = process.env.API_URL ?? process.env["API_URL"];
  if (!apiUrl) {
    console.error("API_URL 환경 변수가 런타임에 설정되어 있지 않습니다:", apiUrl);
    return NextResponse.json({ message: "서버 설정 오류(API_URL 누락)" }, { status: 500 });
  }

  try {
    const response = await fetch(`${apiUrl}/urls`, {
      body: JSON.stringify({ targetUrl }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    if (response.ok) {
      const { shortCode } = await response.json();
      return NextResponse.json(
        {
          shortUrl: `${request.nextUrl.origin}/${shortCode}`,
        },
        { status: 201 }
      );
    } else {
      const { message } = await response.json();
      console.error("단축 URL 생성 실패:", message);
      return NextResponse.json({ message }, { status: 400 });
    }
  } catch (error) {
    console.error("단축 URL 생성 중 오류 발생:", error);
    return NextResponse.json({ message: "단축 URL 생성에 실패했습니다." }, { status: 400 });
  }
}
