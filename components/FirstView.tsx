/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import DeployQuickStart from "./DeployQuickStart";
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
    <section className="flex min-h-screen flex-col items-center bg-primary-50 pt-24 xl:pt-16 pb-10 xl:pb-4 bg-[url('/img/bg.first.view.jpg')] bg-bottom bg-no-repeat bg-contain">
      <h1 className="font-semibold xl:text-5xl sm:text-4xl text-primary-900 tracking-tight text-center">
        {t("title")}
      </h1>
      <p className="text-xl w-[768px] sm:w-[90%] text-center text-primary-700 mt-6 mb-8 mx-4">
        {t("subtitle")}
      </p>

      <div className="mt-4 mb-12 w-[95%] h-screen overflow-hidden rounded-md border bg-white shadow-md sm:mb-16 lg:mb-20">
        <iframe
          src="https://privoce.voce.chat/"
          className="w-full h-full"
          allow="camera;microphone"
          loading="lazy"
          title="VoceChat live demo"
        ></iframe>
      </div>
      <DeployQuickStart />
      <div
        id="download"
        className="flex w-full flex-col items-center px-4 pt-10 mobile:flex-col tablet:flex-row mobile:mt-4 tablet:mt-10 mobile:gap-4 tablet:gap-12"
      >
        {downloads.map(({ titleKey, link, alt, icon }) => (
          <a
            key={link}
            title={t(titleKey)}
            className="flex"
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
              className="hover:scale-110 transition-transform h-[66px]"
            ></Image>
          </a>
        ))}
        {/* <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[200px] text-white flex items-center gap-2 p-2 h-[66px] rounded-xl border-2 border-gray-300/50 bg-black"
        >
          <img
            className="w-10"
            src="https://icons.iconarchive.com/icons/vexels/office/256/desktop-icon.png"
            alt="icon"
          />
          <div className="flex flex-col whitespace-nowrap">
            <p className="text-xs">Download desktop</p>
            <p className="text-lg font-bold">Windows/Mac</p>
          </div>
        </a> */}
      </div>
    </section>
  );
}

export default FirstView;
