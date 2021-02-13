import 'bootstrap/dist/css/bootstrap.css';
import '../styles/style.css';
import '../styles/icofont/icofont.min.css';
import '../styles/google/opensans.css';
import '../styles/google/roboto.css';
import '../styles/google/poppins.css';
import '../styles/remixicon/remixicon.css';
import '../styles/boxicons/css/boxicons.css';

import Container from '../components/Container.jsx';

const App = ({ Component, pageProps }) => (
  <Container>
    <Component {...pageProps} />
  </Container>
);

export default App;
