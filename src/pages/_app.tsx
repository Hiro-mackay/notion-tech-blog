import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/global.scss';

export default ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
