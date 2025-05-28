// const withNextIntl = require('next-intl/plugin')('./next-intl.config.js');

// module.exports = withNextIntl({
//   // остальные настройки Next.js
// });

const withNextIntl = require('next-intl/plugin')('./next-intl.config.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // твои другие настройки, если есть
};

module.exports = withNextIntl(nextConfig);

