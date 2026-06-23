"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "../i18n/navigation";
import CopyToClipboard from "./CopyToClipboard";
import LazyYouTube from "./LazyYouTube";

const shellCode = `docker run -d --restart=always \\
-p 3000:3000 \\
--name vocechat-server \\
privoce/vocechat-server:latest`;

const Deploy = () => {
  const t = useTranslations("home.deploy");
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <section id="deploy" className="flex flex-col items-center py-[96px] bg-gray-800 text-white text-center">
      <h3 className="font-semibold text-4xl tracking-tight text-gray-25 ">{t("heading")}</h3>
      <p className="text-gray-300 text-xl mt-5">
        {t.rich("docHint", {
          link: (chunks) => (
            <a
              className="text-primary-500"
              href="https://doc.voce.chat/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {chunks}
            </a>
          ),
          blog: (chunks) => (
            <Link href="/blog" className="text-primary-500 underline underline-offset-2">
              {chunks}
            </Link>
          )
        })}
      </p>
      <code className="flex w-fit font-mono text-md bg-gray-900 sm:px-8 md:px-10 py-5 rounded-xl whitespace-pre mt-16 mb-10 sm:w-[90%] md:w-fit overflow-x-auto overflow-y-hidden text-left">
        {shellCode}
      </code>
      <div className="flex gap-2">
        <CopyToClipboard text={shellCode} onCopy={handleCopy}>
          <button className="btn-primary-large flex gap-3 items-center">
            <Image
              width={24}
              height={24}
              className="w-6 h-6"
              src={"/img/icon.copy.svg"}
              alt="Copy Icon"
            ></Image>
            {copied ? t("copied") : t("copyCode")}
          </button>
        </CopyToClipboard>
      </div>

      <span className="my-16 text-gray-25 text-md">{t("afterStart")}</span>
      <div className="flex flex-col items-center">
        <h4 className="font-semibold text-4xl text-gray-25 ">{t("stillProblem")}</h4>
        <span className="mt-3">{t("chatHint")}</span>
        <div className="my-8 flex w-full justify-center">
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
            className="px-5 py-3 sm:text-lg md:text-md font-medium rounded-lg shadow-[0_1px_2px_rgba(16,24,40,0.05)] cursor-pointer bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
          >
            {t("viewDoc")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Deploy;
