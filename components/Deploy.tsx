"use client";

import { useTranslations } from "next-intl";
import LazyYouTube from "./LazyYouTube";
import Eyebrow from "./Eyebrow";

export default function Deploy() {
  const t = useTranslations("home.deploy");

  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-gray-900 py-16 text-center text-white sm:py-24">
      {/* ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(34,204,238,0.12),transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      <Eyebrow tone="dark" className="mb-5">
        {t("helpEyebrow")}
      </Eyebrow>
      <h2 className="font-semibold text-4xl tracking-tight text-white">{t("stillProblem")}</h2>
      <span className="mt-4 text-gray-400">{t("chatHint")}</span>
      <div className="relative my-10 flex w-full justify-center px-4">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-1/4 top-1/4 bottom-0 rounded-full bg-[radial-gradient(closest-side,rgba(34,204,238,0.15),transparent)] blur-2xl"
        />
        <LazyYouTube videoId="RzmwpFWY-kI" title={t("bookMeeting")} />
      </div>
      <div className="flex flex-wrap items-stretch justify-center gap-3">
        <a
          href="https://calendly.com/hansu/han-meeting"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center justify-center"
        >
          {t("bookMeeting")}
        </a>
        <a
          href="https://doc.voce.chat/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-gray-200 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 sm:text-lg md:text-md"
        >
          {t("viewDoc")}
        </a>
      </div>
    </section>
  );
}
