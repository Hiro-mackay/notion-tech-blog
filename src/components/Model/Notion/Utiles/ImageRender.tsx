import { ImageBlock } from '../../../../lib/Notion/Types';
import { NotionComponentProps } from './NotionComponentProps';
import { RichText } from './RichText';
import { Typography } from '../../../UI/Typography';

export const ImageRender = ({ block }: NotionComponentProps<ImageBlock>) => {
  const src = 'file' in block.image ? block.image.file.url : block.image.external.url;

  return (
    <div>
      <img className="w-full block" src={src} alt={block.image.caption[0]?.plain_text || block.image.type} />
      <Typography>
        <RichText text={block.image.caption} />
      </Typography>
    </div>
  );
};
