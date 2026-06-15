import { Link } from "../i18n/navigation";
import { getSourceTypeLabel, type SourceType } from "../lib/blog/posts";
import PostPreview from "./PostPreview";

type BlogPostCardProps = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  sourceName: string;
  sourceType: SourceType;
  sourceUrl: string;
  locale: string;
  readMoreLabel: string;
  sourceLabel: string;
  featured?: boolean;
  featuredLabel?: string;
  previewImage?: string;
  youtubeId?: string;
  linkedinShareId?: string;
  tags: string[];
};

function formatDate(date: string, locale: string) {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(date));
}

function SourceBadge({ type, locale }: { type: SourceType; locale: string }) {
  const colors: Record<SourceType, string> = {
    article: "bg-blue-50 text-blue-700",
    video: "bg-red-50 text-red-700",
    docs: "bg-gray-100 text-gray-700"
  };
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-medium ${colors[type]}`}
    >
      {getSourceTypeLabel(type, locale as "en" | "zh-CN")}
    </span>
  );
}

export default function BlogPostCard({
  slug,
  title,
  excerpt,
  date,
  sourceName,
  sourceType,
  sourceUrl,
  locale,
  readMoreLabel,
  sourceLabel,
  featured = false,
  featuredLabel = "Featured",
  previewImage,
  youtubeId,
  linkedinShareId,
  tags
}: BlogPostCardProps) {
  const hasPreview = Boolean(previewImage || youtubeId || linkedinShareId);

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-200 hover:shadow-[0_8px_30px_rgba(16,24,40,0.08)] ${
        featured
          ? "border-primary-300 ring-1 ring-primary-100 hover:border-primary-400"
          : "border-gray-200 hover:border-primary-200"
      }`}
    >
      {hasPreview && (
        <PostPreview
          title={title}
          sourceType={sourceType}
          previewImage={previewImage}
          youtubeId={youtubeId}
          linkedinShareId={linkedinShareId}
          href={`/blog/${slug}`}
        />
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {featured && (
            <span className="rounded-full bg-primary-500 px-2.5 py-1 text-xs font-semibold text-white">
              {featuredLabel}
            </span>
          )}
          <SourceBadge type={sourceType} locale={locale} />
          <time dateTime={date} className="text-sm text-gray-500">
            {formatDate(date, locale)}
          </time>
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-primary-700">
          <Link href={`/blog/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-md leading-relaxed text-gray-600">{excerpt}</p>
        <p className="mt-4 text-sm text-gray-500">
          {sourceLabel}:{" "}
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary-600 hover:underline"
          >
            {sourceName}
          </a>
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/blog/${slug}`}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700"
        >
          {readMoreLabel}
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
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
