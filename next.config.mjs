/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false, // Consistent URL structure without trailing slashes
  async redirects() {
    return [
      // HTTP to HTTPS redirect - force HTTPS everywhere
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
      // WWW to non-WWW redirect with language preservation
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
      // Handle legacy URLs without language prefix
      {
        source: '/success',
        destination: '/en/success',
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
