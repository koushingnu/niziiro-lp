import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  // 静的ホスティング用の設定
  trailingSlash: true,
  reactStrictMode: false,
  // パフォーマンス最適化
  poweredByHeader: false,
  compress: true,
  // キャッシュ設定
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;
