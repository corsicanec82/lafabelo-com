import _ from 'lodash';
import { RichText } from 'prismic-reactjs';

const Company = ({ data }) => {
  if (_.isNull(data)) {
    return null;
  }

  return (
    <div className="col-lg-3 col-md-6 footer-contact">
      {RichText.render(data.details)}
    </div>
  );
};

export default Company;
