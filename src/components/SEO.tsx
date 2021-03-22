import React from "react";
import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
}

function SEO({ title, description }: SEOProps) {
  return (
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default SEO;
