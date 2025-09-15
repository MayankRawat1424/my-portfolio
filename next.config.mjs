const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization for static export
  },
  assetPrefix: isProd ? "/my-portfolio/" : "",
  basePath: isProd ? "/my-portfolio" : "",
  output: "export", // Enable static HTML export
};

export default nextConfig;
