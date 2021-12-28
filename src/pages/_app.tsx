// import App from "next/app";
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { GlobalStyles } from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next App - Boilerplate</title>
        <meta name="description" content="Nice Next.js project template" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
