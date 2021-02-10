import { useState } from 'react';
import cn from 'classnames';

import Logo from './Logo.jsx';
import SelectLanguage from './SelectLanguage.jsx';
import Menu from './Menu.jsx';
import MenuMobile from './MenuMobile.jsx';

const Header = ({ content }) => {
  const [isVisibleMobileMenu, setIsVisibleMobileMenu] = useState(false);

  const containerClass = cn({ 'mobile-nav-active': isVisibleMobileMenu });
  const buttonMenuCloseClass = cn({
    'icofont-navigation-menu': !isVisibleMobileMenu,
    'icofont-close': isVisibleMobileMenu,
  });

  const menuMobileShowToggle = (e) => {
    e.preventDefault();
    setIsVisibleMobileMenu(!isVisibleMobileMenu);
  };

  return (
    <>
      <div className={containerClass}>
        <button type="button" className="mobile-nav-toggle d-lg-none" onClick={menuMobileShowToggle}>
          <i className={buttonMenuCloseClass} />
        </button>
        <MenuMobile data={content.menu} />
        {/* eslint-disable-next-line */}
        {isVisibleMobileMenu && <div className="mobile-nav-overly" onClick={menuMobileShowToggle} />}
      </div>

      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <Logo />
          <Menu data={content.menu} />
          <SelectLanguage />
        </div>
      </header>
    </>
  );
};

export default Header;
