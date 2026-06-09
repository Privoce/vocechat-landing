import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "zh-CN"],
  defaultLocale: "en",
  // Keep the existing URL structure: English is served without a prefix,
  // zh-CN is served under /zh-CN/*.
  localePrefix: "as-needed",
  // Map zh-SG / zh-HK browsers onto zh-CN (was fallbackLng in next-i18next).
  localeDetection: true
});

export type Locale = (typeof routing.locales)[number];
