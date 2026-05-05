/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/', destination: '/pl', permanent: true },
      { source: '/rent', destination: '/ru/rent', permanent: true },
      { source: '/landlord', destination: '/ru/landlord', permanent: true },
      { source: '/wspolpraca', destination: '/ru/wspolpraca', permanent: true },
      { source: '/partnership', destination: '/ru/wspolpraca', permanent: true },
      { source: '/privacy', destination: '/ru/privacy', permanent: true },
    ];
  },
}

module.exports = nextConfig
