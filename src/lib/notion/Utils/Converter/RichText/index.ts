import { RichTextItem } from '../../../Types';

export const getPlainText = (richText: RichTextItem) => {
  return richText[0].plain_text;
};
