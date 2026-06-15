import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "../../../../i18n/navigation";
import Footer from "../../../../components/Footer";
import PostPreview from "../../../../components/PostPreview";
import {
  getAllPostSlugs,
  getPostBySlug,
  getPostPreviewImage,
  getAbsolutePostPreviewImage,
  getSourceTypeLabel
} from "../../../../lib/blog/posts";
import type { Locale } from "../../../../i18n/routing";
import { buildPageMetadata, getCanonicalUrl, SITE_URL } from "../../../../lib/seo";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale as Locale);
  if (!post) return {};

  return buildPageMetadata({
    locale,
    path: `/blog/${slug}`,
    title: post.title,
    description: post.excerpt,
    ogImage: getAbsolutePostPreviewImage(post, locale as Locale),
    type: "article",
    publishedTime: post.date
  });
}

function formatDate(date: string, locale: string) {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(date));
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blog");
  const meta = await getTranslations("metadata");
  const post = getPostBySlug(slug, locale as Locale);

  if (!post) {
    notFound();
  }

  const previewImage = getPostPreviewImage(post, locale as Locale);
  const absolutePreviewImage = getAbsolutePostPreviewImage(post, locale as Locale);
  const postUrl = getCanonicalUrl(locale, `/blog/${slug}`);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: postUrl,
    image: absolutePreviewImage,
    mainEntityOfPage: postUrl,
    sameAs: post.sourceUrl,
    author: {
      "@type": "Organization",
      name: post.sourceName
    },
    publisher: {
      "@type": "Organization",
      name: "Privoce",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/android-chrome-192x192.png`
      }
    },
    citation: post.sourceUrl
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
        name: meta("blogTitle"),
        item: getCanonicalUrl(locale, "/blog")
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: postUrl
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-white">
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-800"
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
            {t("backToBlog")}
          </Link>

          <header className="mb-10 border-b border-gray-200 pb-8">
            <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">
                {getSourceTypeLabel(post.sourceType, locale as Locale)}
              </span>
              <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
              <span aria-hidden="true">·</span>
              <span>
                {t("source")}: {post.sourceName}
              </span>
            </div>
            <h1 className="font-semibold text-4xl sm:text-5xl tracking-tight text-gray-900">
              {post.title}
            </h1>
            <p className="mt-4 text-xl leading-relaxed text-gray-600">{post.excerpt}</p>
          </header>

          <blockquote className="mb-10 border-l-4 border-primary-400 bg-primary-25 px-6 py-5 rounded-r-xl">
            <p className="text-lg leading-relaxed text-gray-800 italic">&ldquo;{post.quote}&rdquo;</p>
            <footer className="mt-4 text-sm font-medium text-gray-500">
              — {post.quoteAttribution}
            </footer>
          </blockquote>

          {(post.youtubeId || post.linkedinShareId || previewImage) && (
            <div className="mb-10">
              <PostPreview
                title={post.title}
                sourceType={post.sourceType}
                previewImage={previewImage}
                youtubeId={post.youtubeId}
                linkedinShareId={post.linkedinShareId}
                variant="embed"
              />
            </div>
          )}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={post.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              {post.sourceType === "video" ? t("watchOriginal") : t("readOriginal")}
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
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
              </svg>
            </a>
            <p className="text-sm text-gray-500">
              {t("curatedNote")}
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
