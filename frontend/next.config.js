/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NODE_ENV === 'production' ? '/api/v1' : (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8001'),
  },
};

module.exports = nextConfig;
