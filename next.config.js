/** @type {import('next').NextConfig} */
const nextConfig = {
  //add github.com to image host
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'freepik.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
