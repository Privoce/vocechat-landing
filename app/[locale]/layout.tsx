import { Suspense } from "react";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "../../i18n/routing";
import "../../styles/globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL("https://voce.chat"),
  title: "VoceChat Website",
  description: "Private Hosted Chat, In-app messaging, AI Bots, NAS self-hosted chat server",
  keywords:
    "Private Hosted, In-app messaging, Chat framework, Chat SDK, AI agent, IM, Integration, API, SDK, Rust",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  twitter: {
    card: "summary_large_image",
    creator: "@privoce1",
    title: "VoceChat",
    description: "Your Social Media Privately Hosted"
  },
  openGraph: {
    type: "website",
    url: "https://voce.chat",
    siteName: "VoceChat",
    title: "VoceChat",
    description: "Your Social Media Privately Hosted",
    images: ["https://voce.chat/api/og"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#527ff1"
};

const SPLASH_SCREENS = [
  {
    href: "/splash/iphone5_splash.png",
    media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
  },
  {
    href: "/splash/iphone6_splash.png",
    media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
  },
  {
    href: "/splash/iphoneplus_splash.png",
    media: "(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
  },
  {
    href: "/splash/iphonex_splash.png",
    media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
  },
  {
    href: "/splash/iphonexr_splash.png",
    media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
  },
  {
    href: "/splash/iphonexsmax_splash.png",
    media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
  },
  {
    href: "/splash/ipad_splash.png",
    media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
  },
  {
    href: "/splash/ipadpro1_splash.png",
    media: "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
  },
  {
    href: "/splash/ipadpro3_splash.png",
    media: "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
  },
  {
    href: "/splash/ipadpro2_splash.png",
    media: "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
  }
];

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <head>
        {SPLASH_SCREENS.map((s) => (
          <link key={s.href} href={s.href} media={s.media} rel="apple-touch-startup-image" />
        ))}
      </head>
      <body className="selection:bg-primary-300 selection:text-primary-25 bg-white">
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-D6S2F7X8YR"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-D6S2F7X8YR');
            `
          }}
        />
        {/* vc widget */}
        <Script
          data-id="1253335829586116630"
          data-host-id="2"
          data-auto-reg="false"
          data-login-token=""
          data-theme-color="#1fe1f9"
          data-close-width="48"
          data-close-height="48"
          data-open-width="380"
          data-open-height="680"
          data-title="Live Chat"
          data-logo="https://voce.chat/favicon.ico"
          src="https://bridger.privoce.com/widgets.js"
          data-welcome="Hello!"
          strategy="afterInteractive"
        />
        <NextIntlClientProvider>
          <Suspense>{children}</Suspense>
        </NextIntlClientProvider>
        <aside
          id="root_modal"
          className="pointer-events-none fixed top-0 left-0 w-full h-full z-[999]"
        ></aside>
      </body>
    </html>
  );
}
