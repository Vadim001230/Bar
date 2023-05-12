import Link from 'next/link';
import styles from './header.module.scss';
import { InstagramIcon } from '../../UI/icons/';

export default function Header() {
  return (
    <header className={`${styles.header} container`}>
      <h1 className={styles.header__logo}>Logo</h1>
      <nav className={styles.nav}>
        <Link href="/" className={styles.nav__link_active}>
          Главная
        </Link>
        <Link href="/menu" className={styles.nav__link}>
          Меню
        </Link>
        <Link href="/contacts" className={styles.nav__link}>
          Контакты
        </Link>
      </nav>
      <a href="/" className={styles.header__media}>
        <InstagramIcon />
      </a>
    </header>
  );
}
