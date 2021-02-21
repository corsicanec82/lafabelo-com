import Head from 'next/head';
import { RichText } from 'prismic-reactjs';

const SEO = ({ page }) => {
  const title = RichText.asText(page.title);
  const description = RichText.asText(page.description);
  const keywords = RichText.asText(page.keywords);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
  );
};

export default SEO;
