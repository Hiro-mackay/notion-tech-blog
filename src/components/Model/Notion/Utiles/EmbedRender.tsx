import { EmbedBlock } from '../../../../lib/Notion/Types';
import { Typography } from '../../../UI/Typography';
import { NotionComponentProps } from './NotionComponentProps';
import { RichText } from './RichText';

export const EmbedRender = ({ block }: NotionComponentProps<EmbedBlock>) => {
  return (
    <div className="m-auto w-min " style={{ maxWidth: 600 }}>
      <iframe className="shadow-lg" src={block.embed.url} frameBorder="0" style={{ minHeight: 400 }}></iframe>
      <Typography variant="caption">
        <RichText text={block.embed.caption} />
      </Typography>
    </div>
  );
};


