import { PropsWithChildren } from 'react';
import NextLink from 'next/link';

export type LinkProps = {
  url?: string | null;
};

export const NotionLink = ({ children, url }: PropsWithChildren<LinkProps>) => {
  if (!url) {
    return <>{children}</>;
  }

  return (
    <NextLink href={url}>
      <a>{children}</a>
    </NextLink>
  );
};
