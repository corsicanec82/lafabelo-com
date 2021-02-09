import { useRouter } from 'next/router';

import Header from '../components/Header/Header.jsx';
import { getClient } from '../lib/api.js';

const HomePage = ({ data }) => {
  const { locale } = useRouter();

  return (
    <>
      <Header />
    </>
  );
};

export const getStaticProps = async ({ locale }) => {
  const client = getClient();
  const menu = await client.getSingle('menu', { lang: locale });

  return {
    props: {
      data: {
        menu: menu.data,
      },
    },
  };
};

export default HomePage;
