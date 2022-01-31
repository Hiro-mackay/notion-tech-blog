import { BookmarkBlock, EmbedBlock, FileBlock, ImageBlock, PDFBlock, VideoBlock } from '../../../lib/notion/types';
import { EmbedRender } from './Utiles/EmbedRender';
import { FileRender } from './Utiles/FileRender';
import { ImageRender } from './Utiles/ImageRender';
import { NotionComponentProps } from './Utiles/NotionComponentProps';
import { VideoRender } from './Utiles/VideoRender';
import dynamic from 'next/dynamic';

const BookmarkRender = dynamic(() => import('./Utiles/BookmarkRender'), { ssr: false });

export type NotionMediaProps = EmbedBlock | ImageBlock | VideoBlock | FileBlock | PDFBlock | BookmarkBlock;

const renderer = (block: NotionMediaProps) => {
  switch (block.type) {
    case 'embed':
      return <EmbedRender block={block} />;

    case 'image':
      return <ImageRender block={block} />;

    case 'video':
      return <VideoRender block={block} />;

    case 'file':
      return <FileRender block={block} />;

    case 'bookmark':
      return <BookmarkRender block={block} />;
  }
};

export const NotionMedia = ({ block }: NotionComponentProps<NotionMediaProps>) => {
  return <div className="w-full">{renderer(block)}</div>;
};
