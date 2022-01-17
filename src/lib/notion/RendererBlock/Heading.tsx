import { headingRender, HeadingProps } from './Utiles/headerRender';
import { NotionComponentProps } from './Utiles/NotionComponentProps';

export type { HeadingProps };

export const NotionHeading = ({ block }: NotionComponentProps<HeadingProps>) => {
  return headingRender(block);
};
