import React, { ReactElement } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "../i18n/navigation";
import Eyebrow from "./Eyebrow";

type FeatureProps = { icon: string; alt: string; title: string | ReactElement; list: string[] };
const Feature = ({ icon, alt, title, list }: FeatureProps) => {
  return (
    <div className="group relative flex w-[300px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_1px_3px_rgba(16,24,40,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-[0_20px_48px_-12px_rgba(14,112,144,0.18)] sm:w-[85%] sm:items-center md:min-h-[352px] md:w-[300px] md:items-start">
      {/* top accent line, revealed on hover */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-b from-primary-50 to-primary-100/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] ring-1 ring-primary-100 transition-all duration-300 group-hover:from-primary-100 group-hover:to-primary-200/60 group-hover:ring-primary-200">
        <Image width={32} height={32} alt={alt} src={icon} className="h-8 w-8" />
      </div>
      <h3 className="mt-5 mb-2 text-xl font-semibold text-gray-900 sm:text-2xl md:text-xl">
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {list.map((l) => {
          return (
            <li
              key={l}
              className="text-md leading-relaxed text-gray-500 sm:text-center md:text-left"
            >
              {l}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

type Props = {};
const Features = (props: Props) => {
  const t = useTranslations("home.features");
  const data: FeatureProps[] = [
    {
      icon: "/img/icon.secure.png",
      alt: "VoceChat security: private self-hosted chat data",
      title: t("securityTitle"),
      list: [t("securityItem1"), t("securityItem2"), t("securityItem3")]
    },
    {
      icon: "/img/icon.lightweight.png",
      alt: "Lightweight 20 MB Rust chat server for NAS and Raspberry Pi",
      title: t("lightweightTitle"),
      list: [t("lightweightItem1")]
    },
    {
      icon: "/img/icon.open.api.png",
      alt: "VoceChat open API and SDK for chat integration",
      title: (
        <a
          href="https://doc.voce.chat/api/get-the-server-version"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          OpenAPI
        </a>
      ),
      list: [t("openapiItem1"), t("openapiItem2")]
    },
    {
      icon: "/img/icon.cross.platform.png",
      alt: "Cross-platform chat apps for iOS, Android, Windows, macOS, and web",
      title: t("crossPlatformTitle"),
      list: [t("crossPlatformItem1"), t("crossPlatformItem2")]
    }
  ];
  return (
    <section id="features" className="flex scroll-mt-20 flex-col items-center pb-24 pt-24">
      <Eyebrow className="mb-5">{t("eyebrow")}</Eyebrow>
      <h2 className="mx-4 max-w-4xl text-center text-4xl font-semibold tracking-tight text-gray-900">
        {t("heading")}
      </h2>
      <p className="mt-5 mb-10 w-[768px] text-center text-xl leading-relaxed text-gray-500 sm:w-[80%] sm:text-2xl md:text-xl">
        {t.rich("intro", {
          count: (chunks) => (
            <a
              href="https://hub.docker.com/r/privoce/vocechat-server/tags"
              className="font-semibold text-primary-600 hover:text-primary-700"
            >
              {chunks}
            </a>
          )
        })}
      </p>
      <div className="mb-20 flex flex-wrap justify-center gap-3 md:gap-4">
        <a
          href="https://doc.voce.chat/"
          target={"_blank"}
          rel="noopener noreferrer"
          className="btn-primary"
        >
          {t("viewDocs")}
        </a>
        <a
          href="https://doc.voce.chat/api/get-the-server-version"
          target={"_blank"}
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          {t("testApi")}
        </a>
        <Link href="/blog" className="btn-secondary">
          {t("viewBlog")}
        </Link>
      </div>

      <div className="flex gap-16 sm:flex-col sm:items-center md:flex-row md:gap-12 lg:gap-16">
        <div className="flex flex-col gap-8 sm:items-center sm:order-2 md:order-1 md:justify-center">
          {data.slice(0, 2).map((f) => {
            const { title, icon, alt, list } = f;
            return <Feature key={icon} title={title} icon={icon} alt={alt} list={list} />;
          })}
        </div>
        <div className="relative flex w-[480px] justify-center sm:w-full md:w-[480px] sm:order-1 md:order-2">
          <div className="absolute left-[50%] top-[50%] h-[480px] w-[532px] max-w-[92vw] translate-x-[-50%] translate-y-[-50%] rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] bg-gradient-to-br from-primary-100 via-primary-100 to-primary-200/80 animate-morph"></div>
          <Image
            width={290}
            height={600}
            className="h-auto w-[290px] translate-x-0 translate-y-0 drop-shadow-[0_32px_64px_rgba(14,112,144,0.25)]"
            src={"/img/mobile.png"}
            alt="VoceChat mobile app showing self-hosted team chat on a phone"
          />
        </div>
        <div className="flex flex-col gap-8 sm:items-center sm:order-3 md:justify-center">
          {data.slice(2).map((f) => {
            const { title, icon, alt, list } = f;
            return <Feature key={icon} title={title} icon={icon} alt={alt} list={list} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
