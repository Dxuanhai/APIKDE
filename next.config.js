/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aniplexusa.com",
      },
    ],
  },
};

module.exports = nextConfig;
