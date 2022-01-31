import { PropsWithChildren } from 'react';
import { BaseBlock, NotionResult } from '../../../../../lib/Notion/Types';
import { CardMedia } from '../../../../UI/Card/Media';
import { Container } from '../../../../UI/Conatiner';
import { Thumbnail } from '../../../../UI/Thumbnail';
import { Typography } from '../../../../UI/Typography';
import { Renderer } from '../../../Notion/Renderer';
import styles from './styles.module.scss';

export type PostArticles = {
  page: NotionResult;
  blocks: Array<BaseBlock>;
};

export const PostArticlesContent = ({ page, blocks }: PropsWithChildren<PostArticles>) => {
  return (
    <article className={styles.root}>
      <div className={styles.content}>
        <Typography variant="heading2" component="h1" align="center" style={{ paddingBottom: 20 }}>
          {page.properties.Title.title[0].plain_text}
        </Typography>
        <Typography align="center" style={{ paddingBottom: 20, color: 'grey' }}>
          {new Date(page.properties.Date.date.start).toLocaleDateString('ja-JP')}
        </Typography>
        <Typography align="center" style={{ color: 'grey' }}>
          {page.properties.Description.rich_text[0].plain_text}
        </Typography>
      </div>

      <Container>
        <CardMedia>
          <Thumbnail src={page.cover?.external.url || ''} type="tint" />
        </CardMedia>
      </Container>

      <div className={styles.content}>
        <Renderer blocks={blocks} />
      </div>
    </article>
  );
};
