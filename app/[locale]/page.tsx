import { setRequestLocale } from "next-intl/server";
import Header from "../../components/Header";
import FirstView from "../../components/FirstView";
import Features from "../../components/Features";
import Deploy from "../../components/Deploy";
import Compare from "../../components/Compare";
import Footer from "../../components/Footer";
import Booking from "../../components/Booking";
import PriceList from "../../components/PriceList";
import FAQ from "../../components/FAQ";
import Blog from "../../components/Blog";
import StructuredData from "../../components/StructuredData";
import ScrollToHash from "../../components/ScrollToHash";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <StructuredData />
      <ScrollToHash />
      <Header />
      <main>
        <FirstView />
        <Features />
        <Deploy />
        <Compare />
        <FAQ />
        <Blog />
        <PriceList />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
