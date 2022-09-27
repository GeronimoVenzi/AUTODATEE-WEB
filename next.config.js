/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true,
    }
  },
  assetPrefix: './',
  trailingSlash: true,
}
module.exports = nextConfig 
