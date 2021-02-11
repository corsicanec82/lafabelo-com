import { useRouter } from 'next/router';
import _ from 'lodash';

import { getClient } from '../lib/api.js';
import Header from '../components/Header/Header.jsx';

const HomePage = ({ content }) => {
  // eslint-disable-next-line
  const { locale } = useRouter();

  return (
    <>
      <Header content={content} />
    </>
  );
};

export const getStaticProps = async ({ locale }) => {
  const client = getClient();
  const menu = await client.getSingle('menu', { lang: locale });
  const socials = await client.getSingle('socials', { lang: locale });

  return {
    props: {
      content: {
        menu: _.get(menu, 'data', null),
        socials: _.get(socials, 'data', null),
      },
    },
  };
};

export default HomePage;
