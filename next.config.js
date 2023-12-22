/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  async rewrites() {
    return [
      {
        source: "/ru/:path*",
        destination: "/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
