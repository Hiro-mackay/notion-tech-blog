import { PropsWithChildren } from 'react';
import { Container } from '../../UI/Conatiner';
import styles from './styles.module.scss';

export const Header = ({ children }: PropsWithChildren<{}>) => {
  return (
    <header className={styles.header}>
      <Container>{children}</Container>
    </header>
  );
};
