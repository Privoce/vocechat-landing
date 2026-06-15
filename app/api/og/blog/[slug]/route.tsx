/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import {
  getPostBySlug,
  getSourceTypeLabel,
  type SourceType
} from "../../../../../lib/blog/posts";
import type { Locale } from "../../../../../i18n/routing";
import { SITE_URL } from "../../../../../lib/seo";

export const runtime = "edge";

const sourceTypeStyles: Record<
  SourceType,
  { background: string; color: string }
> = {
  video: { background: "#FEE2E2", color: "#B91C1C" },
  article: { background: "#DBEAFE", color: "#1D4ED8" },
  docs: { background: "#F3F4F6", color: "#374151" }
};

async function loadGoogleFont(font: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const match = css.match(/src: url\((.+)\) format\('(?:opentype|truetype)'\)/);
  if (!match) {
    throw new Error("failed to load font data");
  }
  const response = await fetch(match[1]);
  if (!response.ok) {
    throw new Error("failed to load font data");
  }
  return response.arrayBuffer();
}

function truncateTitle(title: string, maxLength: number) {
  if (title.length <= maxLength) return title;
  return `${title.slice(0, maxLength - 1)}…`;
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const { searchParams } = new URL(request.url);
  const locale = (searchParams.get("locale") ?? "en") as Locale;
  const post = getPostBySlug(slug, locale);

  if (!post) {
    return new Response("Not found", { status: 404 });
  }

  const title = truncateTitle(post.title, locale === "zh-CN" ? 42 : 72);
  const typeLabel = getSourceTypeLabel(post.sourceType, locale);
  const typeStyle = sourceTypeStyles[post.sourceType];
  const titleSize = title.length > 52 ? 44 : title.length > 36 ? 52 : 60;
  const fontText = `${title}${post.sourceName}${typeLabel}VoceChat Blog`;

  const fonts =
    locale === "zh-CN"
      ? [
          {
            name: "Noto Sans SC",
            data: await loadGoogleFont("Noto+Sans+SC", 600, fontText),
            weight: 600 as const,
            style: "normal" as const
          },
          {
            name: "Noto Sans SC",
            data: await loadGoogleFont("Noto+Sans+SC", 400, fontText),
            weight: 400 as const,
            style: "normal" as const
          }
        ]
      : undefined;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #ecfdff 0%, #f8fbff 55%, #eef2ff 100%)",
          padding: "56px 64px",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: locale === "zh-CN" ? "Noto Sans SC" : "-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <img
            alt="VoceChat"
            width={56}
            height={56}
            src={`${SITE_URL}/android-chrome-192x192.png`}
            style={{ borderRadius: "50%" }}
          />
          <span style={{ fontSize: 24, color: "#527ff1", fontWeight: 600 }}>VoceChat Blog</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24, flex: 1, justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              borderRadius: 999,
              background: typeStyle.background,
              color: typeStyle.color,
              padding: "10px 18px",
              fontSize: 22,
              fontWeight: 600
            }}
          >
            {typeLabel}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: titleSize,
              fontWeight: 700,
              color: "#111827",
              lineHeight: 1.15,
              letterSpacing: "-0.02em"
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 26, color: "#4B5563", fontWeight: 500 }}>{post.sourceName}</span>
          <span style={{ fontSize: 22, color: "#9CA3AF" }}>voce.chat/blog</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts
    }
  );
}
