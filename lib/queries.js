/* eslint-disable import/prefer-default-export */

import { getData } from './utils.js';

export const queryBaseData = async (client, locale) => {
  const menu = await client.getSingle('menu', { lang: locale });
  const socials = await client.getSingle('socials', { lang: locale });
  const copyright = await client.getSingle('copyright', { lang: locale });
  const company = await client.getSingle('company', { lang: locale });
  const usefulLinks = await client.getByUID('links_list', 'useful_links', { lang: locale });
  const ourProducts = await client.getByUID('links_list', 'our_products', { lang: locale });
  const subscribe = await client.getSingle('subscribe', { lang: locale });

  return {
    menu: getData(menu),
    socials: getData(socials),
    copyright: getData(copyright),
    company: getData(company),
    usefulLinks: getData(usefulLinks),
    ourProducts: getData(ourProducts),
    subscribe: getData(subscribe),
  };
};
