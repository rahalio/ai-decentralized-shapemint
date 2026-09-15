/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@shapemint/core'],
  allowedDevOrigins: ['127.0.0.1', 'localhost'],
};

export default nextConfig;
