import { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import _ from 'lodash';
import cn from 'classnames';
import { useRouter } from 'next/router';
import path from 'path';

import { getMenuItems } from '../../lib/cms/utils.js';
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

const Menu = ({ data }) => {
  const items = getMenuItems(data);

  return (
    <nav className="mobile-nav d-lg-none">
      <ul>
        {items.map(Item)}
      </ul>
    </nav>
  );
};

const MenuMobile = ({ data }) => {
  if (_.isNull(data)) {
    return null;
  }

  const [isVisibleMobileMenu, setIsVisibleMobileMenu] = useState(false);

  const containerClass = cn({ 'mobile-nav-active': isVisibleMobileMenu });
  const buttonMenuCloseClass = cn({
    'icofont-navigation-menu': !isVisibleMobileMenu,
    'icofont-close': isVisibleMobileMenu,
  });

  const menuMobileShowToggle = (e) => {
    e.preventDefault();
    setIsVisibleMobileMenu(!isVisibleMobileMenu);
  };

  return (
    <div className={containerClass}>
      <button type="button" className="mobile-nav-toggle d-lg-none" onClick={menuMobileShowToggle}>
        <i className={buttonMenuCloseClass} />
      </button>
      <Menu data={data} />
      {/* eslint-disable-next-line */}
      {isVisibleMobileMenu && <div className="mobile-nav-overly" onClick={menuMobileShowToggle} />}
    </div>
  );
};

export default MenuMobile;
