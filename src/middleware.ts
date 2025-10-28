import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const DEFAULT_SHORTCODE_LENGTH = 7;
const SHORT_CODE_REGEX = new RegExp(`^[0-9a-zA-Z]{${DEFAULT_SHORTCODE_LENGTH}}$`);

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (SHORT_CODE_REGEX.test(pathname.slice(1))) {
    const shortCode = pathname.slice(1);
    const apiUrl = process.env.API_URL ?? process.env["API_URL"];
    if (apiUrl) {
      return NextResponse.redirect(`${apiUrl}/${shortCode}`);
    } else {
      console.error("API_URL 환경 변수가 런타임에 설정되어 있지 않습니다:", apiUrl);
      return NextResponse.redirect("/404");
    }
  }
}
