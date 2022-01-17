import { GetStaticPropsResult } from 'next';
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
  return (
    <div>
      <ul>
        {posts.map((post) => {
          return <li>{post.properties.Title.title[0].plain_text}</li>;
        })}
      </ul>
    </div>
  );
};

export default Page;
