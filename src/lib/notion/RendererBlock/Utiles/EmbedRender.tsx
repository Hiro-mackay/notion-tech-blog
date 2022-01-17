import { Caption } from '../../../../components/Caption';
import { EmbedBlock } from '../../types';
import { NotionComponentProps } from './NotionComponentProps';
import { richTextRender } from './richTextRender';

export const EmbedRender = ({ block }: NotionComponentProps<EmbedBlock>) => {
  return (
    <div className="m-auto w-min " style={{ maxWidth: 600 }}>
      <iframe className="shadow-lg" src={block.embed.url} frameBorder="0" style={{ minHeight: 400 }}></iframe>
      <p className="pt-3">
        <Caption>{richTextRender(block.embed.caption)}</Caption>
      </p>
    </div>
  );
};
