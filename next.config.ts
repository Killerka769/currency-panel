import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/currency-panel',
  assetPrefix: '/currency-panel/',
};

export default nextConfig;
