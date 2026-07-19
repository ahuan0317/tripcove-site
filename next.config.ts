import type { NextConfig } from "next";

// GitHub Pages 项目站部署在 /tripcove-site 子路径下
const isGhPages = process.env.DEPLOY_TARGET === "gh-pages";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  output: "export",
  basePath: isGhPages ? "/tripcove-site" : "",
};

export default nextConfig;
