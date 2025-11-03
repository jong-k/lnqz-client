import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "@/shared/shadcn-ui/components/ui/sonner";
import { GoogleTagManager } from "@next/third-parties/google";
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
  icons: {
    icon: "/icons/favicon.ico",
  },
  metadataBase: new URL("https://lnqz.site"),
  openGraph: {
    description: "lnqz.site에서 긴 URL을 짧게 줄여보세요",
    images: [
      {
        alt: "Link Squeeze Logo",
        height: 630,
        url: "/images/logo.png",
        width: 1200,
      },
    ],
    locale: "ko_KR",
    siteName: "Link Squeeze",
    title: "Link Squeeze | 단순한 URL 단축 서비스",
    type: "website",
    url: "https://lnqz.site",
  },
  title: "Link Squeeze | 단순한 URL 단축 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={pretendard.className} lang="ko">
      <GoogleTagManager gtmId="GTM-WM6D948M" />
      <body className="flex min-h-dvh flex-col">
        <Header />
        {/* 전체 페이지 백그라운드 컬러 주입 */}
        <main className="flex-1 bg-slate-100 py-20">{children}</main>
        <Footer />
        <Toaster closeButton position="top-center" richColors theme="light" />
      </body>
    </html>
  );
}
