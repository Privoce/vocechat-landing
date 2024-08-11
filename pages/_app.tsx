// import { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { appWithTranslation } from "next-i18next";
import "../styles/globals.css";
// import nextI18NextConfig from '../next-i18next.config.js';

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
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
      {/* vc widget */}
      <Script
        data-id="1253335829586116630"
        data-host-id="2"
        data-auto-reg="false"
        data-login-token=""
        data-theme-color="#1fe1f9"
        data-close-width="48"
        data-close-height="48"
        data-open-width="380"
        data-open-height="680"
        data-title="Live Chat"
        data-logo="https://voce.chat/favicon.ico"
        src="https://bridge.ipter.org/widget.js"
        data-welcome="Hello!"
        async
      />
      <AnyComponent {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
