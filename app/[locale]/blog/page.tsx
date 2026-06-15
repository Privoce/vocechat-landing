import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "../../../i18n/navigation";
import BlogPostCard from "../../../components/BlogPostCard";
import BlogStructuredData from "../../../components/BlogStructuredData";
import Footer from "../../../components/Footer";
import { getAllPosts, getPostContent, getPostPreviewImage } from "../../../lib/blog/posts";
import type { Locale } from "../../../i18n/routing";
import { buildPageMetadata } from "../../../lib/seo";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return buildPageMetadata({
    locale,
    path: "/blog",
    title: t("blogTitle"),
    description: t("blogDescription")
  });
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blog");
  const posts = getAllPosts().map((post) => ({
    ...post,
    ...getPostContent(post, locale as Locale)
  }));

  return (
    <>
      <BlogStructuredData locale={locale as Locale} />
      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-800"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19 12H5" />
                <path d="m12 19-7-7 7-7" />
              </svg>
              {t("backHome")}
            </Link>
            <h1 className="font-semibold text-4xl sm:text-5xl tracking-tight text-gray-900">
              {t("heading")}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-500">{t("subtitle")}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <BlogPostCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                sourceName={post.sourceName}
                sourceType={post.sourceType}
                sourceUrl={post.sourceUrl}
                locale={locale}
                readMoreLabel={t("readMore")}
                sourceLabel={t("source")}
                featured={post.featured}
                featuredLabel={t("featured")}
                previewImage={getPostPreviewImage(post, locale as Locale)}
                youtubeId={post.youtubeId}
                linkedinShareId={post.linkedinShareId}
                tags={post.tags}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
