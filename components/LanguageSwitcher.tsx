"use client";
import { useLocale } from "next-intl";
import clsx from "clsx";
import { usePathname, useRouter } from "../i18n/navigation";
import { routing } from "../i18n/routing";

const LABELS: Record<string, string> = {
  en: "English",
  "zh-CN": "中文"
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (next: string) => {
    if (next !== locale) {
      // Preserve the current path, swap only the locale.
      router.replace(pathname, { locale: next });
    }
  };

  return (
    <div className="flex items-center gap-1 text-gray-400" aria-label="Language">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="mr-1"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center">
          {i > 0 && <span className="mx-1 text-gray-600">/</span>}
          <button
            type="button"
            onClick={() => switchTo(loc)}
            aria-current={loc === locale ? "true" : undefined}
            className={clsx(
              "text-sm transition-colors",
              loc === locale ? "text-white font-semibold" : "text-gray-400 hover:text-gray-200"
            )}
          >
            {LABELS[loc] ?? loc}
          </button>
        </span>
      ))}
    </div>
  );
}
