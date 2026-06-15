import type { Locale } from "../../i18n/routing";
import { SITE_URL } from "../seo";

export type SourceType = "article" | "video" | "docs";

export type BlogPostContent = {
  title: string;
  excerpt: string;
  quote: string;
  quoteAttribution: string;
};

export type BlogPost = {
  slug: string;
  date: string;
  sourceUrl: string;
  sourceName: string;
  sourceType: SourceType;
  youtubeId?: string;
  linkedinShareId?: string;
  previewImage?: string;
  featured?: boolean;
  tags: string[];
  en: BlogPostContent;
  "zh-CN": BlogPostContent;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "mariushosting-synology-nas",
    date: "2025-08-27",
    sourceUrl: "https://mariushosting.com/how-to-install-vocechat-on-your-synology-nas/",
    sourceName: "Marius Hosting",
    sourceType: "article",
    previewImage:
      "https://mariushosting.com/wp-content/uploads/2023/09/How-to-Install-VoceChat-on-Your-Synology-NAS.png",
    tags: ["synology", "nas", "docker", "portainer"],
    en: {
      title: "How to Install VoceChat on Your Synology NAS",
      excerpt:
        "Marius Hosting's step-by-step Synology guide using Docker, Portainer, reverse proxy, and WebSocket headers — updated for VoceChat v0.3.0.",
      quote:
        "VoceChat server is the smallest, stablest and most efficient independent chat server on today's market. In this step by step guide I will show you how to install VoceChat on your Synology NAS using Docker & Portainer.",
      quoteAttribution: "Marius Hosting"
    },
    "zh-CN": {
      title: "在群晖 NAS 上安装 VoceChat",
      excerpt:
        "Marius Hosting 的群晖分步教程，使用 Docker、Portainer、反向代理和 WebSocket 配置，已更新至 VoceChat v0.3.0。",
      quote:
        "VoceChat 服务端是当今市场上最小、最稳定、最高效的独立聊天服务器。本指南将逐步演示如何使用 Docker 和 Portainer 在群晖 NAS 上安装 VoceChat。",
      quoteAttribution: "Marius Hosting"
    }
  },
  {
    slug: "ugreen-nas-deploy-vocechat",
    date: "2025-11-07",
    sourceUrl: "https://www.youtube.com/watch?v=e3Tz4DOut0A",
    sourceName: "UGREEN NASync Official",
    sourceType: "video",
    youtubeId: "e3Tz4DOut0A",
    previewImage: "https://i.ytimg.com/vi/e3Tz4DOut0A/hqdefault.jpg",
    tags: ["ugreen", "nas", "docker", "video", "tutorial"],
    en: {
      title: "How to Deploy VoceChat on UGREEN NAS (Official Tutorial)",
      excerpt:
        "UGREEN's official NASync tutorial series — step-by-step VoceChat deployment on UGREEN NAS via Docker.",
      quote:
        "UGREEN NASync Tutorial Series — How to Deploy VoceChat on UGREEN NAS: run the lightweight private chat server on your UGREEN NAS with Docker.",
      quoteAttribution: "UGREEN NASync Official, YouTube"
    },
    "zh-CN": {
      title: "在绿联 UGREEN NAS 上部署 VoceChat（官方教程）",
      excerpt:
        "绿联 UGREEN NASync 官方教程系列，演示如何通过 Docker 在绿联 NAS 上部署 VoceChat。",
      quote:
        "UGREEN NASync 教程系列——如何在绿联 NAS 上部署 VoceChat：用 Docker 在你的绿联 NAS 上运行这款轻量级私有聊天服务器。",
      quoteAttribution: "UGREEN NASync Official，YouTube"
    }
  },
  {
    slug: "dbtech-host-chat-server-docker",
    date: "2023-09-21",
    sourceUrl: "https://www.youtube.com/watch?v=fao6hTldEHI",
    sourceName: "DB Tech",
    sourceType: "video",
    youtubeId: "fao6hTldEHI",
    previewImage: "https://i.ytimg.com/vi/fao6hTldEHI/hqdefault.jpg",
    featured: true,
    tags: ["featured", "docker", "tutorial", "video"],
    en: {
      title: "Host Your Own Chat Server with VoceChat and Docker",
      excerpt:
        "DB Tech's 17-minute tutorial on self-hosting VoceChat with Docker — deploy, configure, and run a chat server under 20 MB.",
      quote:
        "VoceChat is a superlight Rust powered chat App, API and SDK that prioritizes private hosting. While it isn't quite as full-featured as some other chat servers, it's simple to deploy, configure, and administer — and the whole thing is less than 20 MB.",
      quoteAttribution: "DB Tech, YouTube"
    },
    "zh-CN": {
      title: "使用 VoceChat 和 Docker 自建聊天服务器",
      excerpt:
        "DB Tech 的 17 分钟教程，演示如何用 Docker 自托管 VoceChat——部署、配置并运行一个不到 20 MB 的聊天服务器。",
      quote:
        "VoceChat 是一款由 Rust 驱动的超轻量聊天应用、API 与 SDK，专为私有部署而生。虽然功能不如某些聊天服务器全面，但部署、配置和管理都非常简单——而且整个服务不到 20 MB。",
      quoteAttribution: "DB Tech，YouTube"
    }
  },
  {
    slug: "noted-lol-self-hosted-rust-chat",
    date: "2024-06-10",
    sourceUrl: "https://noted.lol/vocechat/",
    sourceName: "Noted.lol",
    sourceType: "article",
    previewImage: "https://noted.lol/content/images/size/w1200/2025/03/vocechat-self-hosted.jpg",
    tags: ["review", "self-hosting", "rust"],
    en: {
      title: "Noted.lol: VoceChat Self-Hosted Chat Built with Rust",
      excerpt:
        "Jeremy at Noted.lol walks through VoceChat's Docker setup, free-tier limits, and why a 20 MB Rust server appeals to homelabbers.",
      quote:
        "VoceChat is a secure, self-managed chat platform that empowers users to have full control over their data. It offers end-to-end encrypted transmission, allowing for seamless communication while maintaining user sovereignty.",
      quoteAttribution: "Jeremy, Noted.lol"
    },
    "zh-CN": {
      title: "Noted.lol：基于 Rust 的自托管 VoceChat 评测",
      excerpt:
        "Noted.lol 的 Jeremy 介绍了 VoceChat 的 Docker 部署方式、免费版限制，以及 20 MB Rust 服务端为何适合 homelab 玩家。",
      quote:
        "VoceChat 是一个安全的、自主管理的聊天平台，让用户完全掌控自己的数据，在保持数据主权的同时实现顺畅沟通。",
      quoteAttribution: "Jeremy，Noted.lol"
    }
  },
  {
    slug: "youtube-docker-compose-tutorial",
    date: "2023-08-28",
    sourceUrl: "https://www.youtube.com/watch?v=sBCQGVxK4FY",
    sourceName: "José Maria Labarta",
    sourceType: "video",
    youtubeId: "sBCQGVxK4FY",
    previewImage: "https://i.ytimg.com/vi/sBCQGVxK4FY/hqdefault.jpg",
    tags: ["docker", "tutorial", "video"],
    en: {
      title: "How to Install VoceChat with Docker Compose (YouTube)",
      excerpt:
        "An 8-minute walkthrough cloning a docker-compose repo and bringing VoceChat online on a VPS.",
      quote:
        "VoceChat is a superlight Rust-powered chat app, API and SDK that prioritizes private hosting. Build your own in-app messaging feature with VoceChat.",
      quoteAttribution: "José Maria Labarta, YouTube"
    },
    "zh-CN": {
      title: "YouTube：使用 Docker Compose 安装 VoceChat",
      excerpt: "8 分钟视频教程，演示如何通过 docker-compose 在 VPS 上部署 VoceChat。",
      quote:
        "VoceChat 是一款由 Rust 驱动的超轻量聊天应用、API 与 SDK，专为私有部署而生。",
      quoteAttribution: "José Maria Labarta，YouTube"
    }
  },
  {
    slug: "tencent-cloud-deploy-review",
    date: "2023-11-15",
    sourceUrl: "https://cloud.tencent.com/developer/article/2254849",
    sourceName: "腾讯云开发者社区",
    sourceType: "article",
    previewImage:
      "https://developer.qcloudimg.com/http-save/yehe-admin/ff7ba0f669ec3de35086b5f0e11c5fdb.png",
    tags: ["deploy", "review", "docker"],
    en: {
      title: "Tencent Cloud Community: VoceChat Deploy & Hands-on Review",
      excerpt:
        "A Chinese developer community write-up covering one-line Docker deploy, PWA support, push notifications, and real resource usage.",
      quote:
        "Overall, VoceChat matches my definition of a pure IM — lightweight yet powerful. So far it's the best open-source IM I've used.",
      quoteAttribution: "Tencent Cloud Developer Community"
    },
    "zh-CN": {
      title: "腾讯云开发者社区：VoceChat 部署与体验",
      excerpt:
        "中文社区实测文章，涵盖一行 Docker 命令部署、PWA 体验、推送通知以及真实资源占用数据。",
      quote:
        "总的来说，VoceChat 很符合我对纯粹的 IM 的定义，轻快又强大，目前来说是我用过的开源 IM 最好的一个了。",
      quoteAttribution: "腾讯云开发者社区"
    }
  },
  {
    slug: "einverne-lightweight-chat-room",
    date: "2024-07-15",
    sourceUrl: "https://blog.einverne.info/post/2024/07/vocechat-online-chat-room.html",
    sourceName: "Verne in GitHub",
    sourceType: "article",
    previewImage: "https://photo.einverne.info/images/2024/08/10/MenX.jpg",
    tags: ["comparison", "nas", "widget"],
    en: {
      title: "Verne in GitHub: A Lightweight Self-Hosted Chat Room",
      excerpt:
        "Ein Verne compares VoceChat to Chatwoot, covers Nginx Proxy Manager setup, and highlights voice via Agora.",
      quote:
        "Chatwoot requires seven or eight containers to deploy, while VoceChat only needs one.",
      quoteAttribution: "einverne, Verne in GitHub"
    },
    "zh-CN": {
      title: "Verne in GitHub：一款可以自托管的在线聊天室",
      excerpt:
        "einverne 将 VoceChat 与 Chatwoot 对比，介绍 Nginx Proxy Manager 反代配置，以及通过 Agora 实现语音通话。",
      quote: "部署 Chatwoot 需要创建七八个容器，而 VoceChat 只需要一个容器。",
      quoteAttribution: "einverne，Verne in GitHub"
    }
  },
  {
    slug: "linkedin-vocechat-million-servers",
    date: "2026-02-15",
    sourceUrl:
      "https://www.linkedin.com/feed/update/urn:li:share:7472411742900506624",
    sourceName: "Han Su, Privoce",
    sourceType: "article",
    linkedinShareId: "7472411742900506624",
    tags: ["linkedin", "milestones", "cloudflare", "self-hosting"],
    en: {
      title: "LinkedIn: VoceChat Reaches Nearly One Million Servers",
      excerpt:
        "Privoce founder Han Su on VoceChat's growth from 1,000 to nearly one million servers — and how Cloudflare Tunnel lets you host locally and access from anywhere.",
      quote:
        "Today, VoceChat is used on nearly one million servers. Thanks to Cloudflare Tunnel, you can now host VoceChat on your own computer and access it from anywhere.",
      quoteAttribution: "Han Su, Privoce Founder, LinkedIn"
    },
    "zh-CN": {
      title: "领英：VoceChat 服务器接近百万",
      excerpt:
        "Privoce 创始人 Han Su 分享 VoceChat 从 1000 台增长至近百万台服务器的历程，以及 Cloudflare Tunnel 如何实现本地部署、随处访问。",
      quote:
        "如今 VoceChat 已在近百万台服务器上运行。借助 Cloudflare Tunnel，你可以在自己的电脑上托管 VoceChat，并从任何地方访问。",
      quoteAttribution: "Han Su，Privoce 创始人，领英"
    }
  },
  {
    slug: "bilibili-read-nas-deploy",
    date: "2024-12-01",
    sourceUrl: "https://www.bilibili.com/read/cv39462945",
    sourceName: "哔哩哔哩专栏",
    sourceType: "article",
    previewImage:
      "https://developer.qcloudimg.com/http-save/yehe-admin/b2c9cd15f6b6b723705d2f17ae6bfee5.png",
    tags: ["nas", "deploy", "guide"],
    en: {
      title: "Bilibili Column: Fast Lightweight VoceChat on NAS",
      excerpt:
        "A written guide covering Docker, Nginx, and Synology NAS package installs for VoceChat.",
      quote:
        "VoceChat is a lightweight chat service around 15 MB that runs easily on a PC, NAS, or server with very low maintenance cost.",
      quoteAttribution: "Bilibili column author"
    },
    "zh-CN": {
      title: "哔哩哔哩专栏：VoceChat 轻量化快速部署与使用体验",
      excerpt: "图文教程，涵盖 Docker、Nginx 以及群晖 NAS 套件安装等多种 VoceChat 部署方式。",
      quote:
        "VoceChat 是一款支持独立部署的轻量化聊天服务，大小 15MB，能够轻松部署在个人电脑、NAS 或者服务器上，且维护成本极低。",
      quoteAttribution: "哔哩哔哩专栏作者"
    }
  },
  {
    slug: "docker-hub-official-image",
    date: "2026-06-01",
    sourceUrl: "https://hub.docker.com/r/privoce/vocechat-server",
    sourceName: "Docker Hub",
    sourceType: "docs",
    tags: ["docker", "official"],
    en: {
      title: "Official Docker Image: privoce/vocechat-server",
      excerpt:
        "The official Docker Hub listing — 100K+ pulls, ~24 MB image, one-command deploy.",
      quote:
        "20MB Private Chat Server. Rust+Typescript+Flutter. Super easy to run: docker run -d --restart=always -p 3000:3000 --name vocechat-server privoce/vocechat-server:latest",
      quoteAttribution: "Privoce, Docker Hub"
    },
    "zh-CN": {
      title: "官方 Docker 镜像：privoce/vocechat-server",
      excerpt: "Docker Hub 官方镜像页面，超过 10 万次拉取，约 24 MB，一条命令即可部署。",
      quote:
        "20MB 私有聊天服务器。Rust + Typescript + Flutter。一条 docker run 命令即可启动。",
      quoteAttribution: "Privoce，Docker Hub"
    }
  },
  {
    slug: "official-docker-install-docs",
    date: "2026-06-01",
    sourceUrl: "https://doc.voce.chat/install/docker",
    sourceName: "VoceChat Docs",
    sourceType: "docs",
    tags: ["docs", "docker", "tls"],
    en: {
      title: "Official Docs: Run VoceChat in Docker",
      excerpt:
        "Official installation guide — quick start, built-in TLS via CertBot, backup, and upgrade commands.",
      quote:
        "One line startup service: docker run -d --restart=always -p 3000:3000 --name vocechat-server privoce/vocechat-server:latest",
      quoteAttribution: "VoceChat Documentation"
    },
    "zh-CN": {
      title: "官方文档：Docker 安装 VoceChat",
      excerpt: "官方安装指南，包含快速体验、内置 CertBot TLS、备份与升级命令。",
      quote:
        "一行启动服务：docker run -d --restart=always -p 3000:3000 --name vocechat-server privoce/vocechat-server:latest",
      quoteAttribution: "VoceChat 官方文档"
    }
  }
];

