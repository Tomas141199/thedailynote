/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "images-ext-2.discordapp.net",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
