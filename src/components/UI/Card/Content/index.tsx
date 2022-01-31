import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

export const CardContent= ({ children }: PropsWithChildren<{}>) => {
  return <div className={styles.root}>{children}</div>;
};
