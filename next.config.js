/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add other Next.js configuration options as needed
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  async middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      // Add other Next.js middleware options as needed
    }).concat(require("./middleware"));
  },
};

module.exports = nextConfig;