export function getPostPreviewImage(post: BlogPost, locale: Locale): string {
  if (post.previewImage) return post.previewImage;
  if (post.youtubeId) return `https://i.ytimg.com/vi/${post.youtubeId}/hqdefault.jpg`;
  return `/api/og/blog/${post.slug}?locale=${locale}`;
}

export function getAbsolutePostPreviewImage(post: BlogPost, locale: Locale): string {
  const preview = getPostPreviewImage(post, locale);
  if (preview.startsWith("http")) return preview;
  return `${SITE_URL}${preview}`;
}

export function getPostContent(post: BlogPost, locale: Locale): BlogPostContent {
  return post[locale];
}

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.date.localeCompare(a.date);
  });
}

export function getRecentPosts(
  locale: Locale,
  limit = 3
): Array<BlogPost & BlogPostContent> {
  return getAllPosts()
    .slice(0, limit)
    .map((post) => ({
      ...post,
      ...getPostContent(post, locale)
    }));
}

export function getPostBySlug(slug: string, locale: Locale): (BlogPost & BlogPostContent) | null {
  const post = blogPosts.find((entry) => entry.slug === slug);
  if (!post) return null;
  return { ...post, ...getPostContent(post, locale) };
}

export function getAllPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getSourceTypeLabel(type: SourceType, locale: Locale): string {
  const labels: Record<Locale, Record<SourceType, string>> = {
    en: { article: "Article", video: "Video", docs: "Docs" },
    "zh-CN": { article: "文章", video: "视频", docs: "文档" }
  };
  return labels[locale][type];
}
