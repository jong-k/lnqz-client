import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
