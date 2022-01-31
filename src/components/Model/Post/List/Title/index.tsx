import { NotionResults } from '../../../../../lib/notion/types';
import { convertNotionDateToDate } from '../../../../../lib/notion/Utils';
import { dateFormatter } from '../../../../../lib/Utils';
import { Typography } from '../../../../UI/Typography';

export type PostListTitleProps = {
  headingText?: string;
  posts: NotionResults;
  moreSubmit?: {
    link: string;
    text: string;
  };
};

export const PostListTitle = ({ headingText, posts, moreSubmit }: PostListTitleProps) => {
  return (
    <div>
      {headingText && <Typography>{headingText}</Typography>}

      <ul>
        {posts.map((post) => (
          <li>
            <Typography variant="heading3">{post.properties.Title.title[0].plain_text}</Typography>
            <Typography variant="body2">
              {dateFormatter(convertNotionDateToDate(post.properties.Date), 'YYYY月MM月DD日')}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};
