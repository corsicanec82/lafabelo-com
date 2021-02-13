import { useRouter } from 'next/router';
import _ from 'lodash';

import { getClient } from '../lib/api.js';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';

const HomePage = ({ content }) => {
  // eslint-disable-next-line
  const { locale } = useRouter();

  return (
    <>
      <Header content={content} />
      <div className="flex-grow-1">
        body
      </div>
      <Footer content={content} />
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
