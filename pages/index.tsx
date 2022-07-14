import type { NextPage } from "next";
import Head from "next/head";
import FirstView from "../components/FirstView";
import Features from "../components/Features";
import Deploy from "../components/Deploy";
import Compare from "../components/Compare";
import Footer from "../components/Footer";
import Booking from "../components/Booking";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>VoceChat</title>
        <meta name="description" content="Welcome to vocechat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="selection:bg-primary-300 selection:text-primary-900">
        <FirstView />
        <Features />
        <Deploy />
        <Compare />
        <Booking />
      </main>

      <Footer />
    </>
  );
};

export default Home;
