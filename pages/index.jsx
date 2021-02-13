import { useRouter } from 'next/router';

import { getClient } from '../lib/api.js';
import { getData } from '../lib/utils.js';
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
  const copyright = await client.getSingle('copyright', { lang: locale });
  const company = await client.getSingle('company', { lang: locale });
  const usefulLinks = await client.getByUID('links_list', 'useful_links', { lang: locale });

  return {
    props: {
      content: {
        menu: getData(menu),
        socials: getData(socials),
        copyright: getData(copyright),
        company: getData(company),
        usefulLinks: getData(usefulLinks),
      },
    },
  };
};

export default HomePage;
