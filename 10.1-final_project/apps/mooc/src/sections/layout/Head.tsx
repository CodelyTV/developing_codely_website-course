import NextHead from "next/head";
import { useRouter } from "next/router";

import { useHeadData } from "./useHeadData";

interface HeadProps {
  title?: string;
  description?: string;
  image?: string;
}
export function Head({
  title = "Codely",
  description = "Sube de nivel. Haz código más mantenible, escalable y testable",
  image = "/img/og-image.png",
}: HeadProps) {
  const { courses, categories } = useHeadData();
  const router = useRouter();
  const url = `https://codely.com${router.asPath}`;

  return (
    <NextHead>
      <title key="title">{title}</title>
      <meta name="description" content={description} key="description" />
      <meta name="robots" content="noindex" key="robots" />
      <meta property="og:title" content={title} key="og-title" />
      <meta property="og:description" content={description} key="og-description" />
      <meta property="og:type" content="product" key="og-type" />
      <meta property="og:url" content={url} key="og-url" />
      <meta property="og:site_name" content="Codely" key="og-site_name" />
      <meta property="og:image" content={image} key="og-image" />
      <meta property="og:image:width" content="1280" key="og-image-width" />
      <meta property="og:image:height" content="720" key="og-image-height" />
      <meta property="og:locale" content="es_ES" key="og-locale" />
      <meta name="twitter:card" content="summary_large_image" key="twitter-card" />
      <meta name="twitter:site" content="@CodelyTV" key="twitter-site" />
      <meta name="twitter:creator" content="@CodelyTV" key="twitter-creator" />
      <meta name="twitter:label1" content="Últimos cursos" key="twitter-label1" />
      <meta name="twitter:data1" content={courses} key="twitter-data1" />
      <meta name="twitter:label2" content="Categorías" key="twitter-label2" />
      <meta name="twitter:data2" content={categories} key="twitter-data2" />
      <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="preload" href="/fonts/Moderat-Regular-Web/Moderat-Regular.woff2" as="font" type="font/woff2"></link>
    </NextHead>
  );
}
