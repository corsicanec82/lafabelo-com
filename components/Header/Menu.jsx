import _ from 'lodash';
import { useRouter } from 'next/router';
import path from 'path';

import { getMenuItems } from '../../lib/utils.js';
import LinkTo from '../LinkTo.jsx';

const Item = ({ name, link, items }) => {
  const { locale, pathname } = useRouter();

  if (items) {
    return (
      <li key={link} className="drop-down">
        <a
          href={path.join(pathname, locale, link)}
          onClick={(e) => { e.preventDefault(); }}
        >
          {name}
        </a>
        <ul>
          {items.map(Item)}
        </ul>
      </li>
    );
  }

  return (
    <li key={link}>
      <LinkTo href={link}>{name}</LinkTo>
    </li>
  );
};

const Menu = ({ data }) => {
  if (_.isNull(data)) {
    return null;
  }

  const items = getMenuItems(data);

  return (
    <nav className="nav-menu d-none d-lg-block">
      <ul>
        {items.map(Item)}
      </ul>
    </nav>
  );
};

export default Menu;
