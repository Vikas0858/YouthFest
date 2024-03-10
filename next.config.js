/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    dev: process.env.NODE_ENV !== "production",
    RAZORPAY_KEY: process.env.RAZORPAY_KEY,
    RAZORPAY_SECRET: process.env.RAZORPAY_SECRET,
    RAZORPAY_API: process.env.RAZORPAY_API,
    REGISTRATION_API: process.env.REGISTRATION_API,
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "3000",
  //       pathname: "/events",
  //     },
  //   ],
  // },
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
