import "reflect-metadata";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import { Layout } from "@codely/design-system/src/objects/Layout";

import ErrorBoundary from "../sections/layout/ErrorBoundary";
import { Footer } from "../sections/layout/Footer";
import { Head } from "../sections/layout/Head";
import { Header } from "../sections/layout/Header";

import "@codely/design-system/src/index.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname.startsWith("/invoices")) {
    return <Component {...pageProps} />;
  }

  return (
    <>
      <Head />
      <Header />
      <Layout>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </Layout>
      <Footer />
    </>
  );
}
