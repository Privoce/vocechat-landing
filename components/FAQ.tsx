import React, { ReactNode } from "react";
import { useTranslations } from "next-intl";

const FAQ = () => {
  const t = useTranslations("home.faq");

  const items: { question: string; answer: ReactNode }[] = [
    { question: t("q1"), answer: t("a1") },
    {
      question: t("q2"),
      answer: (
        <>
          {t("a2Lead")} <br />
          <br />
          <code className="whitespace-pre text-white bg-black p-2 my-2">
            docker run -d -p 3000:3000 <br /> -v ~/.vocechat:/home/vocechat <br />
            vocechat/vocechat-server:latest
          </code>
          <br /> <br />
          {t("a2Tail")}
        </>
      )
    },
    { question: t("q3"), answer: t("a3") },
    { question: t("q4"), answer: t("a4") },
    { question: t("q5"), answer: t("a5") },
    { question: t("q6"), answer: t("a6") },
    { question: t("q7"), answer: t("a7") },
    { question: t("q8"), answer: t("a8") },
    { question: t("q9"), answer: t("a9") },
    {
      question: t("q10"),
      answer: t.rich("a10", {
        link: (chunks) => (
          <a href="http://doc.voce.chat" target="_blank" rel="noopener noreferrer">
            {chunks}
          </a>
        )
      })
    }
  ];

  return (
    <section className="flex flex-col items-center py-24 px-4">
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
      </div>
    </section>
  );
};

export default FAQ;
