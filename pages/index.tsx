import type { NextPage } from "next";

import FirstView from "../components/FirstView";
import Features from "../components/Features";
import Deploy from "../components/Deploy";
import Compare from "../components/Compare";
import Head from "../components/Head";
import Footer from "../components/Footer";
import Booking from "../components/Booking";
import Script from "next/script";
import PriceList from "../components/PriceList";

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <main>
        <FirstView />
        <Features />
        <Deploy />
        <Compare />
        <PriceList />
        <Booking />
      </main>
      <Footer />
      {/* bridger chatbot */}
      <Script
        strategy="afterInteractive"
        src={`https://static.bridger.chat/sdk/v0.2.1/widget.js`}
      />
      <Script
        id="bridger-chatbot-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.onload = function() {
              Bridger.initWidget({ id: '130987301507686400' });
          }
          `
        }}
      />
    </>
  );
};

export default Home;