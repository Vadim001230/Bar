import { opacityScroll } from '@/helpers/opacityScroll';
import { WaveImg } from '@/UI/icons';
import { useEffect, useRef } from 'react';
import styles from './parallax.module.scss';

type Props = {
  title?: string;
  subtitle: string;
  imageSrc: string;
  isWave?: boolean;
};

export default function ParralaxComponent({ title, subtitle, imageSrc, isWave = false }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const opacityRef = useRef<HTMLDivElement>(null);
  const scrollHandler = opacityScroll(opacityRef, 2);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        const handleScroll = () => {
          if (containerRef.current) {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const containerTop = containerRef.current.getBoundingClientRect().top + scrollTop;
            const speed = 0.2;
            const offsetY = (scrollTop - containerTop) * speed;
            containerRef.current.style.backgroundPositionY = `${offsetY}px`;
          }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
      }
    };
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section
      className={styles.parallax}
      style={
        isWave
          ? { justifyContent: 'space-between', backgroundImage: `url(${imageSrc})` }
          : { justifyContent: 'center', backgroundImage: `url(${imageSrc})` }
      }
      ref={containerRef}
    >
      {isWave && (
        <WaveImg style={{ top: '-8px', color: 'white', width: '100vw', position: 'relative' }} />
      )}
      <div className={styles.parallax__text} ref={opacityRef}>
        {title && <h3 className={styles.parallax__title}>{title}</h3>}
        <h4 className={styles.parallax__subtitle}>{subtitle}</h4>
      </div>
      {isWave && (
        <WaveImg style={{ bottom: '-8px', color: 'white', width: '100vw', position: 'relative' }} />
      )}
    </section>
  );
}
