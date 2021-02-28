/* eslint-disable import/prefer-default-export */
import _ from 'lodash';

export const isResponseSuccess = (pageProps) => {
  const statusCode = _.get(pageProps, 'statusCode', 200);
  return statusCode === 200;
};
