import Logo from './Logo.jsx';
import SelectLanguage from './SelectLanguage.jsx';
import Menu from './Menu.jsx';
import MenuMobile from './MenuMobile.jsx';
import Socials from './Socials.jsx';
import Cart from './Cart.jsx';

const Header = ({ data }) => (
  <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">
      <Logo />
      <Menu data={data.menu} />
      <MenuMobile data={data.menu} />
      <SelectLanguage />
      <Socials data={data.socials} />
      <Cart />
    </div>
  </header>
);

export default Header;
