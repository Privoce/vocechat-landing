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
    </>
  );
};

export default Home;
