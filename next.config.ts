// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow images from these domains
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // for placeholders during dev
      },
    ],
    formats: ["image/avif", "image/webp"], // serve modern formats
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      // Cache static assets aggressively
      {
        source: "/(.*)\\.(jpg|jpeg|png|svg|webp|avif|ico|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Compress output
  compress: true,

  // Production source maps off (smaller bundle)
  productionBrowserSourceMaps: false,
};

export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     domains: ["cdn.sanity.io"],
//   },
// };

// export default nextConfig;
