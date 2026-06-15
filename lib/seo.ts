import type { Metadata } from "next";
import { routing } from "../i18n/routing";

export const SITE_URL = "https://voce.chat";

/** Indexable marketing pages (utility/deep-link routes excluded). */
export const INDEXABLE_PATHS = ["", "/support", "/privacypolicy", "/blog"] as const;

export const DISALLOWED_PATHS = [
  "/login",
  "/join",
  "/url",
  "/download",
  "/payment",
  "/license"
] as const;

export const DEFAULT_OG_IMAGE = `${SITE_URL}/api/og`;

export const NOINDEX_METADATA: Metadata = {
  robots: {
    index: false,
    follow: false
  }
};

export function getCanonicalUrl(locale: string, path = ""): string {
  const suffix = path ? (path.startsWith("/") ? path : `/${path}`) : "";
  if (locale === routing.defaultLocale) {
    return suffix ? `${SITE_URL}${suffix}` : SITE_URL;
  }
  return `${SITE_URL}/${locale}${suffix}`;
}

export function getLanguageAlternates(path = ""): Record<string, string> {
  const suffix = path ? (path.startsWith("/") ? path : `/${path}`) : "";
  const enUrl = suffix ? `${SITE_URL}${suffix}` : `${SITE_URL}/`;
  return {
    en: enUrl,
    "zh-CN": `${SITE_URL}/zh-CN${suffix}`,
    "x-default": enUrl
  };
}

export function toAbsoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

type BuildPageMetadataOptions = {
  locale: string;
  path?: string;
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string | string[];
  type?: "website" | "article";
  publishedTime?: string;
};

export function buildPageMetadata({
  locale,
  path = "",
  title,
  description,
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
  type = "website",
  publishedTime
}: BuildPageMetadataOptions): Metadata {
  const canonical = getCanonicalUrl(locale, path);
  const images = (Array.isArray(ogImage) ? ogImage : [ogImage]).map(toAbsoluteUrl);

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical,
      languages: getLanguageAlternates(path)
    },
    openGraph: {
      type,
      url: canonical,
      siteName: "VoceChat",
      title,
      description,
      images,
      ...(publishedTime && type === "article" ? { publishedTime } : {})
    },
    twitter: {
      card: "summary_large_image",
      creator: "@privoce1",
      title,
      description,
      images
    }
  };
}
