// TODO: remove after implements detect language
const productionDomains = {
  domains: [
    {
      domain: 'lafabelo.ru',
      defaultLocale: 'de',
      locales: ['de'],
    },
    {
      domain: 'lafabelo.ru/ru',
      defaultLocale: 'ru',
      locales: ['ru'],
    },
    {
      domain: 'lafabelo.ru/ua',
      defaultLocale: 'ua',
      locales: ['ua'],
    },
  ],
};

const domains = process.env.NODE_ENV === 'production'
  ? productionDomains
  : {};

module.exports = {
  i18n: {
    locales: ['ru', 'ua', 'de'],
    defaultLocale: 'de',
    ...domains,
    // localeDetection: false,
  },
  images: {
    domains: [
      'images.prismic.io',
    ],
  },
};
