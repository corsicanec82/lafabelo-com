import _ from 'lodash';
import { RichText } from 'prismic-reactjs';

const Copyright = ({ data }) => {
  if (_.isNull(data)) {
    return null;
  }

  return (
    <div className="mr-md-auto text-center text-md-left">
      <div className="copyright">{RichText.asText(data.copyright)}</div>
      <div className="credits">
        {RichText.render(data.credits)}
      </div>
    </div>
  );
};

export default Copyright;
