import Logo from './Logo.jsx';
import SelectLanguage from './SelectLanguage.jsx';

const Header = () => (
  <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">
      <Logo />
      <SelectLanguage />
    </div>
  </header>
);

export default Header;
