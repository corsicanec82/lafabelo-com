import { getClient } from '../lib/api.js';
import { getData, getSlice } from '../lib/utils.js';
import { queryBaseData } from '../lib/queries.js';

import SEO from '../components/SEO.jsx';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Content from '../components/Content';
import ContentList from '../components/About/ContentList.jsx';
import BreadCrumbs from '../components/BreadCrumbs.jsx';

const AboutPage = ({ data }) => (
  <>
    <SEO page={data.page} />
    <Header data={data} />
    <Content>
      <BreadCrumbs title={data.page.title} breadcrumbs={getSlice(data.page, 'bread_crumbs')} />
      <ContentList content={getSlice(data.page, 'content')} />
    </Content>
    <Footer data={data} />
  </>
);

export const getStaticProps = async ({ locale }) => {
  const client = getClient();

  const page = await client.getSingle('aboutpage', { lang: locale });
  if (!page) {
    return { notFound: true };
  }

  const baseData = await queryBaseData(client, locale);

  return {
    props: {
      data: {
        ...baseData,
        page: getData(page),
      },
    },
  };
};

export default AboutPage;
