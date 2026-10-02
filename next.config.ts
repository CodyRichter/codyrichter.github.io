import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site, deployed to GitHub Pages from `out/`.
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
