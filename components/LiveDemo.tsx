"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function LiveDemo() {
  const t = useTranslations("home.firstView");
  const [interactive, setInteractive] = useState(false);

  return (
    <div className="relative z-10 mt-4 mb-12 w-[95%] max-w-[1440px] sm:mb-16 lg:mb-20">
      {/* ambient glow under the frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-8 -bottom-10 top-1/3 rounded-[48px] bg-[radial-gradient(closest-side,rgba(34,204,238,0.25),transparent)] blur-2xl"
      />
      <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white shadow-[0_1px_2px_rgba(16,24,40,0.06),0_32px_80px_-16px_rgba(14,112,144,0.28)] ring-1 ring-gray-900/5">
        {/* browser chrome */}
        <div className="flex items-center gap-3 border-b border-gray-200/80 bg-gradient-to-b from-gray-50 to-white px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden="true" />
          </div>
          <div className="mx-auto flex min-w-0 max-w-md flex-1 items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-500 shadow-[inset_0_1px_2px_rgba(16,24,40,0.04)]">
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="shrink-0 text-gray-400"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="truncate">privoce.voce.chat</span>
          </div>
          <span className="hidden items-center gap-1.5 rounded-full bg-success-50 px-2.5 py-0.5 text-xs font-semibold text-success-700 sm:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-success-500" aria-hidden="true" />
            {t("demoLive")}
          </span>
        </div>

        <div className="relative h-[64vh] min-h-[400px]">
          <iframe
            src="https://privoce.voce.chat/"
            className={`h-full w-full ${interactive ? "" : "pointer-events-none"}`}
            allow="camera;microphone"
            loading="lazy"
            title="VoceChat live demo"
          ></iframe>
          {!interactive && (
            <button
              type="button"
              onClick={() => setInteractive(true)}
              className="group absolute inset-0 flex cursor-pointer items-end justify-center bg-transparent pb-6"
              aria-label={t("demoInteract")}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/95 px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-[0_8px_24px_rgba(16,24,40,0.12)] backdrop-blur transition-all group-hover:-translate-y-0.5 group-hover:border-primary-300 group-hover:text-gray-900 group-hover:shadow-[0_12px_32px_rgba(14,112,144,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500"></span>
              </span>
                {t("demoInteract")}
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
