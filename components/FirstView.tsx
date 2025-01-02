/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
type Props = {};
const downloads = [
  {
    title: "download Android APP from Google Play",
    icon: `/img/icon.app.google.play.png`,
    alt: "Google Play Icon",
    link: "https://play.google.com/store/apps/details?id=com.privoce.vocechatclient"
  },
  {
    title: "download Android APP from APK file",
    icon: `/img/icon.app.apk.png`,
    alt: "APK Icon",
    link: "https://vocechat.s3.amazonaws.com/vocechat.android.apk"
  },
  {
    title: "download iOS APP from app store",
    icon: `/img/icon.app.ios.png`,
    alt: "App Store Icon",
    link: "https://apps.apple.com/app/vocechat/id1631779678"
  },
  {
    title: "download desktop version from github releases",
    icon: `/img/icon.app.desktop.png`,
    alt: "Desktop Download Icon",
    link: "https://github.com/Privoce/vocechat-desktop/releases/latest"
  }
];
function FirstView({}: Props) {
  return (
    <section className="flex min-h-screen flex-col items-center bg-primary-50 pt-24 xl:pt-16 pb-10 xl:pb-4 bg-[url('/img/bg.first.view.jpg')] bg-bottom bg-no-repeat bg-contain">
      <h2 className="font-semibold xl:text-5xl sm:text-4xl text-primary-900 tracking-tight text-center">
        Your Chat Privately Hosted!
      </h2>
      <p className="text-xl w-[768px] sm:w-[90%] text-center text-primary-700 mt-6 mb-8 mx-4">
        VoceChat is a superlight Rust powered chat app, API and SDK that prioritizes private
        hosting. Build your own in-app messaging feature with VoceChat!
      </p>

      <div className={`w-[95%] h-screen mt-4 shadow-md rounded-md overflow-hidden border bg-white`}>
        <iframe
          src="https://privoce.voce.chat/"
          className="w-full h-full"
          allow="camera;microphone"
        ></iframe>
      </div>
      <div
        id="download"
        className="pt-4 flex flex-col mobile:flex-col tablet:flex-row mobile:mt-4 tablet:mt-10 mobile:gap-4 tablet:gap-12"
      >
        {downloads.map(({ title, link, alt, icon }) => (
          <a
            key={link}
            title={title}
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
