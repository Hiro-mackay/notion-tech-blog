import { PropsWithChildren } from 'react';
import { RichTextObject, TextAnnotations } from '../../../../lib/Notion/Types';
import styles from './styles.module.scss';

export const StylingText = ({ annotations, children }: PropsWithChildren<RichTextObject>) => {
  const styles = getStyles(annotations);
  return <span className={styles}>{children}</span>;
};

const getStyles = (annotations: TextAnnotations) => {
  const { color, ...ann } = annotations;

  const annStyles = Object.entries(ann)
    .filter(([, val]) => {
      return !!val;
    })
    .map(([key]) => {
      return styles[key];
    });

  return color && color !== 'default' ? annStyles.concat(color).join(' ') : annStyles.join(' ');
};
