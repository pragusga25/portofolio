/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config) => {
    // Unset client-side javascript that only works server-side
    config.resolve.fallback = { fs: false, module: false };

    return config;
  },
  eslint: {
    dirs: ['pages', 'components', 'contexts', 'hooks', 'redux', 'utils', 'contants'],
  },
};
