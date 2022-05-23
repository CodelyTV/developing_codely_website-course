import type { AppProps } from "next/app";

import "@codely/design-system/src/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
