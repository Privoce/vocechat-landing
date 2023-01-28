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
  }
];
function FirstView({ }: Props) {
  return (
    <section className="flex min-h-screen flex-col items-center bg-primary-50 pt-24 xl:pt-16 pb-10 xl:pb-4 bg-[url('/img/bg.first.view.jpg')] bg-bottom bg-no-repeat bg-contain">
      <h2 className="font-semibold xl:text-5xl sm:text-4xl text-primary-900 tracking-tight text-center">
        Private Hosted IM and Social Channels, Easy Integration to Your Site or App
      </h2>
      <p className="text-xl w-[768px] sm:w-[90%] text-center text-primary-700 mt-6 mb-12 mx-4">
        VoceChat is a superlight Rust powered chat App, API and SDK that prioritizes private hosting. Build your own chat feature with VoceChat!
      </p>
      <div className={`w-[95%] h-screen mt-4 shadow-md rounded-md overflow-hidden border bg-white hidden tablet:block`}>
        <iframe src="https://privoce.voce.chat/" className="w-full h-full"></iframe>
      </div>
      <div id="download" className="pt-4 flex flex-col mobile:flex-col tablet:flex-row mobile:mt-4 tablet:mt-10 mobile:gap-4 tablet:gap-12">
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
      </div>
    </section>
  );
}

export default FirstView;
