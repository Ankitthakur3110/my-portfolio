/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Change this to your GitHub repo name if deploying to /my-portfolio/
  basePath: '/my-portfolio',
  assetPrefix: '/my-portfolio/',
}

module.exports = nextConfig
