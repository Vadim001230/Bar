import { useEffect, useRef } from 'react';
import styles from '../home/home.module.scss';
import { opacityScroll } from '@/helpers/opacityScroll';
import { widthScroll } from '@/helpers/widthScroll';

type Props = {
  title: string;
  subtitle?: string;
  other: boolean;
  opacityСoeff: number;
};

export default function MainText({ title, subtitle, other, opacityСoeff }: Props) {
  const opacityRef = useRef<HTMLElement>(null);
  const separatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollHandlerWidth = widthScroll(separatorRef);
    const scrollHandler = opacityScroll(opacityRef, opacityСoeff);
    window.addEventListener('scroll', scrollHandlerWidth);
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('scroll', scrollHandlerWidth);
    };
  }, []);

  return (
    <article className={styles.article} ref={opacityRef}>
      {subtitle && <h2>{subtitle}</h2>}
      <h1>{title}</h1>
      {other && (
        <>
          <div className={styles.separator} ref={separatorRef}>
            <div className={styles.separator__left}></div>
            <div className={styles.separator__center}>✻</div>
            <div className={styles.separator__right}></div>
          </div>
          <h5>Готовы к открытию</h5>
        </>
      )}
    </article>
  );
}
