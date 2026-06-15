import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildPageMetadata } from "../../../lib/seo";
import Booking from "../../../components/Booking";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return buildPageMetadata({
    locale,
    path: "/support",
    title: t("supportTitle"),
    description: t("supportDescription")
  });
}

export default async function SupportPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-primary-50 bg-[url('/img/bg.first.view.jpg')] bg-bottom bg-no-repeat bg-contain pt-8 pb-16">
        <Booking />
        <div className="flex flex-col items-center gap-8 w-full">
          <div className="text-lg font-bold text-gray-500">OR</div>
          <div className="font-semibold text-4xl p-4 border">
            Email: <a href="mailto:han@privoce.com">han@privoce.com</a>
          </div>
        </div>
      </main>
    </>
  );
}
