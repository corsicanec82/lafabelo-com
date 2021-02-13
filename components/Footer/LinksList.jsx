import _ from 'lodash';
import { RichText } from 'prismic-reactjs';

import LinkTo from '../LinkTo.jsx';

const LinksList = ({ className, data }) => {
  if (_.isNull(data)) {
    return null;
  }

  return (
    <div className={className}>
      <h4>{RichText.asText(data.title)}</h4>
      <ul>
        {data.items.map(({ name, link }) => (
          <li key={RichText.asText(link)}>
            <i className="bx bx-chevron-right" />
            <LinkTo href={RichText.asText(link)}>
              {RichText.asText(name)}
            </LinkTo>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinksList;
