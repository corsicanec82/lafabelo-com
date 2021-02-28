import { getClient } from '../lib/cms/api.js';
import { getData, getSlice } from '../lib/cms/utils.js';
import { queryBaseData } from '../lib/cms/queries.js';

import SEO from '../components/SEO.jsx';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Content from '../components/Content';
import BreadCrumbs from '../components/BreadCrumbs.jsx';
import Map from '../components/Contacts/Map.jsx';
import CompaniesList from '../components/Contacts/CompaniesList.jsx';
import FeedbackForm from '../components/Contacts/FeedbackForm.jsx';

const ContactsPage = ({ data }) => (
  <>
    <SEO page={data.page} />
    <Header data={data} />
    <Content>
      <BreadCrumbs title={data.page.title} breadcrumbs={getSlice(data.page, 'bread_crumbs')} />
      <Map content={getSlice(data.page, 'map')} />

      <section id="contact" className="contact">
        <div className="container">
          <CompaniesList companies={getSlice(data.page, 'companies').items} />
          <FeedbackForm content={getSlice(data.page, 'feedback_form')} />
        </div>
      </section>

    </Content>
    <Footer data={data} />
  </>
);

export const getStaticProps = async ({ locale }) => {
  const client = getClient();

  const page = await client.getSingle('contactspage', { lang: locale });
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

export default ContactsPage;
