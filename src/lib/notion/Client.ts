import { Client } from '@notionhq/client';
import { notionToken } from './Types/DatabaseResult';

const notion = new Client({
  auth: notionToken,
});

export default notion;
