const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.pexels.com",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;