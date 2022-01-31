import Link from 'next/link';
import { Card } from '../../../UI/Card';
import { CardContent } from '../../../UI/Card/Content';
import { CardMedia } from '../../../UI/Card/Media';
import { Thumbnail, ThumbnailType } from '../../../UI/Thumbnail';
import { Typography, TypographyProps } from '../../../UI/Typography';
import styles from './style.module.scss';

export type PostCardType = {
  title: {
    text: string;
  } & Pick<TypographyProps, 'variant' | 'component'>;
  description: {
    text: string;
    maxsize?: number;
  };
  thumbnail: {
    url?: string;
    type?: ThumbnailType;
  };
  createdAt: {
    date: string;
    time?: string;
  };
  link: string;
};

export const PostCard = (props: PostCardType) => {
  return (
    <Link href={props.link}>
      <Card className={styles.card}>
        <CardMedia>
          <Thumbnail type={props.thumbnail.type || 'wide'} src={props.thumbnail.url || ''} />
        </CardMedia>
        <CardContent>
          <Typography variant={props.title.variant} component={props.title.component}>
            {props.title.text}
          </Typography>
          <Typography variant="body2" style={{ color: 'grey' }}>
            {props.description.text}
          </Typography>
          <Typography variant="caption">
            {props.createdAt.date} {props.createdAt.time}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
