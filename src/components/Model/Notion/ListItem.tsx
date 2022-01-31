import { NumberedListItemBlock, BulletedListItemBlock } from '../../../lib/Notion/Types';
import { NotionComponentProps } from './Utiles/NotionComponentProps';
import { RichText } from './Utiles/RichText';

export type ListItemProps = BulletedListItemBlock | NumberedListItemBlock;

export const listItemRender = (block: ListItemProps) => {
  switch (block.type) {
    case 'bulleted_list_item':
      return (
        <li className="list-disc list-inside">
          <RichText text={block.bulleted_list_item.text} />
        </li>
      );

    case 'numbered_list_item':
      return (
        <li className="list-disc list-inside">
          <RichText text={block.numbered_list_item.text} />
        </li>
      );
  }
};

export const NotionListItem = ({ block }: NotionComponentProps<ListItemProps>) => {
  return <div>{listItemRender(block)}</div>;
};
