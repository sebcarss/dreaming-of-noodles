import type { NextConfig } from 'next'
 
const config: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dreamingofnoodles.s3.eu-west-1.amazonaws.com',
        port: '',
        pathname: '/images/**',
        search: '',
      },
    ],
  },
}
 
export default config