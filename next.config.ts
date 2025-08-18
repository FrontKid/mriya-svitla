import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "feron.ua",
        port: "",
        pathname: "/**",
      },
    ],
  },
  productionBrowserSourceMaps: true,
};

export default nextConfig;
