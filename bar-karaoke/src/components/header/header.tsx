import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './header.module.scss';
import { InstagramIcon } from '../../UI/icons/';

export default function HeaderComponent() {
  const router = useRouter();
  const [color, setColor] = useState('var(--white)');
  const [bgColor, setBgColor] = useState('transparent');
  const [activeBurger, setActiveBurger] = useState(false);

  const handleBurger = () => {
    if (window.innerWidth <= 768) {
      setActiveBurger(!activeBurger);
      document.body.classList.toggle('no-scroll');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (router.pathname === '/') {
        window.scrollY > window.innerHeight - 50
          ? (setColor('var(--black)'), setBgColor('var(--white)'))
          : (setColor('var(--white)'), setBgColor('transparent'));
      } else {
        window.scrollY > 280
          ? (setColor('var(--black)'), setBgColor('var(--white)'))
          : (setColor('var(--white)'), setBgColor('transparent'));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [router.pathname]);

  return (
    <>
      <div className={`${styles.blackout} ${activeBurger ? styles.blackout__active : ''}`}></div>
      <header className={styles.header} style={{ backgroundColor: bgColor }}>
        <div className={`${styles.header__container} container`}>
          <button
            className={`${styles.burger} ${activeBurger ? styles.burger__active : ''}`}
            onClick={handleBurger}
          >
            <span style={{ backgroundColor: color }}></span>
          </button>
          <Link href="/" className={styles.header__logo} style={{ color: color }}>
            Glory hall
          </Link>
          <nav className={`${styles.nav} ${activeBurger ? styles.nav__active : ''}`}>
            <Link
              href="/"
              className={router.pathname === '/' ? styles.nav__link_active : styles.nav__link}
              style={{ color: color, borderColor: color }}
              onClick={handleBurger}
            >
              Главная
            </Link>
            <Link
              href="/menu"
              className={router.pathname === '/menu' ? styles.nav__link_active : styles.nav__link}
              style={{ color: color, borderColor: color }}
              onClick={handleBurger}
            >
              Меню
            </Link>
            <Link
              href="/contacts"
              className={
                router.pathname === '/contacts' ? styles.nav__link_active : styles.nav__link
              }
              style={{ color: color, borderColor: color }}
              onClick={handleBurger}
            >
              Контакты
            </Link>
            <hr></hr>
            <a
              href="https://www.instagram.com/smokkin.secretproject/"
              className={styles.header__media}
              target="blank"
              onClick={handleBurger}
            >
              <InstagramIcon style={{ fill: color }} />
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
