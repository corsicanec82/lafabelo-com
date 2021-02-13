import Copyright from './Copyright.jsx';
import Company from './Company.jsx';
import LinksList from './LinksList.jsx';
import Subscribe from './Subscribe.jsx';
import Socials from './Socials.jsx';

const Footer = ({ data }) => (
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <Company data={data.company} />
          <LinksList className="col-lg-2 col-md-6 footer-links" data={data.usefulLinks} />
          <LinksList className="col-lg-3 col-md-6 footer-links" data={data.ourProducts} />
          <Subscribe data={data.subscribe} />
        </div>
      </div>
    </div>

    <div className="container d-md-flex py-4">
      <Copyright data={data.copyright} />
      <Socials data={data.socials} />
    </div>
  </footer>
);

export default Footer;
