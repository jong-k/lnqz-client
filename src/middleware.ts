import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const DEFAULT_SHORTCODE_LENGTH = 7;
const SHORT_CODE_REGEX = new RegExp(`^[0-9a-zA-Z]{${DEFAULT_SHORTCODE_LENGTH}}$`);

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const shortCode = pathname.slice(1);

  // shortCode 형식 검증
  if (!SHORT_CODE_REGEX.test(shortCode)) return NextResponse.next();

  const apiUrl = process.env.API_URL ?? process.env["API_URL"];

  if (!apiUrl) {
    console.error("API_URL 환경 변수가 설정되어 있지 않습니다");
    return NextResponse.redirect(new URL("/404", request.url));
  }

  return NextResponse.redirect(`${apiUrl}/${shortCode}`);
}

export const config = {
  matcher: [
    /*
     * 다음을 제외한 모든 경로에 적용:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
