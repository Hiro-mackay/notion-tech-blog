import { Client } from '@notionhq/client';
import { notionToken } from './types/DatabaseResult';

const notion = new Client({
  auth: notionToken,
});

export default notion;
