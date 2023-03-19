/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.srv54239.seohost.com.pl',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
