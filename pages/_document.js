import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props) {
  const currentLocale = props.__NEXT_DATA__.locale;
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
