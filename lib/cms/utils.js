import { RichText } from 'prismic-reactjs';
import _ from 'lodash';

export const getData = (response) => _.get(response, 'data', null);

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

export const getSocialsItems = (data) => {
  const { body } = data;

  const socials = body.find(({ primary }) => (
    primary.socials_name && RichText.asText(primary.socials_name) === 'socials'
  ));

  return socials.items.map(({ name, link }) => (
    {
      name: RichText.asText(name),
      url: link.url,
    }
  ));
};

export const getSlice = (data, type) => {
  const { body } = data;

  return body.find(({ slice_type }) => slice_type === type);
};
