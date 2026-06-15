import { getTranslations } from "next-intl/server";
import { getAllPosts, getPostContent } from "../lib/blog/posts";
import type { Locale } from "../i18n/routing";
import { getCanonicalUrl } from "../lib/seo";

type BlogStructuredDataProps = {
  locale: Locale;
};

export default async function BlogStructuredData({ locale }: BlogStructuredDataProps) {
  const t = await getTranslations({ locale, namespace: "metadata" });
  const posts = getAllPosts().map((post) => ({
    ...post,
    ...getPostContent(post, locale)
  }));
  const blogUrl = getCanonicalUrl(locale, "/blog");

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: t("blogTitle"),
    description: t("blogDescription"),
    url: blogUrl,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: getCanonicalUrl(locale, `/blog/${post.slug}`),
        name: post.title
      }))
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "VoceChat",
        item: getCanonicalUrl(locale)
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t("blogTitle"),
        item: blogUrl
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
