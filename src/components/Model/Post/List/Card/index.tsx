import { NotionResults } from '../../../../../lib/notion/types';
import { ThumbnailType } from '../../../../UI/Thumbnail';
import { PostCard } from '../../Card';

export type PostListCardProps = {
  posts: NotionResults;
  options?: {
    thumbnailRetio?: ThumbnailType;
  };
};

export const PostListCard = ({ posts, options }: PostListCardProps) => {
  return (
    <>
      {posts.map((post) => (
        <PostCard
          link={`/${post.id}`}
          title={post.properties.Title.title[0].plain_text}
          description={post.properties.Description?.rich_text[0].plain_text}
          thumbUrl={post?.cover?.external.url}
          createdAt={new Date(post.properties.Date.date.start)}
          mediaType={options?.thumbnailRetio || 'tint'}
        />
      ))}
    </>
  );
};
