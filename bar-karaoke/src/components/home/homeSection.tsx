import styles from './home.module.scss';
import { ArrowBottom, ScrollButton } from '../../UI/icons/';
import smoothScroll from '@/helpers/smoothScroll';

export default function HomeSection() {
  const scrollToBottom = () => {
    smoothScroll(window.innerHeight, 300);
  };

  return (
    <section className={styles.home}>
      <article className={styles.article}>
        <h2>Welcome</h2>
        <h1>THE LOGO</h1>
        <div className={styles.separator}>
          <div className={styles.separator__left}></div>
          <div className={styles.separator__center}>✻</div>
          <div className={styles.separator__right}></div>
        </div>
        <h5>Готовы к открытию</h5>
        <div className={styles.scrollbtn}>
          <ScrollButton />
          <button className={styles.scrollbtn__arrow} onClick={scrollToBottom}>
            <ArrowBottom />
          </button>
        </div>
      </article>
    </section>
  );
}
