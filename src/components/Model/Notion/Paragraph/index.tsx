import { ParagraphBlock } from '../../../../lib/notion/types';
import { Typography } from '../../../UI/Typography';
import { NotionComponentProps } from '../Utiles/NotionComponentProps';
import { RichText } from '../Utiles/RichText';
import styles from './styles.module.scss';

export const NotionParagraph = ({ block }: NotionComponentProps<ParagraphBlock>) => {
  const {
    paragraph: { text }
  } = block;

  return (
    <Typography className={styles.paragraph}>
      <RichText text={text} />
    </Typography>
  );
};
