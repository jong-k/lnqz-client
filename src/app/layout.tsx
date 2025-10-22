import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "@/shared/shadcn-ui/components/ui/sonner";
import Footer from "./_components/footer";
import Header from "./_components/header";
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
      <body className="flex min-h-dvh flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster closeButton position="top-center" richColors theme="light" />
      </body>
    </html>
  );
}
