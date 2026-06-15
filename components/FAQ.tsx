import React, { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { Link } from "../i18n/navigation";

const FAQ_COUNT = 11;

function docLink(path: string) {
  return function DocLink(chunks: ReactNode) {
    return (
      <a href={`https://doc.voce.chat${path}`} target="_blank" rel="noopener noreferrer">
        {chunks}
      </a>
    );
  };
}

const richLinkRenderers = {
  link: docLink("/"),
  install: docLink("/install"),
  blog: (chunks: ReactNode) => <Link href="/blog">{chunks}</Link>,
  support: (chunks: ReactNode) => <Link href="/support">{chunks}</Link>,
  bot: docLink("/bot/bot-and-webhook"),
  api: docLink("/api-doc"),
  gpt: docLink("/bot/demo-gpt"),
  openclaw: docLink("/openclaw-integration"),
  widget: docLink("/widget"),
  github: (chunks: ReactNode) => (
    <a
      href="https://github.com/Privoce/vocechat-server"
      target="_blank"
      rel="noopener noreferrer"
    >
      {chunks}
    </a>
  ),
  vocespace: (chunks: ReactNode) => (
    <a href="https://vocespace.com" target="_blank" rel="noopener noreferrer">
      {chunks}
    </a>
  )
};

const richAnswerKeys = new Set([3, 6, 7, 8, 9, 11]);

function getAnswer(t: ReturnType<typeof useTranslations>, index: number): ReactNode {
  if (index === 2) {
    return (
      <>
        {t("a2Lead")} <br />
        <br />
        <code className="whitespace-pre text-white bg-black p-2 my-2">
          docker run -d --restart=always <br />
          -p 3000:3000 <br />
          --name vocechat-server <br />
          privoce/vocechat-server:latest
        </code>
        <br /> <br />
        {t.rich("a2Tail", richLinkRenderers)}
      </>
    );
  }

  if (richAnswerKeys.has(index)) {
    return t.rich(`a${index}` as "a3", richLinkRenderers);
  }

  return t(`a${index}` as "a1");
}

const FAQ = () => {
  const t = useTranslations("home.faq");

  const items = Array.from({ length: FAQ_COUNT }, (_, i) => {
    const index = i + 1;
    return {
      question: t(`q${index}` as "q1"),
      answer: getAnswer(t, index)
    };
  });

  return (
    <section id="faq" className="flex flex-col items-center py-24 px-4">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-semibold text-4xl sm:text-5xl tracking-tight text-gray-900">
            {t("heading")}
          </h2>
          <p className="mt-4 text-lg text-gray-500">{t("subtitle")}</p>
        </div>
        <ul className="flex flex-col gap-4">
          {items.map((q) => {
            return (
              <li key={q.question}>
                <details className="group rounded-2xl border border-gray-200 bg-white transition-colors duration-200 open:border-primary-200 open:bg-primary-25 open:shadow-[0_4px_24px_rgba(16,24,40,0.06)] [&_a]:text-primary-500 [&_a]:underline">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer select-none list-none p-5 md:p-6 [&::-webkit-details-marker]:hidden">
                    <span className="text-base md:text-lg font-semibold text-gray-900">
                      {q.question}
                    </span>
                    <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-500 transition-all duration-200 group-open:bg-primary-100 group-open:text-primary-600 group-open:rotate-180">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1 text-md leading-relaxed text-gray-600">
                    {q.answer}
                  </div>
                </details>
              </li>
            );
          })}
        </ul>
        <div className="mt-12 rounded-2xl border border-primary-200 bg-primary-25 px-6 py-5 text-center">
          <p className="text-md text-gray-600">{t("blogCta")}</p>
          <Link
            href="/blog"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700"
          >
            {t("blogCtaLink")}
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
      </div>
    </section>
  );
};

export default FAQ;
