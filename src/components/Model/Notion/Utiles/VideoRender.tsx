import { VideoBlock } from '../../../../lib/notion/types';
import { Typography } from '../../../UI/Typography';
import { NotionComponentProps } from './NotionComponentProps';
import { RichText } from './RichText';

export const VideoRender = ({ block }: NotionComponentProps<VideoBlock>) => {
  const src = 'file' in block.video ? block.video.file.url : block.video.external.url;
  return (
    <div className="w-full m-auto" style={{ maxWidth: 600 }}>
      <video controls className="w-full">
        <source src={src} />
      </video>
      <Typography>
        <RichText text={block.video.caption} />
      </Typography>
    </div>
  );
};
