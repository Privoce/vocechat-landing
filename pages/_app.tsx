import { useEffect } from "react";
import type { AppProps } from "next/app";
import Script from "next/script";
import { hotjar } from "react-hotjar";
import "../styles/globals.css";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hotjar.initialize(3177531, 6);
  }, []);

  return (
    <>
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
      {/* voco chatbot */}
      <Script
        strategy="afterInteractive"
        src={`https://static.voco.community/sdk/v0.0.3/widget.js`}
      />
      <Script
        id="voco-chatbot-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.onload = function() {
            Voco.initChatbotWidget({ id: '1033949766452772915' });
          }
          `
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;