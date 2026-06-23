"use client";

import { useTranslations } from "next-intl";
import LazyYouTube from "./LazyYouTube";

export default function Deploy() {
  const t = useTranslations("home.deploy");

  return (
    <section className="flex flex-col items-center bg-gray-800 py-16 text-center text-white sm:py-24">
      <h4 className="font-semibold text-4xl text-gray-25">{t("stillProblem")}</h4>
      <span className="mt-3">{t("chatHint")}</span>
      <div className="my-8 flex w-full justify-center px-4">
        <LazyYouTube videoId="RzmwpFWY-kI" title={t("bookMeeting")} />
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <a
          href="https://calendly.com/hansu/han-meeting"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          {t("bookMeeting")}
        </a>
        <a
          href="https://doc.voce.chat/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer rounded-lg border border-gray-300 bg-white px-5 py-3 text-md font-medium text-gray-700 shadow-[0_1px_2px_rgba(16,24,40,0.05)] hover:bg-gray-50 sm:text-lg"
        >
          {t("viewDoc")}
        </a>
      </div>
    </section>
  );
}
