"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const NAV_LINKS = [
  { key: "features", href: "#features" },
  { key: "pricing", href: "#pricing" },
  { key: "faq", href: "#faq" },
  { key: "docs", href: "https://doc.voce.chat/", external: true },
  { key: "github", href: "https://github.com/Privoce/vocechat-server", external: true }
] as const;

export default function Header() {
  const t = useTranslations("home.nav");
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:px-4">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between rounded-full border border-white/70 bg-white/75 pl-4 pr-2 shadow-[0_8px_32px_rgba(14,112,144,0.10)] ring-1 ring-gray-900/5 backdrop-blur-xl sm:pl-5">
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/android-chrome-192x192.png"
            alt="VoceChat logo"
            width={30}
            height={30}
            className="h-[30px] w-[30px] rounded-lg"
          />
          <span className="hidden text-lg font-bold tracking-tight text-gray-900 min-[400px]:inline">
            VoceChat
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              {...("external" in link && link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-900/5 hover:text-gray-900"
            >
              {t(link.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <a
            href="#deploy"
            className="inline-flex items-center whitespace-nowrap rounded-full bg-primary-400 px-4 py-2 text-sm font-semibold text-gray-900 shadow-[0_4px_14px_rgba(34,204,238,0.4)] transition-all hover:bg-primary-300 sm:px-5 sm:py-2.5"
          >
            {t("getStarted")}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t("closeMenu") : t("openMenu")}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition-colors hover:bg-gray-900/5 lg:hidden"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="mx-auto mt-2 w-full max-w-5xl rounded-2xl border border-white/70 bg-white/90 p-3 shadow-[0_16px_48px_rgba(14,112,144,0.15)] ring-1 ring-gray-900/5 backdrop-blur-xl lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  {...("external" in link && link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-2.5 text-md font-medium text-gray-700 transition-colors hover:bg-gray-900/5 hover:text-gray-900"
                >
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
