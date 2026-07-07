import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "../i18n/navigation";
import type { Locale } from "../i18n/routing";
import { getRecentPosts, getPostPreviewImage } from "../lib/blog/posts";
import BlogPostCard from "./BlogPostCard";
import Eyebrow from "./Eyebrow";

export default async function Blog() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("home.blog");
  const posts = getRecentPosts(locale, 6);

  return (
    <section id="blog" className="flex flex-col items-center bg-gray-50 py-24 px-4">
      <div className="w-full max-w-6xl">
        <div className="mb-12 text-center">
          <Eyebrow className="mb-5">{t("eyebrow")}</Eyebrow>
          <h2 className="font-semibold text-4xl sm:text-5xl tracking-tight text-gray-900">
            {t("heading")}
          </h2>
          <p className="mt-4 text-lg text-gray-500">{t("subtitle")}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
              previewImage={getPostPreviewImage(post, locale)}
              youtubeId={post.youtubeId}
              linkedinShareId={post.linkedinShareId}
              tags={post.tags}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/blog" className="btn-primary">
            {t("viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
}
