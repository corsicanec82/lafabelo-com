/* eslint-disable import/prefer-default-export */

import Prismic from 'prismic-javascript';

const REPOSITORY_NAME = process.env.PRISMIC_REPOSITORY_NAME;
const API_URL = `https://${REPOSITORY_NAME}.cdn.prismic.io/api/v2`;
const API_TOKEN = process.env.PRISMIC_API_TOKEN;

export const getClient = () => Prismic.client(API_URL, {
  accessToken: API_TOKEN,
});
