import styles from './styles.module.scss';

export type ThumbnailProps = {
  src: string;
  type?: ThumbnailType;
  alt?: string;
};

export type ThumbnailType = 'wide' | 'tint' | 'square';

export const Thumbnail = ({ type = 'wide', src, alt = '' }: ThumbnailProps) => {
  return (
    <div className={`${styles.root} ${type ? styles[type] : styles.wide}`}>
      <img src={src} className={styles.image} alt={alt} />
    </div>
  );
};
