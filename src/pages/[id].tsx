import { PostArticleNavFooter, PostArticlesContent } from '../components/Model/Post/Articles';
import { Header } from '../components/Template/Header';
import { Navbar } from '../components/Template/Navbar';
import { getBlocks, getDatabase, getPage } from '../lib/Notion';
import { databaseId, NotionResult, BaseBlock, NotionResults, NotionProperties } from '../lib/Notion/Types';
import { GetStaticPathsResult, GetStaticPropsContext } from 'next';
import { title } from 'process';
import { getPlainText } from '../lib/Notion/Utils/Converter/RichText';
import { dateFormatter } from '../lib/Utils';
import { convertNotionDateToDate } from '../lib/Notion/Utils';

type PostPath = {
  id: string;
};

type PageProps = {
  page: NotionResult | undefined;
  blocks: Array<BaseBlock>;
  recentPosts: NotionResults;
};

const Page = ({ page, blocks, recentPosts }: PageProps) => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>

      {page && <PostArticlesContent page={page} blocks={blocks}></PostArticlesContent>}

      <PostArticleNavFooter
        postList={recentPosts}
        prevPost={{
          title: {
            text: getPlainText(recentPosts[0].properties.Title.title),
            variant: 'body1',
            component: 'h3'
          },
          description: {
            text: getPlainText(recentPosts[0].properties.Description.rich_text)
          },
          thumbnail: {
            url: recentPosts[0].cover?.external.url
          },
          link: `/${recentPosts[0].id}`,
          createdAt: {
            date: dateFormatter(convertNotionDateToDate(recentPosts[0].properties.Date), 'YYYY年MM月DD日')
          }
        }}
        nextPost={{
          title: {
            text: getPlainText(recentPosts[0].properties.Title.title),
            variant: 'body1',
            component: 'h3'
          },
          description: {
            text: getPlainText(recentPosts[0].properties.Description.rich_text)
          },
          thumbnail: {
            url: recentPosts[0].cover?.external.url
          },
          link: `/${recentPosts[0].id}`,
          createdAt: {
            date: dateFormatter(convertNotionDateToDate(recentPosts[0].properties.Date), 'YYYY年MM月DD日')
          }
        }}
      />
    </>
  );
};

export const getStaticPaths = async (): Promise<GetStaticPathsResult<PostPath>> => {
  const database = await getDatabase({ database_id: databaseId });

  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true
  };
};

export const getStaticProps = async (
  context: GetStaticPropsContext<PostPath>
): Promise<{ props: PageProps; [key: string]: any }> => {
  const { params } = context;

  try {
    if (!params?.id)
      return {
        props: {
          page: undefined,
          blocks: [],
          recentPosts: []
        }
      };

    const page = await getPage(params.id);
    const blocks = await getBlocks(params.id);
    const recentPosts = await getDatabase<NotionProperties>({
      database_id: databaseId,
      page_size: 3,
      filter: {
        property: 'Title',
        text: {
          does_not_equal: page.properties.Title.title[0].plain_text || ''
        }
      }
    });

    // const childBlocks = await Promise.all(
    //   blocks
    //     .filter((block) => block.has_children)
    //     .map(async (block) => {
    //       return {
    //         id: block.id,
    //         children: await getBlocks(block.id)
    //       };
    //     })
    // );

    // const blocksWithChildren = blocks.map((block) => {
    //   if (block.has_children && !block[block.type].children) {
    //     block[block.type]['children'] = childBlocks.find((x) => x.id === block.id)?.children;
    //   }
    //   return block;
    // });

    return {
      props: {
        page,
        blocks,
        recentPosts
      },
      revalidate: 60 * 60
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default Page;
