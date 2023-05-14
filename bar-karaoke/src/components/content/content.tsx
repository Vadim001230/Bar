import styles from './content.module.scss';

type Props = {
  title: string;
  subTitle: string;
  content: string;
  reverse: boolean;
  children: React.ReactNode;
};

export default function Content({ title, subTitle, content, reverse, children }: Props) {
  return (
    <div
      className={`${styles.content} container`}
      style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}
    >
      <div className={styles.content__left}>
        <h2>{title}</h2>
        <h3>{subTitle}</h3>
        <div>✻</div>
        <p>{content}</p>
      </div>
      <div className={styles.content__right}>{children}</div>
    </div>
  );
}
