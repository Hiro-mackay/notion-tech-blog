import { GetStaticPropsResult } from 'next';
import { PostCard } from '../components/Model/Post/Card';
import { TopTopic } from '../components/Model/Post/TopTopic';
import { Content } from '../components/Template/Content';
import { Header } from '../components/Template/Header';
import { Navbar } from '../components/Template/Navbar';
import { Grid } from '../components/UI/Grid';
import { getDatabase } from '../lib/Notion';
import { databaseId, NotionProperties, NotionResults } from '../lib/Notion/Types';
import { convertNotionDateToDate } from '../lib/Notion/Utils';
import { getPlainText } from '../lib/Notion/Utils/Converter/RichText';
import { dateFormatter } from '../lib/Utils';

type PageProps = { posts: NotionResults };

export const getStaticProps = async (): Promise<GetStaticPropsResult<PageProps>> => {
  const posts = await getDatabase<NotionProperties>({ database_id: databaseId });
  return {
    props: {
      posts
    },
    revalidate: 60 * 60
  };
};

const Page = ({ posts }: PageProps) => {
  return (
    <div>
      <Header>
        <Navbar />
      </Header>
      <Content>
        <TopTopic
          link={`/${posts[2].id}`}
          title={posts[2].properties.Title.title[0].plain_text}
          description={posts[2].properties.Description?.rich_text[0].plain_text}
          thumbUrl={posts[2]?.cover?.external.url}
        />
      </Content>

      <Content title="Articles">
        <Grid gap={2} xs={1} md={2}>
          {posts.map((post) => {
            const title = getPlainText(post.properties.Title.title);
            const desc = getPlainText(post.properties.Description.rich_text);
            const date = convertNotionDateToDate(post.properties.Date);
            return (
              <PostCard
                link={`/${post.id}`}
                title={{ text: title, variant: 'heading3' }}
                description={{ text: desc }}
                thumbnail={{
                  url: post?.cover?.external.url,
                  type: 'tint'
                }}
                createdAt={{
                  date: dateFormatter(date, 'YYYY月MM月DD日')
                }}
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
