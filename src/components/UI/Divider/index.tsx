import { Container } from '../Conatiner';
import styles from './styles.module.scss';

export type DividerProps = {
  fixed?: boolean;
};

export const Divider = ({ fixed = false }: DividerProps) => {
  if (fixed) {
    return (
      <Container>
        <hr className={styles.root} />
      </Container>
    );
  }

  return <hr className={styles.root} />;
};
