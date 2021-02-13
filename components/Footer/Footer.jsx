import Copyright from './Copyright.jsx';
import Company from './Company.jsx';
import LinksList from './LinksList.jsx';
import Subscribe from './Subscribe.jsx';

const Footer = ({ content }) => (
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <Company data={content.company} />
          <LinksList className="col-lg-2 col-md-6 footer-links" data={content.usefulLinks} />
          <LinksList className="col-lg-3 col-md-6 footer-links" data={content.ourProducts} />
          <Subscribe data={content.subscribe} />
        </div>
      </div>
    </div>

    <div className="container d-md-flex py-4">
      <Copyright data={content.copyright} />
      {/* <Socials socials={socials} /> */}
    </div>
  </footer>
);

export default Footer;
