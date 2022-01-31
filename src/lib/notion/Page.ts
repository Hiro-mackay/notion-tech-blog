import Client from './Client';
import { NotionResult } from './Types';

export const getPage = async (pageId: string): Promise<NotionResult> => {
  const res = await Client.pages.retrieve({
    page_id: pageId
  });

  return res as NotionResult;
};
