const isProd = process.env.NODE_ENV === 'production'

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
  basePath: isProd ? '/Skansen-Map' : '',
  assetPrefix: isProd ? '/Skansen-Map/' : '',
  // exportPathMap: '/out',
  async rewrites() {
    return [
      // {
        // source: '/:any*',
        // destination: '/',
      // }
    ];
  }
}

module.exports = nextConfig
