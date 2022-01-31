import { GetStaticPropsResult } from 'next';
import { PostCard } from '../components/Model/Post/Card';
import { TopTopic } from '../components/Model/Post/TopTopic';
import { Content } from '../components/Template/Content';
import { Header } from '../components/Template/Header';
import { Navbar } from '../components/Template/Navbar';
import { Grid } from '../components/UI/Grid';
import { getDatabase } from '../lib/notion';
import { databaseId, NotionProperties, NotionResults } from '../lib/notion/types';

type PageProps = { posts: NotionResults };

export const getStaticProps = async (): Promise<GetStaticPropsResult<PageProps>> => {
  const posts = await getDatabase<NotionProperties>(databaseId);
  return {
    props: {
      posts
    },
    revalidate: 60 * 60
  };
};

const Page = ({ posts }: PageProps) => {
  const [topPost, ...secondaryPosts] = posts;

  return (
    <div>
      <Header>
        <Navbar />
      </Header>

      <Content style={{ paddingBottom: '1.6rem' }}>
        <Grid>
          <PostCard
            link={`/${topPost.id}`}
            title={topPost.properties.Title.title[0].plain_text}
            description={topPost.properties.Description?.rich_text[0].plain_text}
            thumbUrl={topPost?.cover?.external.url}
            createdAt={new Date(topPost.properties.Date.date.start)}
            mediaType="tint"
          />
        </Grid>

        <Grid gap={2} xs={1} md={2}>
          {secondaryPosts.map((post) => {
            return (
              <PostCard
                link={`/${post.id}`}
                title={post.properties.Title.title[0].plain_text}
                description={post.properties.Description?.rich_text[0].plain_text}
                thumbUrl={post?.cover?.external.url}
                createdAt={new Date(post.properties.Date.date.start)}
                mediaType="tint"
              />
            );
          })}
        </Grid>
      </Content>
      <div style={{ paddingBottom: 100 }}></div>
    </div>
  );
};

export default Page;
