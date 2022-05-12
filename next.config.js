/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['@propertyguru/hive-ui-widgets']);
const nextConfig = withTM({
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ];
  },
});

module.exports = nextConfig
