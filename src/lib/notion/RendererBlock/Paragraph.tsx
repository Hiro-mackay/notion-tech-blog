import { ParagraphBlock } from '../types';
import { NotionComponentProps } from './Utiles/NotionComponentProps';
import { richTextRender } from './Utiles/richTextRender';

export const NotionParagraph = ({ block }: NotionComponentProps<ParagraphBlock>) => {
  const {
    type,
    paragraph: { text },
  } = block;

  const paragraph = richTextRender(text);

  if (!paragraph.length) {
    return <p className="pb-7"></p>
  }

  return <p>{paragraph}</p>;
};
