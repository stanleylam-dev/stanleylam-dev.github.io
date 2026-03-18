import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Set basePath to your GitHub repo name if deploying to username.github.io/repo-name
  // basePath: "/dev-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
