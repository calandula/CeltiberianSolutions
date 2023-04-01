/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    apiURL: 'http://localhost:3000'
  }
}

module.exports = nextConfig
