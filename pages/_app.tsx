// import { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { appWithTranslation } from 'next-i18next';
import "../styles/globals.css";
// import nextI18NextConfig from '../next-i18next.config.js';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      {/* Google tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-D6S2F7X8YR`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-D6S2F7X8YR');
          `
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);