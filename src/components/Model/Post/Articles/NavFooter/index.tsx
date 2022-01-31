import { NotionResults } from '../../../../../lib/Notion/Types';
import { Content } from '../../../../Template/Content';
import { Grid } from '../../../../UI/Grid';
import { PostCard, PostCardType } from '../../Card';
import { PostListTitle } from '../../List/Title';
import styles from './styles.module.scss';

export type ArticleNavFooterProps = {
  postList: NotionResults;
  prevPost: PostCardType;
  nextPost: PostCardType;
};

export const PostArticleNavFooter = ({ postList, prevPost, nextPost }: ArticleNavFooterProps) => {
  return (
    <div className={styles.root}>
      <Content>
        <Grid gap={3} xs={1} md={3}>
          <div className={styles['more-post-card']}>
            <PostListTitle
              headingText="More Latest Post"
              posts={postList}
              moreSubmit={{ href: '/', text: 'more post' }}
            />
          </div>

          <PostCard {...prevPost} />
          <PostCard {...nextPost} />
        </Grid>
      </Content>
    </div>
  );
};
