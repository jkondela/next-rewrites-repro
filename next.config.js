/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/books/:path*",
        destination: "/products/book/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
