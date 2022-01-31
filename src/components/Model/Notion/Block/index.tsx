import {
  BaseBlock,
  CalloutBlock,
  CodeBlock,
  ParagraphBlock,
  QuoteBlock,
  ToDoBlock,
  ToggleBlock
} from '../../../../lib/notion/types';
import { Divider } from '../../../UI/Divider';
import { NotionBlockquote } from '../Blockquote';
import { NotionCallout } from '../Callout';
import { NotionCode } from '../Code';
import { NotionDivider } from '../Divider';
import { NotionHeading, NotionHeadingProps } from '../Heading';
import { NotionListItem, ListItemProps } from '../ListItem';
import { NotionMedia, NotionMediaProps } from '../Media';
import { NotionParagraph } from '../Paragraph';
import { NotionTodo } from '../Todo';
import styles from './styles.module.scss';

export type BlockProps = {
  block: BaseBlock;
};

export const Block = ({ block }: BlockProps) => {
  return (
    <div className={styles.root}>
      <RendererBlock block={block} />
    </div>
  );
};

const RendererBlock = ({ block }: BlockProps) => {
  switch (block.type) {
    case 'paragraph':
      return <NotionParagraph block={block as ParagraphBlock} />;

    case 'heading_1':
    case 'heading_2':
    case 'heading_3':
      return <NotionHeading block={block as NotionHeadingProps} />;

    case 'callout':
      return <NotionCallout block={block as CalloutBlock} />;

    case 'quote':
      return <NotionBlockquote block={block as QuoteBlock} />;

    case 'bulleted_list_item':
    case 'numbered_list_item':
      return <NotionListItem block={block as ListItemProps} />;

    case 'to_do':
      return <NotionTodo block={block as ToDoBlock} />;

    case 'code':
      return <NotionCode block={block as CodeBlock} />;

    case 'embed':
    case 'image':
    case 'video':
    case 'file':
    case 'bookmark':
      return <NotionMedia block={block as NotionMediaProps} />;

    case 'divider':
      return <Divider />;

    case 'toggle':
    // return <NotionToggle block={block as ToggleBlock} />;
    case 'equation':
    case 'pdf':
    case 'table_of_contents':
    case 'child_page':
    case 'child_database':
    default:
      return <></>;
  }
};
