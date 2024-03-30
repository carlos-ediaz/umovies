/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.tmdb.org', 'drive.google.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
      },
    ],
  },
  env: {
    api_key: '63502a8d7eab85c6ef84ffd3637ed62f',
    token:
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzUwMmE4ZDdlYWI4NWM2ZWY4NGZmZDM2MzdlZDYyZiIsInN1YiI6IjY2MDRkZWRlOTU2NjU4MDE2MTdkZWE4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yO95rRycns4wz-jHxYpQE_7BIctTDKT9uaHevc1br8o',
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
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
