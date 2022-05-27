import type { AppProps } from "next/app";

import { Footer } from "../sections/layout/Footer";
import { Header } from "../sections/layout/Header";

import "@codely/design-system/src/index.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
