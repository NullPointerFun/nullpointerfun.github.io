import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 核心修正：强制让路径从根目录开始，不要加任何前缀
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
};

export default nextConfig;