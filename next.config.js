/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'demos.creative-tim.com',
          port: '',
          pathname: '/corporate-ui-dashboard/assets/img/**',
        },
      ],
    },
  }

module.exports = nextConfig
