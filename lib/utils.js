/* eslint-disable import/prefer-default-export */

import { RichText } from 'prismic-reactjs';

export const getMenuItems = (data) => {
  const { body } = data;

  const getItems = (menuName) => {
    const menu = body.find(({ primary }) => (
      primary.menu_name && RichText.asText(primary.menu_name) === menuName
    ));

    return menu.items.map(({ name, link, submenu_name }) => {
      const subMenuName = submenu_name && RichText.asText(submenu_name);
      return {
        name: RichText.asText(name),
        link: RichText.asText(link),
        items: subMenuName && getItems(subMenuName),
      };
    });
  };

  return getItems('root');
};
