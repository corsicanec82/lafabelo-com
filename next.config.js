// TODO: remove after implements detect language
const productionDomains = {
  domains: [
    {
      domain: 'lafabelo.ru',
      defaultLocale: 'de',
      locales: ['ru', 'ua', 'de'],
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
    localeDetection: false,
  },
  images: {
    domains: [
      'images.prismic.io',
    ],
  },
};
