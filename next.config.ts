import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "swip.blessymidias.com.br",
      },
    ],
  },
};

export default nextConfig;
