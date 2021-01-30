import Logo from './Logo';
import SelectLanguage from './SelectLanguage';

const Header = () => (
  <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">
      <Logo />
      <SelectLanguage />
    </div>
  </header>
);

export default Header;
