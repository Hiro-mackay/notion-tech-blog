import { RichTextObject } from '.';
import { BaseObject, Properties } from './BaseObject';

export const databaseId = process.env.NOTION_DATABASE_ID || '';
export const notionToken = process.env.NOTION_TOKEN || '';

export interface DatabaseResponseResult<T extends Properties = Properties> extends BaseObject {
  object: 'page';
  title: Array<RichTextObject>;
  properties: T;
}
