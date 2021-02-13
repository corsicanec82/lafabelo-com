import _ from 'lodash';
import { RichText } from 'prismic-reactjs';

const Subscribe = ({ data }) => {
  if (_.isNull(data)) {
    return null;
  }

  return (
    <div className="col-lg-4 col-md-6 footer-newsletter">
      <h4>{RichText.asText(data.title)}</h4>
      <p>{RichText.asText(data.text)}</p>
      <form action="" method="post">
        <input id="input-email" type="email" name="email" style={{ outline: 'none' }} placeholder={RichText.asText(data.placeholder)} />
        <label className="visuallyhidden" htmlFor="input-email">{RichText.asText(data.placeholder)}</label>
        <input type="submit" value={RichText.asText(data.button)} />
      </form>
    </div>
  );
};

export default Subscribe;
