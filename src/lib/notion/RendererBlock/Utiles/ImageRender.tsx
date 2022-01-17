import { ImageBlock } from '../../types';
import NextImage from 'next/image';
import { Caption } from '../../../../components/Caption';
import { NotionComponentProps } from './NotionComponentProps';
import { richTextRender } from './richTextRender';

export const ImageRender = ({ block }: NotionComponentProps<ImageBlock>) => {
  const src = 'file' in block.image ? block.image.file.url : block.image.external.url;

  return (
    <div>
      <img className="w-full block" src={src} alt={block.image.caption[0]?.plain_text || block.image.type} />
      <p className="pt-1">
        <Caption>{richTextRender(block.image.caption)}</Caption>
      </p>
    </div>
  );
};
