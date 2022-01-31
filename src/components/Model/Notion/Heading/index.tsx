import { HeadingOneBlock, HeadingThreeBlock, HeadingTwoBlock } from '../../../../lib/Notion/Types';
import { Typography } from '../../../UI/Typography';
import { RichText } from '../RichText';
import { NotionComponentProps } from '../Utiles/NotionComponentProps';

export type NotionHeadingProps = HeadingOneBlock | HeadingTwoBlock | HeadingThreeBlock;

export const NotionHeading = ({ block }: NotionComponentProps<NotionHeadingProps>) => {
  switch (block.type) {
    case 'heading_1':
      return (
        <Typography variant="heading2" component='h2'>
          <RichText text={block.heading_1.text} />
        </Typography>
      );

    case 'heading_2':
      return (
        <Typography variant="heading3" component='h3'>
          <RichText text={block.heading_2.text} />
        </Typography>
      );

    case 'heading_3':
      return (
        <Typography variant="heading4" component='h4'>
          <RichText text={block.heading_3.text} />
        </Typography>
      );
  }
};
