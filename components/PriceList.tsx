"use client";
import React from "react";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import WechatButton from "./WechatButton";
import Eyebrow from "./Eyebrow";

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

const CheckIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="mt-0.5 shrink-0 text-primary-300"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const PriceBlock = ({ data }: { data: Price }) => {
  const t = useTranslations("home.priceList");
  const { title, desc, price, pay_link, feats, highlight } = data;
  const blockClass = clsx(
    "relative flex flex-col items-start text-white p-7 rounded-3xl w-[326px] max-w-[92vw] transition-all duration-300 hover:-translate-y-1",
    highlight
      ? "border-[3px] gradient-border bg-[#161616] shadow-[0_0_80px_-12px_rgba(60,140,231,0.35)]"
      : "border border-white/10 bg-white/[0.04] backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-white/20"
  );
  return (
    <div className={blockClass}>
      <h3 className="text-4xl font-bold min-h-[56px]">{title}</h3>
      <p className="text-lg min-h-[60px] text-white/80">{desc}</p>
      <div className="text-5xl font-semibold my-4">
        {price ? (
          <>
            {`$${price.value}`}
            <span className="text-2xl font-normal text-white/70">
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
            "my-6 rounded-full px-5 py-2.5 text-sm font-semibold text-gray-900 transition-colors",
            highlight ? "bg-primary-300 hover:bg-primary-200" : "bg-white hover:bg-gray-100"
          )}
        >
          {t("getStarted")}
        </a>
      ) : (
        <ul className="my-6 flex items-center gap-2 text-sm text-gray-900 md:gap-3">
          <li>
            <a
              className="rounded-full border border-white/30 bg-transparent px-4 py-2 text-white transition-colors hover:bg-white/10"
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
              className="rounded-full bg-white px-4 py-2 font-semibold text-gray-900 transition-colors hover:bg-gray-100"
            >
              {t("zoom")}
            </a>
          </li>
        </ul>
      )}
      <h4 className="text-xl font-semibold my-3">{t("keyFeatures")}</h4>
      <ul className="text-md flex flex-col gap-3 text-white/80">
        {feats.map((f) => {
          return (
            <li key={f} className="flex items-start gap-2.5">
              <CheckIcon />
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
    <section
      id="pricing"
      className="relative scroll-mt-20 overflow-hidden bg-gray-900 py-[96px] [background-image:radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(34,204,238,0.1),transparent),radial-gradient(ellipse_40%_40%_at_80%_100%,rgba(60,140,231,0.08),transparent)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      <div className="mb-14 flex flex-col items-center px-4 text-center">
        <Eyebrow tone="dark" className="mb-5">
          {t("eyebrow")}
        </Eyebrow>
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-4xl">
          {t("heading")}
        </h2>
        <p className="mt-4 text-lg text-gray-400">{t("subtitle")}</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:items-stretch">
        {prices.map((p) => {
          return <PriceBlock data={p} key={p.title} />;
        })}
      </div>
    </section>
  );
};

export default PriceList;
