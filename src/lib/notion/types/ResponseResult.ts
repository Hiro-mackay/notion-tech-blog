import { RichTextProperties } from '.';
import { DateProperties, TitleProperties } from './BaseObject';
import { DatabaseResponseResult } from './DatabaseResult';

export type NotionProperties = Record<'Title', TitleProperties> &
  Record<'Date', DateProperties> &
  Record<'Description', RichTextProperties>;
export type NotionResult = DatabaseResponseResult<NotionProperties>;
export type NotionResults = Array<NotionResult>;


