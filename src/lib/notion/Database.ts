import Client from './Client';
import { Properties } from './types/BaseObject';
import { DatabaseResponseResult } from './types/DatabaseResult';

export type QueryDatabaseParameters = {
  sorts?: (
    | {
      property: string;
      direction: 'ascending' | 'descending';
    }
    | {
      timestamp: 'created_time' | 'last_edited_time';
      direction: 'ascending' | 'descending';
    }
  )[];
  start_cursor?: string;
  page_size?: number;
};

export const getDatabase = async <T extends Properties>(databaseId: string, options?: QueryDatabaseParameters) => {


  const res = await Client.databases.query({
    database_id: databaseId,
    sorts: options?.sorts || undefined,
    start_cursor: options?.start_cursor || undefined,
    page_size: options?.page_size && options.page_size < 100 ? options.page_size : 100,
  });

  return (res.results as any) as Array<DatabaseResponseResult<T>>;
};
