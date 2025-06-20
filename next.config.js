/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'source.unsplash.com',
      pathname: '**',
    },
    {
      protocol: 'https',
      hostname: 'picsum.photos',
      pathname: '**',
    },
  ],
},
}

module.exports = nextConfig
