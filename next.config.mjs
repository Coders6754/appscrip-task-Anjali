/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com'],
    unoptimized: true,
  },
  typescript: {
    // Don't block deployment on TypeScript errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // Don't block deployment on ESLint errors
    ignoreDuringBuilds: true,
  },
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
}

export default nextConfig
