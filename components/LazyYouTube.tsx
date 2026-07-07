"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const YouTube = dynamic(() => import("react-youtube"), { ssr: false });

type LazyYouTubeProps = {
  videoId: string;
  title: string;
};

export default function LazyYouTube({ videoId, title }: LazyYouTubeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="mx-auto w-full max-w-[720px] px-4 sm:px-0">
      {isVisible ? (
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.6)] [&>div]:!h-full [&>div]:!w-full [&_iframe]:!h-full [&_iframe]:!w-full">
          <YouTube
            videoId={videoId}
            opts={{ width: 560, height: 315 }}
            className="h-full w-full"
            iframeClassName="h-full w-full"
          />
        </div>
      ) : (
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl bg-gray-900 ring-1 ring-white/15 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.6)]"
          aria-label={title}
        >
          <Image
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt=""
            fill
            unoptimized
            className="object-cover opacity-80"
          />
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform group-hover:scale-105">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </a>
      )}
    </div>
  );
}
