import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/promise", destination: "/", permanent: true }];
  },
};

export default nextConfig;
