import Logo from './Logo.jsx';
import SelectLanguage from './SelectLanguage.jsx';
import Menu from './Menu.jsx';
import MenuMobile from './MenuMobile.jsx';
import Socials from './Socials.jsx';
import Cart from './Cart.jsx';

const Header = ({ content }) => (
  // NOTE fixed-top not needed
  // <header id="header" className="fixed-top">
  <header id="header">
    <div className="container d-flex align-items-center">
      <Logo />
      <Menu data={content.menu} />
      <MenuMobile data={content.menu} />
      <SelectLanguage />
      <Socials data={content.socials} />
      <Cart />
    </div>
  </header>
);

export default Header;
