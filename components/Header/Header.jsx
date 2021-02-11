import Logo from './Logo.jsx';
import SelectLanguage from './SelectLanguage.jsx';
import Menu from './Menu.jsx';
import MenuMobile from './MenuMobile.jsx';
import Socials from './Socials.jsx';

const Header = ({ content }) => (
  <>
    <MenuMobile data={content.menu} />

    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <Logo />
        <Menu data={content.menu} />
        <SelectLanguage />
        <Socials data={content.socials} />
      </div>
    </header>
  </>
);

export default Header;
