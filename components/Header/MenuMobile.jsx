import React, { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import _ from 'lodash';
import cn from 'classnames';
import { useRouter } from 'next/router';
import path from 'path';

import { getMenuItems } from '../../lib/utils.js';
import LinkTo from '../LinkTo.jsx';

const Item = ({ name, link, items }) => {
  const { locale, pathname } = useRouter();

  if (!items) {
    return (
      <li key={link}>
        <LinkTo href={link}>{name}</LinkTo>
      </li>
    );
  }

  const [isExpanded, setIsExpanded] = useState(false);
  const slide = useRef(null);
  const props = useSpring({ height: isExpanded ? _.get(slide, 'current.scrollHeight') : 0 });
  const dropDownClass = cn('drop-down', { active: isExpanded });

  const slideDropDown = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <li key={link} className={dropDownClass}>
      <a href={path.join(pathname, locale)} onClick={slideDropDown}>{name}</a>
      <animated.ul ref={slide} style={{ ...props }}>{items.map(Item)}</animated.ul>
    </li>
  );
};

const MenuMobile = ({ data }) => {
  if (_.isNull(data)) {
    return null;
  }

  const items = getMenuItems(data);

  return (
    <nav className="mobile-nav d-lg-none">
      <ul>
        {items.map(Item)}
      </ul>
    </nav>
  );
};

export default MenuMobile;
