/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: '*',
      },
    ],
  },
  // exportPathMap: '/out',
  async rewrites() {
    return [
      {
        source: '/:any*',
        destination: '/',
      }
    ];
  }
}

module.exports = nextConfig
