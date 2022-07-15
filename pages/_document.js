import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="selection:bg-primary-300 selection:text-primary-25">
        <Main />
        <aside id="root_modal"></aside>
        <NextScript />
      </body>
    </Html>
  );
}
