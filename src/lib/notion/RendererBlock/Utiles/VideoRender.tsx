import { Caption } from '../../../../components/Caption';
import { VideoBlock } from '../../types';
import { NotionComponentProps } from './NotionComponentProps';

export const VideoRender = ({ block }: NotionComponentProps<VideoBlock>) => {
  const src = 'file' in block.video ? block.video.file.url : block.video.external.url;
  return (
    <div className="w-full m-auto" style={{ maxWidth: 600 }}>
      <video controls className="w-full">
        <source src={src} />
      </video>
      <p className="pt-3">
        <Caption>{block.video.caption}</Caption>
      </p>
    </div>
  );
};
