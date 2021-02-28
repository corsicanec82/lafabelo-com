/* eslint-disable import/prefer-default-export */

export const isResponseSuccess = (pageProps) => {
  const { statusCode } = pageProps;
  return statusCode === 200;
};
