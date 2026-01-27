// next.config.js (NEW - RECOMMENDED)

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // ... rest of the pattern
      },
      // ... more patterns
    ],
  },
};

module.exports = nextConfig;