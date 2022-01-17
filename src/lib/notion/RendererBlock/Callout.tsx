import { CalloutBlock } from '../types';
import { NotionComponentProps } from './Utiles/NotionComponentProps';
import { richTextRender } from './Utiles/richTextRender';

export const NotionCallout = ({ block }: NotionComponentProps<CalloutBlock>) => {
  return (
    <div className="flex bg-blue-100 rounded-lg p-4 text-sm text-blue-700" role="alert">
      <div className="w-5 h-5 inline mr-3">
        <span>{block.callout.icon.emoji}</span>
      </div>
      <div>{richTextRender(block.callout.text)}</div>
    </div>
  );
};
