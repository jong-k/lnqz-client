import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Link Squeeze | 단순한 URL 단축 서비스",
  description: "lnqz.site에서 긴 URL을 짧게 줄여보세요",
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
