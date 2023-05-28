import { InstagramIcon } from '@/UI/icons';
import { Placemark, YMaps, Map } from '@pbe/react-yandex-maps';
import { useEffect, useRef } from 'react';
import MainText from '../header/mainText';
import styles from './contacts.module.scss';

export default function ContactsSection() {
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
      <section className={styles.contacts} ref={containerRef}>
        <MainText title={'Контакты'} subtitle={'Find us'} other={false} opacityСoeff={4} />
      </section>
      <section className={`${styles.content} container`}>
        <div className={styles.info}>
          <div className={styles.info__item}>
            <p className={styles.info__title}>Наш адрес: </p>
            <p className={styles.info__text}>г. Гродно ул. Совецкая 31</p>
          </div>
          <div className={styles.info__item}>
            <p className={styles.info__title}>Телефон: </p>
            <p className={styles.info__text}>
              <a href="tel: +3752971494563" target="blank">
                +3752971494563
              </a>
            </p>
          </div>
          <div className={styles.info__item}>
            <p className={styles.info__title}>Email: </p>
            <p className={styles.info__text}>
              <a href="mailto: smokkin.secret@gmail.com" target="blank">
                smokkin.secret@gmail.com
              </a>
            </p>
          </div>
          <div className={styles.info__item}>
            <p className={styles.info__title}>Время работы: </p>
            <p className={styles.info__text}>Вс-чт с 11:00 до 22:30</p>
            <p className={styles.info__text}>Пт-сб с 11:00 до 02:00</p>
          </div>
          <div className={styles.info__item}>
            <p className={styles.info__title}>Наши соцсети: </p>
            <p className={styles.info__text}>
              <a
                href="https://www.instagram.com/smokkin.secretproject/"
                className={styles.info__media}
                target="blank"
              >
                <InstagramIcon />
              </a>
            </p>
          </div>
          <div className={styles.info__item}>
            <p className={styles.info__title}>Открытые вакансии: </p>
            <p className={styles.info__text}>
              Заполните
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdf0pyeWN6ZQIhTYE9ltvxbzKmHYhvfJuwFFMhWrTo9Ez4bwQ/viewform"
                target="blank"
              >
                анкету
              </a>
              соискателя
            </p>
          </div>
          <div className={styles.info__item}>
            <p className={styles.info__title}>О нас:</p>
            <p className={styles.info__text}>🍝 Европейская кухня</p>
            <p className={styles.info__text}>🍹 Широкая коктейльная карта</p>
            <p className={styles.info__text}>🎙️ Караоке</p>
          </div>
        </div>
        <YMaps query={{ apikey: 'c7d863b5-24d3-4b3e-a37b-e6ca562ce1a1' }}>
          <Map defaultState={{ center: [53.68245, 23.83227], zoom: 17 }} className={styles.map}>
            <Placemark
              geometry={[53.682453, 23.832276]}
              options={{
                preset: 'islands#redCircleDotIcon',
              }}
            />
          </Map>
        </YMaps>
      </section>
    </>
  );
}
