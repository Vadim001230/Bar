import smoothScroll from '@/helpers/smoothScroll';
import { ArrowTop, ScrollButton } from '@/UI/icons';
import { useEffect, useRef, useState } from 'react';
import styles from './footer.module.scss';

export default function FooterComponent() {
  const [showArrow, setShowArrow] = useState(false);
  const arrowRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    smoothScroll(-window.scrollY, 800);
  };

  useEffect(() => {
    const handleScroll = () => {
      const button = arrowRef.current;
      if (button) {
        const buttonRect = button.getBoundingClientRect();
        const isVisible = buttonRect.top >= 0 && buttonRect.bottom <= window.innerHeight;
        setShowArrow(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={styles.footer}>
      <div
        className={`${styles.footer__scrollbtn} ${showArrow ? styles.footer__arrowVisible : ''}`}
        ref={arrowRef}
      >
        <ScrollButton />
        <button className={styles.footer__arrow} onClick={scrollToTop}>
          <ArrowTop />
        </button>
      </div>
      <div className={`${styles.footer__container} container`}>
        <div className={styles.footer__content}>
          © GLORY HALL &nbsp; • &nbsp; г. Гродно ул. Совецкая 31 &nbsp; • &nbsp; Tel: +3752971494563
          &nbsp;
          <br></br>Ресторан &nbsp; • &nbsp; Бар &nbsp; • &nbsp; Караоке
        </div>
        <div className={styles.footer__nav}></div>
      </div>
    </footer>
  );
}
