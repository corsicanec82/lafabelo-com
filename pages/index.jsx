/* eslint-disable arrow-body-style */

import Logo from '../components/Header/Logo';
// import { useRouter } from 'next/router';

const HomePage = () => {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <Logo />
        {/* <Menu items={menu} />
        <Socials socials={socials} />
        <Languages />
        <Cart /> */}
      </div>
    </header>
  );
};

export default HomePage;
