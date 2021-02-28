import _ from 'lodash';

export const isResponseFailed = (pageProps) => {
  const { statusCode } = pageProps;
  return statusCode === 404 || statusCode === 500;
};

export const changeLocale = (previousLocale, currentLocale) => {
  if (previousLocale.current !== currentLocale) {
    _.set(previousLocale, 'current', currentLocale);

    // change language for snipcart
    const { Snipcart } = window;
    if (Snipcart) {
      Snipcart.api.session.setLanguage(currentLocale);
    }
  }
};

export const isProduction = () => process.env.NODE_ENV === 'production';
