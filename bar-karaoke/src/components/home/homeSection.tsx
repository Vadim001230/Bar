import { useEffect, useRef } from 'react';
import styles from './home.module.scss';
import { ArrowBottom, ScrollButton } from '../../UI/icons/';
import smoothScroll from '@/helpers/smoothScroll';
import ContentComponent from '../content/content';
import ParralaxComponent from '../parallax/parallax';
import Image from 'next/image';
import { opacityScroll } from '@/helpers/opacityScroll';
import { widthScroll } from '@/helpers/widthScroll';

export default function HomeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const opacityRef = useRef<HTMLElement>(null);
  const separatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollHandlerWidth = widthScroll(separatorRef);
    const scrollHandler = opacityScroll(opacityRef);
    window.addEventListener('scroll', scrollHandlerWidth);
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('scroll', scrollHandlerWidth);
    };
  }, []);

  const scrollToBottom = () => {
    smoothScroll(window.innerHeight - window.scrollY, 300);
  };

  useEffect(() => {
    if (containerRef.current) {
      const handleScroll = () => {
        if (containerRef.current) {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const containerTop = containerRef.current.getBoundingClientRect().top + scrollTop;
          const speed = 0.3;
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
        <article className={styles.article} ref={opacityRef}>
          <h2>Welcome</h2>
          <h1>Glory hall</h1>
          <div className={styles.separator} ref={separatorRef}>
            <div className={styles.separator__left}></div>
            <div className={styles.separator__center}>✻</div>
            <div className={styles.separator__right}></div>
          </div>
          <h5>Готовы к открытию</h5>
        </article>
        <div className={styles.scrollbtn}>
          <ScrollButton />
          <button className={styles.scrollbtn__arrow} onClick={scrollToBottom}>
            <ArrowBottom />
          </button>
        </div>
      </section>

      <div className="container">
        <ContentComponent
          title={'Discover'}
          subTitle={'OUR STORY'}
          content={
            'Rosa is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection.'
          }
          reverse={false}
        >
          <div className={styles.imagesX1}>
            <div>
              <Image src="/hp_6.jpg" alt="" fill={true} />
            </div>
          </div>
        </ContentComponent>
      </div>

      <ParralaxComponent title={'Tasteful'} subtitle={'RECIPES'} imageSrc={'/hp_11.jpg'} />

      <div className="container">
        <ContentComponent
          title={'Discover'}
          subTitle={'Караоке'}
          content={
            'Добро пожаловать в зал караоке. В этом месте тяжело стесняться, ведь все сделано для того, чтобы вы чувствовали себя раскрепощенно и по-особенному.'
          }
          reverse={true}
        >
          <div className={styles.imagesX4}>
            <div>
              <Image src="/r1.jpg" alt="Karaoke" fill={true} />
            </div>
            <div>
              <Image src="/r4.jpg" alt="Karaoke" fill={true} />
            </div>
            <div>
              <Image src="/kar_1.jpg" alt="Karaoke" fill={true} />
            </div>
            <div>
              <Image src="/kar_2.jpg" alt="Karaoke" fill={true} />
            </div>
          </div>
        </ContentComponent>
      </div>

      <ParralaxComponent title={'The perfect'} subtitle={'BLEND'} imageSrc={'vip_2.jpg'} />

      <div className="container">
        <ContentComponent
          title={'Culinary'}
          subTitle={'delight'}
          content={
            'Наш слоган «Готовим весь день».  Кухня будет работать круглосуточно. При этом она будет полностью открытой – наблюдать за работой сможет любой посетитель'
          }
          reverse={false}
        >
          <div className={styles.imagesX2}>
            <div>
              <Image src="/dec_1.jpg" alt="Decor" fill={true} quality={100} />
            </div>
            <div>
              <Image src="/dec_2.jpg" alt="Decor" fill={true} quality={100} />
            </div>
          </div>
        </ContentComponent>
      </div>
    </>
  );
}
