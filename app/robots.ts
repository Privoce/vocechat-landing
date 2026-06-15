import type { MetadataRoute } from "next";
import { DISALLOWED_PATHS, SITE_URL } from "../lib/seo";
import { routing } from "../i18n/routing";

export default function robots(): MetadataRoute.Robots {
  const disallow = routing.locales.flatMap((locale) =>
    DISALLOWED_PATHS.map((path) =>
      locale === routing.defaultLocale ? path : `/${locale}${path}`
    )
  );

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow
    },
    sitemap: `${SITE_URL}/sitemap.xml`
  };
}
