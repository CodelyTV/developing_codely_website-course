import type { AppProps } from "next/app";

import { Layout } from "@codely/design-system/src/objects/Layout";

import { Footer } from "../sections/layout/Footer";
import { Header } from "../sections/layout/Header";

import "@codely/design-system/src/index.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
}
