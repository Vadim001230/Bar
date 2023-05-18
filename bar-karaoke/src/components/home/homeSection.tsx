import { useEffect, useRef } from 'react';
import styles from './home.module.scss';
import { ArrowBottom, ScrollButton } from '../../UI/icons/';
import smoothScroll from '@/helpers/smoothScroll';
import ContentComponent from '../content/content';
import ParralaxComponent from '../parallax/parallax';

export default function HomeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    smoothScroll(window.innerHeight - window.scrollY, 300);
  };

  useEffect(() => {
    if (containerRef.current) {
      const handleScroll = () => {
        if (containerRef.current) {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const containerTop = containerRef.current.getBoundingClientRect().top + scrollTop;
          const speed = 0.4;
          const offsetY = (scrollTop - containerTop) * speed;
          containerRef.current.style.backgroundPositionY = `${offsetY}px`;
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <>
      <section className={styles.home} ref={containerRef}>
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
        <ContentComponent
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
        </ContentComponent>

        <ParralaxComponent
          title={'Tasteful'}
          subtitle={'RECIPES'}
          imageSrc={
            'https://demos.pixelgrade.com/rosa/wp-content/uploads/sites/5/2014/05/frontpage-menu.jpg'
          }
        />

        <ContentComponent
          title={'Discover'}
          subTitle={'MENU'}
          content={
            'For those with pure food indulgence in mind, come next door and sate your desires with our ever changing internationally and seasonally inspired small plates.  We love food, lots of different food, just like you.'
          }
          reverse={true}
        >
          <div className={styles.imagesX4}>
            <img
              src="https://demos.pixelgrade.com/rosa/wp-content/uploads/sites/5/2014/05/menu-thumb-6-300x218.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://demos.pixelgrade.com/rosa/wp-content/uploads/sites/5/2014/05/menu-thumb-2-300x218.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://demos.pixelgrade.com/rosa/wp-content/uploads/sites/5/2014/05/menu-thumb-1-300x218.jpg"
              alt=""
              loading="lazy"
            />
            <img
              src="https://demos.pixelgrade.com/rosa/wp-content/uploads/sites/5/2014/05/menu-thumb-4-300x218.jpg"
              alt=""
              loading="lazy"
            />
          </div>
        </ContentComponent>

        <ParralaxComponent
          title={'The perfect'}
          subtitle={'BLEND'}
          imageSrc={
            'https://demos.pixelgrade.com/rosa/wp-content/uploads/sites/5/2014/05/make-a-reservation.jpg'
          }
        />

        <ContentComponent
          title={'Culinary'}
          subTitle={'delight'}
          content={
            'We promise an intimate and relaxed dining experience that offers something different to local and foreign patrons and ensures you enjoy a memorable food experience every time.'
          }
          reverse={false}
        >
          <div className={styles.imagesX2}>
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
        </ContentComponent>
      </section>
    </>
  );
}
