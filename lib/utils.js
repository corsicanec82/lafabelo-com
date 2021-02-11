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

  return getItems('menu');
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
