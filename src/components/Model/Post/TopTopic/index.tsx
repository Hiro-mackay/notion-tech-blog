import Link from 'next/link';
import { Card } from '../../../UI/Card';
import { CardContent } from '../../../UI/Card/Content';
import { CardMedia } from '../../../UI/Card/Media';
import { Grid } from '../../../UI/Grid';
import { Thumbnail } from '../../../UI/Thumbnail';
import { Typography } from '../../../UI/Typography';
import styles from './styles.module.scss';

export type TopTopicType = {
  title: string;
  description: string;
  thumbUrl: string | undefined;
  link: string;
};

export const TopTopic = (props: TopTopicType) => {
  return (
    <Link href={props.link}>
      <Card>
        <Grid flex gap={2} align="center">
          <div className={styles['flex-left']}>
            <CardMedia>
              <Thumbnail src={props.thumbUrl || ''} />
            </CardMedia>
          </div>

          <CardContent>
            <Typography variant="heading1" component="h1">
              {props.title}
            </Typography>
            <Typography variant="body2">{props.description}</Typography>
          </CardContent>
        </Grid>
      </Card>
    </Link>
  );
};
