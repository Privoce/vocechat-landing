import Image from "next/image";
import { Link } from "../i18n/navigation";
import type { SourceType } from "../lib/blog/posts";

type PostPreviewProps = {
  title: string;
  sourceType?: SourceType;
  previewImage?: string;
  youtubeId?: string;
  linkedinShareId?: string;
  href?: string;
  variant?: "thumbnail" | "embed";
};

function PlayButton() {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform group-hover:scale-105">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

function ReadButton() {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg transition-transform group-hover:scale-105">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    </span>
  );
}

function OverlayIcon({ sourceType }: { sourceType?: SourceType }) {
  if (sourceType === "video") {
    return <PlayButton />;
  }
  return <ReadButton />;
}

function ImageThumbnail({
  title,
  src,
  href,
  sourceType
}: {
  title: string;
  src: string;
  href?: string;
  sourceType?: SourceType;
}) {
  const preview = (
    <div className="group relative aspect-video overflow-hidden bg-gray-100">
      <Image
        src={src}
        alt={title}
        fill
        unoptimized
        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      />
      <div
        className={
          sourceType === "video"
            ? "absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30"
            : "absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/25 group-hover:opacity-100"
        }
      >
        <OverlayIcon sourceType={sourceType} />
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {preview}
      </Link>
    );
  }

  return preview;
}

function YouTubeEmbed({ title, youtubeId }: { title: string; youtubeId: string }) {
  return (
    <div className="aspect-video overflow-hidden rounded-xl border border-gray-200 bg-black shadow-sm">
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  );
}

function LinkedInEmbed({ title, linkedinShareId }: { title: string; linkedinShareId: string }) {
  return (
    <div className="mx-auto max-w-lg overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <iframe
        src={`https://www.linkedin.com/embed/feed/update/urn:li:share:${linkedinShareId}`}
        title={title}
        height={1381}
        width={504}
        frameBorder={0}
        allowFullScreen
        className="w-full"
      />
    </div>
  );
}

function resolveThumbnailSrc({
  previewImage,
  youtubeId
}: {
  previewImage?: string;
  youtubeId?: string;
}) {
  if (previewImage) return previewImage;
  if (youtubeId) return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
  return undefined;
}

export default function PostPreview({
  title,
  sourceType,
  previewImage,
  youtubeId,
  linkedinShareId,
  href,
  variant = "thumbnail"
}: PostPreviewProps) {
  if (variant === "embed") {
    if (youtubeId) return <YouTubeEmbed title={title} youtubeId={youtubeId} />;
    if (linkedinShareId) return <LinkedInEmbed title={title} linkedinShareId={linkedinShareId} />;
    if (previewImage) {
      return (
        <div className="relative aspect-video overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm">
          <Image src={previewImage} alt={title} fill unoptimized className="object-cover" />
        </div>
      );
    }
    return null;
  }

  const thumbnailSrc = resolveThumbnailSrc({ previewImage, youtubeId });
  if (!thumbnailSrc) return null;

  return (
    <ImageThumbnail
      title={title}
      src={thumbnailSrc}
      href={href}
      sourceType={sourceType ?? (youtubeId ? "video" : "article")}
    />
  );
}
