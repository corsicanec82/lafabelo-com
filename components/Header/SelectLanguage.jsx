import path from 'path';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const SelectLanguage = () => {
  const router = useRouter();
  const { locales, locale: currentLocale, pathname } = router;

  const changeLocale = (locale) => (e) => {
    e.preventDefault();
    Cookies.set('NEXT_LOCALE', locale);
    router.push(pathname, pathname, { locale });
  };

  return (
    <nav className="nav-menu header-langs">
      <ul>
        <li className="drop-down">
          <span>{currentLocale.toUpperCase()}</span>
          <ul>
            {locales.map((locale) => (
              <li key={locale}>
                <a
                  href={path.join(pathname, locale)}
                  onClick={changeLocale(locale)}
                >
                  {locale.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default SelectLanguage;
