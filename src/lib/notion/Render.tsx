import { NotionBlockquote } from '../../components/Model/Notion/Blockquote';
import { NotionCallout } from '../../components/Model/Notion/Callout';
import { NotionCode } from '../../components/Model/Notion/Code';
import { NotionDivider } from '../../components/Model/Notion/Divider';
import { HeadingProps, NotionHeading } from '../../components/Model/Notion/Heading';
import { ListItemProps, NotionListItem } from '../../components/Model/Notion/ListItem';
import { NotionMedia, NotionMediaProps } from '../../components/Model/Notion/Media';
import { NotionParagraph } from '../../components/Model/Notion/Paragraph';
import { NotionTodo } from '../../components/Model/Notion/Todo';
import { NotionToggle } from '../../components/Model/Notion/Toggle';
import { BaseBlock, CalloutBlock, CodeBlock, ParagraphBlock, QuoteBlock, ToDoBlock, ToggleBlock } from './types';

const _render = (block: BaseBlock): JSX.Element => {
  switch (block.type) {
    case 'paragraph':
      return <NotionParagraph block={block as ParagraphBlock} />;

    case 'heading_1':
    case 'heading_2':
    case 'heading_3':
      return <NotionHeading block={block as HeadingProps} />;

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
      return <NotionDivider />;

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

export const renderer = (blocks: Array<BaseBlock>): Array<JSX.Element> => {
  return blocks.map((block) => (
    <div key={block.id} className="pb-1">
      {_render(block)}
    </div>
  ));
};
