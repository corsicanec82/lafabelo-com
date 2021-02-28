/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

import LinkTo from '../LinkTo.jsx';

const SelectLanguage = () => {
  const router = useRouter();
  const { locales, locale: currentLocale, pathname } = router;

  const changeLocale = (locale) => () => {
    if (locale !== currentLocale) {
      Cookies.set('NEXT_LOCALE', locale);
    }
  };

  if (!Cookies.get('NEXT_LOCALE')) {
    Cookies.set('NEXT_LOCALE', currentLocale);
  }

  return (
    <nav className="nav-menu header-langs">
      <ul>
        <li className="drop-down">
          <span>{currentLocale.toUpperCase()}</span>
          <ul>
            {locales.map((locale) => (
              <li key={locale} onClick={changeLocale(locale)}>
                <LinkTo
                  href={pathname}
                  locale={locale}
                >
                  {locale.toUpperCase()}
                </LinkTo>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default SelectLanguage;
