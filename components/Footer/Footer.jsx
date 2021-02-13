import Copyright from './Copyright.jsx';
import Company from './Company.jsx';
import LinksList from './LinksList.jsx';

const Footer = ({ content }) => (
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <Company data={content.company} />
          <LinksList className="col-lg-2 col-md-6 footer-links" data={content.usefulLinks} />
          {/* <LinksList className="col-lg-3 col-md-6 footer-links" listName={data.our_products_text} list={data.our_products} /> */}
          {/* <Subscribe data={data.subscribe} /> */}
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
