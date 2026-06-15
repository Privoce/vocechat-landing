import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "../i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const Footer = () => {
  const t = useTranslations("home.footer");
  return (
    <footer className="bg-gray-800 py-12 px-4 sm:px-10 md:px-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <span className="text-md text-gray-400">
          {t("rights", { year: String(new Date().getFullYear()) })}
        </span>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2" aria-label="Footer">
          <Link href="/privacypolicy" className="text-sm text-gray-400 hover:text-white transition-colors">
            {t("privacy")}
          </Link>
          <Link href="/support" className="text-sm text-gray-400 hover:text-white transition-colors">
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

        <div className="flex items-center gap-8">
          <LanguageSwitcher />
          <ul className="flex gap-6">
            <li>
              <a href="https://twitter.com/Privoce1" target="_blank" rel="noopener noreferrer">
                <Image
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  alt="Twitter"
                  src={"/img/icon.twitter.svg"}
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/Privoce" target="_blank" rel="noopener noreferrer">
                <Image
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  alt="GitHub"
                  src={"/img/icon.github.svg"}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
