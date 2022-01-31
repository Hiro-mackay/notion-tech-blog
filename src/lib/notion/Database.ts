import { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints';
import Client from './Client';
import { Properties } from './Types/BaseObject';
import { DatabaseResponseResult } from './Types/DatabaseResult';

export const getDatabase = async <T extends Properties>(query: QueryDatabaseParameters) => {
  const res = await Client.databases.query(query);

  return res.results as any as Array<DatabaseResponseResult<T>>;
};
