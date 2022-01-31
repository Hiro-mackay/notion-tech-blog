import { CalloutBlock } from '../../../lib/Notion/Types';
import { NotionComponentProps } from './Utiles/NotionComponentProps';
import { RichText } from './Utiles/RichText';

export const NotionCallout = ({ block }: NotionComponentProps<CalloutBlock>) => {
  return (
    <div className="flex bg-blue-100 rounded-lg p-4 text-sm text-blue-700" role="alert">
      <div className="w-5 h-5 inline mr-3">
        <span>{block.callout.icon.emoji}</span>
      </div>
      <div>
        <RichText text={block.callout.text} />
      </div>
    </div>
  );
};
