import { Content } from '../../../../Template/Content';
import { Grid } from '../../../../UI/Grid';
import { PostCard } from '../../Card';
import { PostListTitle } from '../../List/Title';

export type ArticleNavFooterProps = {
  postList: any;
  prevPost: any;
  nextPost: any;
};

export const PostArticleNavFooter = ({ postList, prevPost, nextPost }: ArticleNavFooterProps) => {
  return (
    <Content title="Related Content">
      <Grid gap={3} xs={1} md={3}>
        <div>
          <PostListTitle posts={postList} />
        </div>

        <PostCard
          link={`/${prevPost?.id}`}
          title={prevPost?.properties.Title.title[0].plain_text || ''}
          description={prevPost?.properties.Description?.rich_text[0].plain_text || ''}
          thumbUrl={prevPost?.cover?.external.url}
          createdAt={new Date(prevPost?.properties.Date.date.start || '')}
        />
        <PostCard
          link={`/${nextPost?.id}`}
          title={nextPost?.properties.Title.title[0].plain_text || ''}
          description={nextPost?.properties.Description?.rich_text[0].plain_text || ''}
          thumbUrl={nextPost?.cover?.external.url}
          createdAt={new Date(nextPost?.properties.Date.date.start || '')}
        />
      </Grid>
    </Content>
  );
};
