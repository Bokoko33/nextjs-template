const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config) => {
    // import shader
    config.module.rules.push({
      test: /\.(vert|frag|glsl)$/i,
      type: 'asset/source',
    });

    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;
