import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/vein" : "",
  assetPrefix: isProd ? "/vein/" : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
        port: "",
        pathname: "/assets/**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/vein" : "",
  },
};

export default nextConfig;
