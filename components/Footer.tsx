import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "../i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const Footer = () => {
  const t = useTranslations("home.footer");
  return (
    <footer className="bg-gray-800 px-4 py-14 sm:px-10 md:px-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex max-w-md flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <Image
                src="/android-chrome-192x192.png"
                alt="VoceChat logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg"
              />
              <span className="text-lg font-bold tracking-tight text-white">VoceChat</span>
            </div>
            <p className="text-md leading-relaxed text-gray-400">{t("tagline")}</p>
          </div>

          <ul className="flex gap-5">
            <li>
              <a
                href="https://twitter.com/Privoce1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10"
              >
                <Image
                  width={20}
                  height={20}
                  className="h-5 w-5"
                  alt="Twitter"
                  src={"/img/icon.twitter.svg"}
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Privoce"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10"
              >
                <Image
                  width={20}
                  height={20}
                  className="h-5 w-5"
                  alt="GitHub"
                  src={"/img/icon.github.svg"}
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2" aria-label="Footer">
            <Link
              href="/privacypolicy"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {t("privacy")}
            </Link>
            <Link
              href="/support"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {t("support")}
            </Link>
            <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors">
              {t("blog")}
            </Link>
            <a
              href="https://doc.voce.chat/"
              className="text-sm text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("docs")}
            </a>
            <a
              href="https://github.com/Privoce/vocechat-server"
              className="text-sm text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </nav>

          <div className="flex items-center gap-6">
            <LanguageSwitcher />
            <span className="text-sm text-gray-500">
              {t("rights", { year: String(new Date().getFullYear()) })}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
