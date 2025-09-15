/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/my-portfolio", // important
  assetPrefix: "/my-portfolio/", // important for CSS & images
};

module.exports = nextConfig;
