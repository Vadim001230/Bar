import styles from './home.module.scss';
import { ArrowBottom, ScrollButton } from '../../UI/icons/';
import smoothScroll from '@/helpers/smoothScroll';
import Content from '../content/content';

export default function HomeSection() {
  const scrollToBottom = () => {
    smoothScroll(window.innerHeight, 300);
  };

  return (
    <>
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
      <section>
        <Content
          title={'Discover'}
          subTitle={'OUR STORY'}
          content={
            'Rosa is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection.'
          }
          reverse={false}
        >
          <img
            src="https://demos.pixelgrade.com/rosa/wp-content/uploads/sites/5/2014/06/slider-shortcode-1.jpg"
            alt=""
            loading="lazy"
          />
        </Content>

        <Content
          title={'Discover'}
          subTitle={'MENU'}
          content={
            'For those with pure food indulgence in mind, come next door and sate your desires with our ever changing internationally and seasonally inspired small plates.  We love food, lots of different food, just like you.'
          }
          reverse={true}
        >
          <img
            src="https://demos.pixelgrade.com/rosa/wp-content/uploads/sites/5/2014/06/slider-shortcode-1.jpg"
            alt=""
            loading="lazy"
          />
        </Content>

        <Content
          title={'Culinary'}
          subTitle={'delight'}
          content={
            'We promise an intimate and relaxed dining experience that offers something different to local and foreign patrons and ensures you enjoy a memorable food experience every time.'
          }
          reverse={false}
        >
          <div className={styles.culinary}>
            <img
              src="https://demos.pixelgrade.com/rosa/wp-content/uploads/sites/5/2014/05/bacon-1-400x600.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://demos.pixelgrade.com/rosa/wp-content/uploads/sites/5/2014/05/bacon-2-400x600.jpg"
              alt=""
              loading="lazy"
            />
          </div>
        </Content>
      </section>
    </>
  );
}
