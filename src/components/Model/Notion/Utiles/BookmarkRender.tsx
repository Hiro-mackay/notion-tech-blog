import { BookmarkBlock } from '../../../../lib/notion/types';
import { NotionComponentProps } from './NotionComponentProps';

const BookmarkRender = ({ block }: NotionComponentProps<BookmarkBlock>) => {
  // return <ReactTinyLink cardSize="small" showGraphic={true} maxLine={2} minLine={1} url={block.bookmark.url} />;
  return <></>;
};

export default BookmarkRender;
