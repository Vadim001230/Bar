import smoothScroll from '@/helpers/smoothScroll';
import { ArrowTop, ScrollButton } from '@/UI/icons';
import styles from './footer.module.scss';

export default function FooterComponent() {
  const scrollToTop = () => {
    smoothScroll(0, 600);
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__scrollbtn}>
        <ScrollButton />
        <button className={styles.footer__arrow} onClick={scrollToTop}>
          <ArrowTop />
        </button>
      </div>
      <div className={`${styles.footer__container} container`}>
        <div className={styles.footer__content}>
          © ROSA 2023&nbsp; • &nbsp; 13 Hanway&nbsp;Square, London&nbsp; &nbsp;• &nbsp; Tel:
          71494563 &nbsp; • &nbsp; Handcrafted with love by&nbsp;
        </div>
        <div className={styles.footer__nav}></div>
      </div>
    </footer>
  );
}
