// import { Component1 } from "@my/pkg-cxxxyyyyzzzzaaaabbbbccccddddeeex";

import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("dir ", path.resolve(__dirname, "node_modules"));

const resolveAlias = {
  "@my/pkg-cxxxyyyyzzzzaaaabbbbccccddddeeex$": path.resolve(
    __dirname,
    "node_modules/@my/pkg-cxxxyyyyzzzzaaaabbbbccccddddeeex",
  ),
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...resolveAlias,
    };
    return config;
  },
  transpilePackages: [
    "@my/pkg-a",
    "@my/pkg-b",
    "@my/pkg-cxxxyyyyzzzzaaaabbbbccccddddeee",
    "@my/pkg-cxxxyyyyzzzzaaaabbbbccccddddeeee",
    "@my/pkg-cxxxyyyyzzzzaaaabbbbccccddddeeex",
  ],
  experimental: {
    optimizePackageImports: ["@my/pkg-cxxxyyyyzzzzaaaabbbbccccddddeeex"],
  },
};

export default nextConfig;
