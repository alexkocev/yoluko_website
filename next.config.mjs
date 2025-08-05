/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
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
    ];
  },
};

export default nextConfig;
