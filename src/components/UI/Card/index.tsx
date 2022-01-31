import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

export const Card = ({ children, className, ...props }: PropsWithChildren<JSX.IntrinsicElements['article']>) => {
  return (
    <article className={`${styles.root} ${className}`} {...props}>
      {children}
    </article>
  );
};
