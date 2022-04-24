/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://social-fed.imgix.net',
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
