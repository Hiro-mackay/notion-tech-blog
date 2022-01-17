import { richTextRender } from './richTextRender';
import { HeadingOneBlock, HeadingThreeBlock, HeadingTwoBlock, RichTextItem } from '../../types';

export type HeadingProps = HeadingOneBlock | HeadingTwoBlock | HeadingThreeBlock;

export const headingRender = (block: HeadingProps) => {
  switch (block.type) {
    case 'heading_1':
      return <h2 className="mt-8 text-3xl">{richTextRender(block.heading_1.text)}</h2>;

    case 'heading_2':
      return <h3 className="mt-5 text-2xl">{richTextRender(block.heading_2.text)}</h3>;

    case 'heading_3':
      return <h4 className="mt-3 text-xl">{richTextRender(block.heading_3.text)}</h4>;
  }
};
