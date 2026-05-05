import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  async redirects() {
    return [
      {
        source: '/research',
        destination: '/patents-research',
        permanent: true,
      },
      {
        source: '/ip',
        destination: '/patents-research',
        permanent: true,
      },
      {
        source: '/intellectual-property',
        destination: '/patents-research',
        permanent: true,
      },
      {
        source: '/intellectual_property',
        destination: '/patents-research',
        permanent: true,
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
