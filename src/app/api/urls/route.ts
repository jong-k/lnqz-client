import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { targetUrl } = await request.json();
  if (!targetUrl) {
    return NextResponse.json({ message: "타겟 URL이 필요합니다." }, { status: 400 });
  }

  return NextResponse.json(
    {
      data: {
        shortUrl: "",
        targetUrl,
      },
    },
    { status: 201 }
  );
}
