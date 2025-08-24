/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // WWW to non-WWW redirect
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
      // Root redirect to default language
      {
        source: '/',
        destination: '/en',
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
          // Force HTTPS and improve security
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
