import Link from 'next/link';
import { Card } from '../../../UI/Card';
import { CardContent } from '../../../UI/Card/Content';
import { CardMedia } from '../../../UI/Card/Media';
import { Thumbnail, ThumbnailType } from '../../../UI/Thumbnail';
import { Typography } from '../../../UI/Typography';
import styles from './style.module.scss';

export type PostCardType = {
  title: string;
  description: string;
  thumbUrl: string | undefined;
  createdAt: Date;
  mediaType?: ThumbnailType;
  link: string;
};

export const PostCard = (props: PostCardType) => {
  return (
    <Link href={props.link}>
      <Card className={styles.card}>
        <CardMedia>
          <Thumbnail type={props.mediaType} src={props.thumbUrl || ''} />
        </CardMedia>

        <CardContent>
          <Typography variant="heading3">{props.title}</Typography>
          <Typography variant="body2">{props.description}</Typography>
          <Typography variant="caption">{props.createdAt.toLocaleDateString('ja-JP')}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
