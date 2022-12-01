import type { NextPage } from "next";

import FirstView from "../components/FirstView";
import Features from "../components/Features";
import Deploy from "../components/Deploy";
import Compare from "../components/Compare";
import Head from "../components/Head";
import Footer from "../components/Footer";
import Booking from "../components/Booking";
import Script from "next/script";

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <main>
        <FirstView />
        <Features />
        <Deploy />
        <Compare />
        <Booking />
      </main>
      <Footer />
      {/* voco chatbot */}
      <Script
        strategy="afterInteractive"
        src={`https://static.voco.community/sdk/v0.0.4/widget.js`}
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
    </>
  );
};

export default Home;
