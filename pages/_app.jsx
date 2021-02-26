import 'bootstrap/dist/css/bootstrap.css';
import '../styles/style.css';
import '../styles/icofont/icofont.min.css';
import '../styles/google/opensans.css';
import '../styles/google/roboto.css';
import '../styles/google/poppins.css';
import '../styles/remixicon/remixicon.css';
import '../styles/boxicons/css/boxicons.css';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
import aos from 'aos';

import Container from '../components/Container.jsx';

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    aos.init({ duration: 700 });
  }, []);

  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
};

export default App;
