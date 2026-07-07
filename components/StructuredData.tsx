import { getTranslations } from "next-intl/server";
import { getCanonicalUrl, SITE_URL } from "../lib/seo";

export default async function StructuredData() {
  const t = await getTranslations("home.faq");
  const meta = await getTranslations("metadata");

  const schemaAnswerKeys: Record<number, string> = {
    2: "a2Schema",
    3: "a3Schema",
    6: "a6Schema",
    7: "a7Schema",
    8: "a8Schema",
    9: "a9Schema",
    11: "a11Schema"
  };

  const faqAnswers: Record<number, string> = Object.fromEntries(
    Array.from({ length: 11 }, (_, i) => {
      const n = i + 1;
      const answerKey = schemaAnswerKeys[n] ?? `a${n}`;
      return [n, t(answerKey as "a1")];
    })
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: Array.from({ length: 11 }, (_, i) => {
      const n = i + 1;
      return {
        "@type": "Question",
        name: t(`q${n}` as "q1"),
        acceptedAnswer: {
          "@type": "Answer",
          text: faqAnswers[n]
        }
      };
    })
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "VoceChat",
    alternateName: "Voce Chat",
    applicationCategory: "CommunicationApplication",
    operatingSystem: "iOS, Android, Windows, macOS, Linux, Web",
    description:
      "A lightweight self-hosted chat server and open-source Slack alternative powered by Rust. Bots, webhooks, AI agents, OpenClaw, VoceSpace video, and embeddable widgets.",
    url: SITE_URL,
    downloadUrl: "https://doc.voce.chat/install/",
    softwareHelp: "https://doc.voce.chat/",
    featureList: [
      "Self-hosted chat server (~20 MB, Rust)",
      "One-line Docker deployment",
      "Built-in Cloudflare Tunnel for public access without port forwarding",
      "Bots, webhooks, and AI agent integration (OpenClaw)",
      "Open API and SDK for in-app messaging",
      "Embeddable website chat widget",
      "Cross-platform apps: iOS, Android, Windows, macOS, Web",
      "Runs on NAS (Synology, UGREEN) and Raspberry Pi"
    ],
    sameAs: ["https://github.com/Privoce/vocechat-server"],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Privoce",
    url: SITE_URL,
    logo: `${SITE_URL}/android-chrome-192x192.png`,
    sameAs: ["https://github.com/Privoce", "https://twitter.com/Privoce1"]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "VoceChat",
    url: SITE_URL,
    description: meta("description"),
    publisher: {
      "@type": "Organization",
      name: "Privoce",
      logo: `${SITE_URL}/android-chrome-192x192.png`
    }
  };

  const navigationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SiteNavigationElement",
        name: "Features",
        url: `${SITE_URL}/#features`
      },
      {
        "@type": "SiteNavigationElement",
        name: "Deploy",
        url: `${SITE_URL}/#deploy`
      },
      {
        "@type": "SiteNavigationElement",
        name: "FAQ",
        url: `${SITE_URL}/#faq`
      },
      {
        "@type": "SiteNavigationElement",
        name: meta("blogTitle"),
        url: `${SITE_URL}/blog`
      },
      {
        "@type": "SiteNavigationElement",
        name: meta("supportTitle"),
        url: `${SITE_URL}/support`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationSchema) }}
      />
    </>
  );
}
