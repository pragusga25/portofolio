/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: [
      'pages',
      'components',
      'contexts',
      'hooks',
      'redux',
      'utils',
      'contants',
    ],
  },
};
