import Client from './Client';

export const getPage = async (pageId: string) => {
  const res = await Client.pages.retrieve({
    page_id: pageId,
  });

  return res;
};