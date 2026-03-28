import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/funda", destination: "/funda/en.html" },
      { source: "/funda/en", destination: "/funda/en.html" },
      { source: "/funda/az", destination: "/funda/az.html" },
      { source: "/safhospital", destination: "/safhospital/index.html" },
    ];
  },
};

export default nextConfig;
