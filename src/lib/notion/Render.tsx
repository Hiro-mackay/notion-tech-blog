import { NotionBlockquote } from './RendererBlock/Blockquote';
import { NotionCallout } from './RendererBlock/Callout';
import { NotionCode } from './RendererBlock/Code';
import { NotionDivider } from './RendererBlock/Divider';
import { HeadingProps, NotionHeading } from './RendererBlock/Heading';
import { ListItemProps, NotionListItem } from './RendererBlock/ListItem';
import { NotionMedia, NotionMediaProps } from './RendererBlock/Media';
import { NotionParagraph } from './RendererBlock/Paragraph';
import { NotionTodo } from './RendererBlock/Todo';
import { NotionToggle } from './RendererBlock/Toggle';
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
