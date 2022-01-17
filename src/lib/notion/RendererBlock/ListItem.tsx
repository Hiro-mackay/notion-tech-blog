import { NumberedListItemBlock, BulletedListItemBlock } from '../types';
import { NotionComponentProps } from './Utiles/NotionComponentProps';
import { richTextRender } from './Utiles/richTextRender';

export type ListItemProps = BulletedListItemBlock | NumberedListItemBlock;

export const listItemRender = (block: ListItemProps) => {
  switch (block.type) {
    case 'bulleted_list_item':
      return <li className="list-disc list-inside">{richTextRender(block.bulleted_list_item.text)}</li>;

    case 'numbered_list_item':
      return <li className="list-disc list-inside">{richTextRender(block.numbered_list_item.text)}</li>;
  }
};

export const NotionListItem = ({ block }: NotionComponentProps<ListItemProps>) => {
  return <div>{listItemRender(block)}</div>;
};
