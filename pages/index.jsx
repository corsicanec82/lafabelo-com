import { useRouter } from 'next/router';

import Header from '../components/Header/Header';

const HomePage = () => {
  const { locale } = useRouter();

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      {locale}
    </>
  );
};

export default HomePage;
