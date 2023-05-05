import { Html, Head, Main, NextScript } from "next/document";
import i18nextConfig from "../next-i18next.config";

export default function Document(props) {
  const currentLocale = props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale;
  return (
    <Html lang={currentLocale}>
      <Head />
      <body className="selection:bg-primary-300 selection:text-primary-25 bg-white">
        <Main />
        <aside
          id="root_modal"
          className="pointer-events-none fixed top-0 left-0 w-full h-full z-[999]"
        ></aside>
        <NextScript />
      </body>
    </Html>
  );
}
