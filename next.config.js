/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'standalone',
  basePath: isProd ? '/elwyncruz.github.io' : '',
  assetPrefix: isProd ? '/elwyncruz.github.io/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
