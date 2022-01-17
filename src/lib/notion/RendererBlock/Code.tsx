import { CopyBlock, dracula } from 'react-code-blocks';
import { CodeBlock, RichTextItem, TextObject } from '../types';
import { NotionComponentProps } from './Utiles/NotionComponentProps';

const getRawCode = (text: RichTextItem) => {
  return (text as TextObject[]).map((t) => t.text.content).join('');
};

export const NotionCode = ({ block }: NotionComponentProps<CodeBlock>) => {
  return (
    <div className="text-sm">
      <CopyBlock language={block.code.language} text={getRawCode(block.code.text)} theme={dracula} wrapLines={true} showLineNumbers={false} codeBlock />
    </div>
  );
};
