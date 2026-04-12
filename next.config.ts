import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["img.clerk.com"],
  },
  experimental: {
    //serverActions: true,
  },
};

export default nextConfig;