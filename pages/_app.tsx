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
      <Script
        id="vocochat-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            const container = document.createElement('iframe');
            container.height = 52;
            container.width = 52;
            container.src = "https://voco.community/chatbot/1033949766452772916";
            container.style.position = "fixed";
            container.style.right = '16px';
            container.style.bottom = '16px';
            container.style.borderRadius = '8px';
            container.style.overflow = 'hidden';
            container.style.boxShadow = '0 25px 50px -12px rgb(0 0 0 / 0.25)';
            container.scrolling = 'no';
            container.frameBorder = '0';
            
            document.body.appendChild(container);
            
            window.addEventListener('message', (event) => {
              const { data } = event;
              switch (data) {
                case 'OPEN':
                  container.setAttribute('width', 380);
                  container.setAttribute('height', 668);
                  break;
                case 'CLOSE':
                  container.setAttribute('width', 52);
                  container.setAttribute('height', 52);
                  break;
                default:
                  break;
              }
            }, false);
          `
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
