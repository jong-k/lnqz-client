import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  display: "swap",
  src: "../../public/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
});

export const metadata: Metadata = {
  description: "lnqz.site에서 긴 URL을 짧게 줄여보세요",
  title: "Link Squeeze | 단순한 URL 단축 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={pretendard.className} lang="ko">
      <body>{children}</body>
    </html>
  );
}
