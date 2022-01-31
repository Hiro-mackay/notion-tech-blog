import Link from 'next/link';
import { NotionResults } from '../../../../../lib/Notion/Types';
import { convertNotionDateToDate } from '../../../../../lib/Notion/Utils';
import { dateFormatter } from '../../../../../lib/Utils';
import { Button } from '../../../../UI/Button';
import { Typography } from '../../../../UI/Typography';
import styles from './styles.module.scss';

export type PostListTitleProps = {
  headingText?: string;
  posts: NotionResults;
  moreSubmit?: {
    href: string;
    text: string;
  };
};

export const PostListTitle = ({ headingText, posts, moreSubmit }: PostListTitleProps) => {
  return (
    <div>
      {headingText && (
        <div className={styles.heading}>
          <Typography variant="body2" padding={false}>
            {headingText}
          </Typography>
        </div>
      )}

      <ul className={styles['post-container']}>
        {posts.map((post) => (
          <li className={styles['post-item']}>
            <Link href={`/${post.id}`}>
              <Typography className={styles['post-item-heading']} variant="body1" component="h3" padding={false}>
                {post.properties.Title.title[0].plain_text}
              </Typography>
            </Link>
            <Typography variant="caption" padding={false} style={{ color: 'grey' }}>
              {dateFormatter(convertNotionDateToDate(post.properties.Date), 'YYYY月MM月DD日')}
            </Typography>
          </li>
        ))}
      </ul>

      {moreSubmit && (
        <div>
          <Button href={moreSubmit.href}>{moreSubmit.text}</Button>
        </div>
      )}
    </div>
  );
};
