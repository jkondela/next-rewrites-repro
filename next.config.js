/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/books/:params*",
        destination: "/products/book/:params*",
      },
    ];
  },
};

module.exports = nextConfig;
