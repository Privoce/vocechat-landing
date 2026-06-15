"use client";
import { useLocale } from "next-intl";
import clsx from "clsx";
import { usePathname, useRouter } from "../i18n/navigation";
import { routing } from "../i18n/routing";

const LABELS: Record<string, string> = {
  en: "English",
  "zh-CN": "中文"
};

const SHORT_LABELS: Record<string, string> = {
  en: "EN",
  "zh-CN": "中文"
};

export default function LanguageSwitcher({
  variant = "dark"
}: {
  variant?: "light" | "dark" | "pill";
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (next: string) => {
    if (next !== locale) {
      router.replace(pathname, { locale: next });
    }
  };

  if (variant === "pill") {
    return (
      <div
        className="flex rounded-lg border border-gray-200 bg-gray-50/80 p-0.5"
        aria-label="Language"
      >
        {routing.locales.map((loc) => (
          <button
            key={loc}
            type="button"
            onClick={() => switchTo(loc)}
            aria-current={loc === locale ? "true" : undefined}
            className={clsx(
              "min-w-[2.5rem] rounded-md px-2.5 py-1 text-xs font-medium transition-all",
              loc === locale
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            )}
          >
            {SHORT_LABELS[loc] ?? loc}
          </button>
        ))}
      </div>
    );
  }

  const isLight = variant === "light";
  const activeClass = isLight ? "text-primary-600 font-semibold" : "text-white font-semibold";
  const inactiveClass = isLight
    ? "text-gray-500 hover:text-gray-800"
    : "text-gray-400 hover:text-gray-200";
  const dividerClass = isLight ? "text-gray-300" : "text-gray-600";
  const iconClass = isLight ? "text-gray-500" : "text-gray-400";

  return (
    <div className="flex items-center gap-1" aria-label="Language">
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
        className={`mr-1 ${iconClass}`}
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center">
          {i > 0 && <span className={`mx-1 ${dividerClass}`}>/</span>}
          <button
            type="button"
            onClick={() => switchTo(loc)}
            aria-current={loc === locale ? "true" : undefined}
            className={clsx(
              "text-sm transition-colors",
              loc === locale ? activeClass : inactiveClass
            )}
          >
            {LABELS[loc] ?? loc}
          </button>
        </span>
      ))}
    </div>
  );
}
