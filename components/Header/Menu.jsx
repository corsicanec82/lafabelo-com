import _ from 'lodash';

import { getMenuItems } from '../../lib/utils.js';
import LinkTo from '../LinkTo.jsx';

const Item = ({ name, link, items }) => {
  if (items) {
    return (
      <li key={link} className="drop-down">
        <LinkTo href={link}>{name}</LinkTo>
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
