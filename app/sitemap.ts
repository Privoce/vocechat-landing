import type { MetadataRoute } from "next";
import { blogPosts, getAllPostSlugs } from "../lib/blog/posts";
import { INDEXABLE_PATHS, getCanonicalUrl, getLanguageAlternates } from "../lib/seo";
import { routing } from "../i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = INDEXABLE_PATHS.map((path) => {
    const normalizedPath = path === "" ? "" : path;
    return {
      url: getCanonicalUrl(routing.defaultLocale, normalizedPath),
      lastModified: new Date(),
      changeFrequency: path === "" || path === "/blog" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : path === "/blog" ? 0.8 : 0.5,
      alternates: {
        languages: getLanguageAlternates(normalizedPath)
      }
    };
  });

  const postEntries = getAllPostSlugs().map((slug) => {
    const post = blogPosts.find((entry) => entry.slug === slug);
    return {
      url: getCanonicalUrl(routing.defaultLocale, `/blog/${slug}`),
      lastModified: post ? new Date(post.date) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: getLanguageAlternates(`/blog/${slug}`)
      }
    };
  });

  return [...staticEntries, ...postEntries];
}
