import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/nizi_pale",
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  // 静的ホスティング用の設定
  trailingSlash: true,
  reactStrictMode: false,
  // パフォーマンス最適化
  poweredByHeader: false,
  compress: false, // 画像圧縮を無効化
  // チャンクエラーを防ぐ設定
  webpack: (config) => {
    config.optimization.splitChunks = false;
    config.optimization.runtimeChunk = false;
    return config;
  },
};

export default nextConfig;
