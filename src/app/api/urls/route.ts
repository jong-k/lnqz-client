import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";

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

  try {
    const response = await fetch(`${process.env.API_URL}/urls`, {
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
      return NextResponse.json({ message: "단축 URL 생성에 실패했습니다." }, { status: 400 });
    }
  } catch (error) {
    console.error("Error creating short URL:", error);
    return NextResponse.json({ message: "단축 URL 생성에 실패했습니다." }, { status: 400 });
  }
}
