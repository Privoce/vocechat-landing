"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "../i18n/navigation";
import CopyToClipboard from "./CopyToClipboard";

const shellCode = `docker run -d --restart=always -p 3000:3000 --name vocechat-server privoce/vocechat-server:latest`;

export default function DeployQuickStart() {
  const t = useTranslations("home.deploy");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div id="deploy" className="w-full scroll-mt-24 px-4 pb-4 sm:px-6">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-gray-800/10 bg-gray-900 shadow-[0_20px_50px_rgba(15,23,42,0.18)]">
        <div className="border-b border-white/10 px-6 py-8 text-center sm:px-8">
          <span className="inline-flex items-center rounded-full border border-primary-400/30 bg-primary-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-300">
            {t("headingBadge")}
          </span>
          <h3 className="mt-4 font-semibold text-2xl tracking-tight text-white sm:text-3xl">
            {t("heading")}
          </h3>
          <p className="shimmer-text mx-auto mt-3 text-base font-medium leading-relaxed sm:whitespace-nowrap sm:text-lg">
            {t("headingDetail")}
          </p>
        </div>

        <div className="px-4 pb-4 sm:px-6 sm:pb-6">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1117]">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden="true" />
                <span className="ml-2 text-xs font-medium text-gray-500">{t("terminalLabel")}</span>
              </div>
              <CopyToClipboard text={shellCode} onCopy={handleCopy}>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {copied ? (
                    <>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {t("copied")}
                    </>
                  ) : (
                    <>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                      </svg>
                      {t("copyCode")}
                    </>
                  )}
                </button>
              </CopyToClipboard>
            </div>
            <pre className="overflow-x-auto px-4 py-5 font-mono text-sm leading-relaxed text-[#e6edf3] sm:text-[15px]">
              <code>{shellCode}</code>
            </pre>
          </div>

          <p className="mt-4 text-center text-sm text-gray-400">
            {t("afterStart")}{" "}
            <a
              href="http://localhost:3000/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary-400 underline-offset-2 hover:text-primary-300 hover:underline"
            >
              {t("afterStartUrl")}
            </a>{" "}
            {t("afterStartTail")}
          </p>
        </div>

        <div className="border-t border-white/10 bg-gray-900/80 px-6 py-4 text-center text-sm text-gray-500">
          {t.rich("docHint", {
            link: (chunks) => (
              <a
                className="font-medium text-primary-400 hover:text-primary-300"
                href="https://doc.voce.chat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {chunks}
              </a>
            ),
            blog: (chunks) => (
              <Link href="/blog" className="font-medium text-primary-400 hover:text-primary-300">
                {chunks}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  );
}
