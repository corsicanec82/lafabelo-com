import _ from 'lodash';

import { getSocialsItems } from '../../lib/cms/utils.js';

const Socials = ({ data }) => {
  if (_.isNull(data)) {
    return null;
  }

  const items = getSocialsItems(data);

  return (
    <div className="header-social-links">
      {items.map(({ name, url }) => (
        <a key={url} href={url} className={name} target="_blank" rel="noreferrer">
          <i className={`icofont-${name}`} />
        </a>
      ))}
    </div>
  );
};

export default Socials;
