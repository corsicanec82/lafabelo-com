import Logo from './Logo.jsx';
import SelectLanguage from './SelectLanguage.jsx';
import Menu from './Menu.jsx';
import MenuMobile from './MenuMobile.jsx';

const Header = ({ content }) => (
  <>
    <MenuMobile data={content.menu} />

    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <Logo />
        <Menu data={content.menu} />
        <SelectLanguage />
      </div>
    </header>
  </>
);

export default Header;
