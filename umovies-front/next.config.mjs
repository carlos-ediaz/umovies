/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['main.domain.com'],
  },
  redirects() {
    return [
      {
        source: '/',
        destination: '/trending',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
