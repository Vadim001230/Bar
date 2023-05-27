import { useEffect, useRef } from 'react';
import MainText from '../header/mainText';
import styles from './menu.module.scss';
import Image from 'next/image';
import ParralaxComponent from '../parallax/parallax';

export default function MenuSection() {
  const containerRef = useRef<HTMLDivElement>(null);

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
      <section className={styles.menu} ref={containerRef}>
        <MainText title={'МЕНЮ'} other={false} opacityСoeff={4} />
      </section>
      <div className={`${styles.menu__list} container`}>
        <div>
          <Image src="/menu1.jpg" alt="menu" fill={true} />
        </div>
        <div>
          <Image src="/menu2.jpg" alt="menu" fill={true} />
        </div>
      </div>
      <ParralaxComponent
        subtitle={'Коктейли'}
        imageSrc={
          'https://demos.pixelgrade.com/rosa/wp-content/uploads/sites/5/2014/06/893942_583789211632215_1377313419_o.jpg'
        }
        isWave={true}
      />
      <div className={`${styles.menu__list} container`}>
        <div>
          <Image src="/menu3.jpg" alt="menu" fill={true} />
        </div>
        <div>
          <Image src="/menu6.jpg" alt="menu" fill={true} />
        </div>
      </div>
      <ParralaxComponent
        subtitle={'Чай и Кальяны'}
        imageSrc={
          'https://demos.pixelgrade.com/rosa/wp-content/uploads/sites/5/2014/06/901051_604137032930766_812725153_o.jpg'
        }
        isWave={true}
      />

      <div className={`${styles.menu__list} container`}>
        <div>
          <Image src="/menu5.jpg" alt="menu" fill={true} />
        </div>
        <div>
          <Image src="/menu6.jpg" alt="menu" fill={true} />
        </div>
      </div>
    </>
  );
}
