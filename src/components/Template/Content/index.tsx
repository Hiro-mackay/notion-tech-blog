import { PropsWithChildren } from 'react';
import { Container } from '../../UI/Conatiner';
import { Typography } from '../../UI/Typography';
import styles from './styles.module.scss';

export type ContentType = {
  title?: string;
  subTitle?: string;
  description?: string;
  className?: string;
} & JSX.IntrinsicElements['section'];

export const Content = ({
  title,
  subTitle,
  description,
  children,
  className,
  ...props
}: PropsWithChildren<ContentType>) => {
  return (
    <Container>
      <section className={`${styles.root} ${className || ''}`} {...props}>
        {subTitle && <Typography>{subTitle}</Typography>}
        {title && <Typography variant="heading2">{title}</Typography>}
        {description && <Typography variant="body2">{description}</Typography>}
        {children}
      </section>
    </Container>
  );
};
