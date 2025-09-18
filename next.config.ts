import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // 静的ホスティング用の設定
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
