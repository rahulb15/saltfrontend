// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   env: {
//     NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   images: {
//     domains: ['static.ipms247.com'],
//   },
//   // async rewrites() {
//   //   return [
//   //     {
//   //       source: '/api/booking',
//   //       destination: 'https://live.ipms247.com/booking/reservation_api/listing.php',
//   //     },
//   //   ];
//   // },
//   async rewrites() {
//     return [
//       {
//         source: '/api/:path*',
//         destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`, // Proxy to Backend
//       },
//     ];
//   },
// };

// module.exports = nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   env: {
//     NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   images: {
//     domains: ['static.ipms247.com', 'res.cloudinary.com'], // Add res.cloudinary.com here
//   },
//   async rewrites() {
//     return [
//       {
//         source: '/api/:path*',
//         destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`, // Proxy to Backend
//       },
//     ];
//   },
// };

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.ipms247.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "saltstayz.com", // Add this for saltstayz.com
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`, // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
