/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import DeployQuickStart from "./DeployQuickStart";
import LiveDemo from "./LiveDemo";
type Props = {};
const downloads = [
  {
    titleKey: "downloadGooglePlay",
    icon: `/img/icon.app.google.play.png`,
    alt: "Google Play Icon",
    link: "https://play.google.com/store/apps/details?id=com.privoce.vocechatclient"
  },
  {
    titleKey: "downloadApk",
    icon: `/img/icon.app.apk.png`,
    alt: "APK Icon",
    link: "https://s.voce.chat/vocechat.android.apk"
  },
  {
    titleKey: "downloadIos",
    icon: `/img/icon.app.ios.png`,
    alt: "App Store Icon",
    link: "https://apps.apple.com/app/vocechat/id1631779678"
  },
  {
    titleKey: "downloadDesktop",
    icon: `/img/icon.app.desktop.png`,
    alt: "Desktop Download Icon",
    link: "https://github.com/Privoce/vocechat-desktop/releases/latest"
  }
] as const;
function FirstView({}: Props) {
  const t = useTranslations("home.firstView");
  return (
    <section className="relative flex min-h-screen flex-col items-center overflow-hidden bg-primary-50 pt-32 xl:pt-28 pb-10 xl:pb-4 bg-[url('/img/bg.first.view.jpg')] bg-bottom bg-no-repeat bg-contain">
      {/* blueprint grid, fading out radially */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[720px] bg-[linear-gradient(to_right,rgba(14,112,144,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,112,144,0.07)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]"
      />
      {/* layered radial glows behind the headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(34,204,238,0.22),transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-[15%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(closest-side,rgba(103,227,249,0.18),transparent)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 right-[12%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(closest-side,rgba(6,174,212,0.14),transparent)] blur-2xl"
      />

      <h1 className="relative z-10 mx-4 max-w-5xl bg-gradient-to-b from-primary-900 via-primary-800 to-primary-600 bg-clip-text text-center font-semibold tracking-tight text-transparent sm:text-4xl xl:text-6xl xl:leading-[1.1]">
        {t("title")}
      </h1>
      <p className="relative z-10 mx-4 mt-6 mb-8 w-[768px] text-center text-xl leading-relaxed text-primary-800/80 sm:w-[90%]">
        {t("subtitle")}
      </p>

      <LiveDemo />
      <DeployQuickStart />
      <p className="relative z-10 pt-12 pb-5 text-center text-sm font-semibold uppercase tracking-wide text-primary-800/70">
        {t("downloadLabel")}
      </p>
      <div
        id="download"
        className="relative z-10 flex w-full flex-wrap items-center justify-center gap-4 px-4 sm:gap-6 lg:gap-8"
      >
        {downloads.map(({ titleKey, link, alt, icon }) => (
          <a
            key={link}
            title={t(titleKey)}
            className="flex rounded-xl transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-[0_12px_24px_rgba(14,112,144,0.25)]"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              unoptimized={true}
              width={200}
              height={75}
              alt={alt}
              src={icon}
              className="h-[66px] w-auto"
            ></Image>
          </a>
        ))}
      </div>
    </section>
  );
}

export default FirstView;
