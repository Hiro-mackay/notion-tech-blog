import { RichTextItem } from '../../../../lib/Notion/Types';
import { NotionLink } from '../Link';
import { StylingText } from './StylingText';

export const RichText = ({ text }: { text: RichTextItem }) => {
  return (
    <>
      {text.map((richText) => {
        switch (richText.type) {
          case 'text':
            return (
              <StylingText {...richText}>
                <NotionLink url={richText.text.link?.url}>{richText.text.content}</NotionLink>
              </StylingText>
            );

          default:
            return <></>;
        }
      })}
    </>
  );
};
