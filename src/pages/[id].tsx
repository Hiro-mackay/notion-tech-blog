import { PostArticleNavFooter, PostArticlesContent } from '../components/Model/Post/Articles';
import { Header } from '../components/Template/Header';
import { Navbar } from '../components/Template/Navbar';
import { getBlocks, getDatabase, getPage } from '../lib/notion';
import { databaseId, NotionResult, BaseBlock } from '../lib/notion/types';
import { GetStaticPathsResult, GetStaticPropsContext } from 'next';

type PostPath = {
  id: string;
};

type PageProps = {
  page: NotionResult | undefined;
  blocks: Array<BaseBlock>;
};

const Page = ({ page, blocks }: PageProps) => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>

      {page && <PostArticlesContent page={page} blocks={blocks}></PostArticlesContent>}

      {/* <PostArticleNavFooter /> */}
    </>
  );
};

export const getStaticPaths = async (): Promise<GetStaticPathsResult<PostPath>> => {
  const database = await getDatabase(databaseId);

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
          blocks: []
        }
      };

    const page = await getPage(params.id);
    const blocks = await getBlocks(params.id);

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
        blocks
      },
      revalidate: 60 * 60
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default Page;
