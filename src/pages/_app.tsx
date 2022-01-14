import { AppProps } from "next/dist/shared/lib/router/router";

export default ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
