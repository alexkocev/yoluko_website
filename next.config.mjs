/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://yoluko.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.yoluko.com',
          },
        ],
        destination: 'https://yoluko.com/:path*',
        permanent: true,
      },
      // Clinic Intelligence → standalone site
      {
        source: '/clinic-intelligence',
        destination: 'https://atlas.yoluko.com',
        permanent: true,
      },
      // Legacy locale redirects
      {
        source: '/en',
        destination: '/',
        permanent: true,
      },
      {
        source: '/fr',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/success',
        destination: '/success',
        permanent: true,
      },
      {
        source: '/fr/success',
        destination: '/success',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
