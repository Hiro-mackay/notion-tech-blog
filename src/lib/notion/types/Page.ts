import { PageParent } from '.';
import { BaseObject, TitleProperties, RichTextProperties } from './BaseObject';

export interface Page extends BaseObject {
  object: 'page';
  parent: PageParent;
}
