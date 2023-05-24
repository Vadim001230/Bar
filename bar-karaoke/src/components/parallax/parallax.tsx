import { opacityScroll } from '@/helpers/opacityScroll';
import { useEffect, useRef } from 'react';
import styles from './parallax.module.scss';

type Props = {
  title: string;
  subtitle: string;
  imageSrc: string;
};

export default function ParralaxComponent({ title, subtitle, imageSrc }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const opacityRef = useRef<HTMLDivElement>(null);
  const scrollHandler = opacityScroll(opacityRef);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const handleScroll = () => {
        if (containerRef.current) {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const containerTop = containerRef.current.getBoundingClientRect().top + scrollTop;
          const speed = 0.4;
          const offsetY = (scrollTop - containerTop - scrollTop / 6) * speed;
          containerRef.current.style.backgroundPositionY = `${offsetY}px`;
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section
      className={styles.parallax}
      style={{ backgroundImage: `url(${imageSrc})` }}
      ref={containerRef}
    >
      <div className={styles.parallax__text} ref={opacityRef}>
        <h3 className={styles.parallax__title}>{title}</h3>
        <h4 className={styles.parallax__subtitle}>{subtitle}</h4>
      </div>
    </section>
  );
}
