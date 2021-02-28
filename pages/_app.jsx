import 'bootstrap/dist/css/bootstrap.css';
import '../styles/icofont/icofont.min.css';
import '../styles/google/opensans.css';
import '../styles/google/roboto.css';
import '../styles/google/poppins.css';
import '../styles/remixicon/remixicon.css';
import '../styles/boxicons/css/boxicons.css';
import 'aos/dist/aos.css';
import '../styles/style.css';

import { useEffect, useRef } from 'react';
import aos from 'aos';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Container from '../components/Container.jsx';
import BackToTopButton from '../components/BackToTopButton.jsx';
import { loadSnipcart } from '../lib/snipcart.js';
import { isResponseFailed, changeLocale, isProduction } from '../lib/utils.js';

const App = ({ Component, pageProps }) => {
  const { locale: currentLocale } = useRouter();
  const previousLocale = useRef(currentLocale);

  useEffect(() => {
    if (!isResponseFailed(pageProps)) {
      aos.init({ duration: 700 });
      loadSnipcart();
    }
  }, []);

  useEffect(() => {
    changeLocale(previousLocale, currentLocale);
  });

  return (
    <>
      <Head>
        {isProduction() && <script src="./rollbar.js" />}
        <link rel="stylesheet" href="/snipcart.css" />
      </Head>
      <Container>
        <Component {...pageProps} />
        <BackToTopButton />
      </Container>
    </>
  );
};

export default App;
