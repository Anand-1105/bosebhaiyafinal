import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
