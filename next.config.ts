/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      new URL("https://www.cotopay.in/img/CotopayLogo-white.png"),
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "purepng.com",
      },
    ],
  },
};

module.exports = nextConfig;
