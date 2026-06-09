"use client";
import React from "react";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import WechatButton from "./WechatButton";

type Price = {
  title: string;
  desc: string;
  price?: {
    value: number;
    unit: "forever" | "server";
  };
  pay_link: string;
  feats: string[];
  highlight?: boolean;
};

const PriceBlock = ({ data }: { data: Price }) => {
  const t = useTranslations("home.priceList");
  const { title, desc, price, pay_link, feats, highlight } = data;
  const blockClass = clsx(
    "flex flex-col items-start text-white p-5 border-solid border border-white rounded-3xl bg-black w-[326px] transition-all",
    highlight && "border-[6px] gradient-border"
  );
  return (
    <div className={blockClass}>
      <h2 className="text-5xl font-bold min-h-[68px] ">{title}</h2>
      <p className="text-lg min-h-[60px]">{desc}</p>
      <div className="text-5xl font-semibold my-4">
        {price ? (
          <>
            {`$${price.value}`}
            <span className="text-2xl font-normal">
              /{price.unit === "forever" ? t("unitForever") : t("unitServer")}
            </span>
          </>
        ) : (
          t("toStart")
        )}
      </div>
      {price ? (
        <a
          href={pay_link}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(
            "py-2 px-4 rounded-full bg-white text-black text-sm my-6 hover:opacity-80",
            highlight && "bg-[#52EDFF]"
          )}
        >
          {t("getStarted")}
        </a>
      ) : (
        <ul className="flex items-center gap-2 md:gap-3 text-black text-sm my-6">
          <li>
            <a
              className="py-2 px-4 rounded-full bg-white  hover:opacity-80"
              href="mailto:han@privoce.com"
            >
              {t("email")}
            </a>
          </li>
          <li className="relative">
            <WechatButton />
          </li>
          <li>
            <a
              href={pay_link}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "py-2 px-4 rounded-full bg-white text-black text-sm my-6 hover:opacity-80",
                highlight && "bg-[#52EDFF]"
              )}
            >
              {t("zoom")}
            </a>
          </li>
        </ul>
      )}
      <h3 className="text-2xl font-semibold my-3">{t("keyFeatures")}</h3>
      <ul className="text-lg flex flex-col gap-3 opacity-80">
        {feats.map((f) => {
          return (
            <li key={f} className="flex items-start gap-2">
              <i className="inline-block check-flip-x font-light font-mono">ヘ</i>
              <span>{f}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const PriceList = () => {
  const t = useTranslations("home.priceList");
  const prices: Price[] = [
    {
      title: t("freeTitle"),
      desc: t("freeDesc"),
      price: {
        value: 0,
        unit: "forever"
      },
      pay_link: "https://doc.voce.chat/install/",
      feats: [t("freeFeat1"), t("freeFeat2"), t("freeFeat3")]
    },
    {
      title: t("proTitle"),
      desc: t("proDesc"),
      price: {
        value: 49,
        unit: "server"
      },
      pay_link: "https://buy.stripe.com/00gcPOgyTfj00gM5kL",
      feats: [t("proFeat1"), t("proFeat2"), t("proFeat3"), t("proFeat4")],
      highlight: true
    },
    {
      title: t("helpTitle"),
      desc: t("helpDesc"),
      pay_link: "https://calendly.com/hansu",
      feats: [t("helpFeat1"), t("helpFeat2"), t("helpFeat3"), t("helpFeat4")]
    }
  ];
  return (
    <section className="flex flex-col gap-12 items-center justify-center py-[96px] bg-gray-800 md:flex-row md:items-stretch">
      {prices.map((p) => {
        return <PriceBlock data={p} key={p.title} />;
      })}
    </section>
  );
};

export default PriceList;
