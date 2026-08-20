/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/blog',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
