import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './header.module.scss';
import { InstagramIcon } from '../../UI/icons/';

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} container`}>
        <h1 className={styles.header__logo}>Logo</h1>
        <nav className={styles.nav}>
          <Link
            href="/"
            className={router.pathname === '/' ? styles.nav__link_active : styles.nav__link}
          >
            Главная
          </Link>
          <Link
            href="/menu"
            className={router.pathname === '/menu' ? styles.nav__link_active : styles.nav__link}
          >
            Меню
          </Link>
          <Link
            href="/contacts"
            className={router.pathname === '/contacts' ? styles.nav__link_active : styles.nav__link}
          >
            Контакты
          </Link>
        </nav>
        <a href="/" className={styles.header__media}>
          <InstagramIcon />
        </a>
      </div>
    </header>
  );
}
