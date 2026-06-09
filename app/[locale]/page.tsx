import { setRequestLocale } from "next-intl/server";
import FirstView from "../../components/FirstView";
import Features from "../../components/Features";
import Deploy from "../../components/Deploy";
import Compare from "../../components/Compare";
import Footer from "../../components/Footer";
import Booking from "../../components/Booking";
import PriceList from "../../components/PriceList";
import FAQ from "../../components/FAQ";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <main>
        <FirstView />
        <Features />
        <Deploy />
        <Compare />
        <FAQ />
        <PriceList />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
