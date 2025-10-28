import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  env: {
    // 빌드 시점에 주입해 SSR에서도 값 고정
    API_URL: process.env.API_URL,
  },
  async headers() {
    return [
      {
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
        source: "/:path*",
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
