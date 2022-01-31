import { ToDoBlock } from '../../../lib/Notion/Types';
import { NotionComponentProps } from './Utiles/NotionComponentProps';
import { RichText } from './Utiles/RichText';

export const NotionTodo = ({ block }: NotionComponentProps<ToDoBlock>) => {
  return (
    <p className="inline-flex items-center">
      <input type="checkbox" className="form-checkbox h-5 w-5 text-orange-600" disabled checked={block.to_do.checked} />
      <span className="pl-2">
        <RichText text={block.to_do.text} />
      </span>
    </p>
  );
};
