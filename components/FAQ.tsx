import React from "react";

const items = [
  {
    question: "What is Voce Chat?",
    answer:
      "Voce Chat is a lightweight, self-hosted team communication platform that provides secure messaging, file sharing, and collaboration features. It's designed to be resource-efficient and easy to deploy, making it ideal for teams who want full control over their communication infrastructure."
  },
  {
    question: "How do I install Voce Chat?",
    answer: (
      <>
        Voce Chat can be installed using Docker with a single command: <br />
        <br />
        <code className="whitespace-pre text-white bg-black p-2 my-2">
          docker run -d -p 3000:3000 <br /> -v ~/.vocechat:/home/vocechat <br />
          vocechat/vocechat-server:latest
        </code>
        <br /> <br />
        It also supports installation via binary files or from source for different platforms.
      </>
    )
  },
  {
    question: "What are the system requirements?",
    answer:
      "Voce Chat requires only 20MB of RAM and works on Linux, Windows, macOS, and ARM devices like Raspberry Pi. Any VPS with 512MB RAM or more is sufficient for running Voce Chat."
  },
  {
    question: "Is Voce Chat free?",
    answer:
      "Yes, Voce Chat offers a free self-hosted version with core features including unlimited users, channels, and messages. Paid plans are available for additional enterprise features and support."
  },
  {
    question: "How secure is Voce Chat?",
    answer:
      "Voce Chat provides end-to-end encryption support, SSL/TLS encryption for data in transit, and local data storage under your control. Being self-hosted ensures complete data ownership and privacy."
  },
  {
    question: "Does Voce Chat have mobile apps?",
    answer:
      "Yes, Voce Chat provides native mobile applications for both iOS and Android devices, as well as a responsive web interface that works on any modern browser."
  },
  {
    question: "Can I integrate Voce Chat with other tools?",
    answer:
      "Yes, Voce Chat supports webhooks and API integrations, allowing connections with third-party services and workflow automation. Bot support is also available for custom automation needs."
  },
  {
    question: "How does Voce Chat compare to Slack or Discord?",
    answer:
      "Unlike cloud-based solutions, Voce Chat is self-hosted with complete data ownership, requires minimal resources, has no user limits in the self-hosted version, and offers a simpler interface focused on essential communication features."
  },
  {
    question: "Can I migrate from another chat platform?",
    answer:
      "Voce Chat provides data import tools for migrating from certain platforms. The API also allows for custom migration scripts. Check the documentation for specific migration guides and supported formats."
  },
  {
    question: "Where can I get help?",
    answer: (
      <>
        Help is available through the documentation at{" "}
        <a href="http://doc.voce.chat" target="_blank" rel="noopener noreferrer">
          doc.voce.chat
        </a>
        , community forums, GitHub repository for issue reporting, and direct support for paid plan
        users.
      </>
    )
  }
];

const FAQ = () => {
  return (
    <section className="flex flex-col items-center py-24 px-4">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-semibold text-4xl sm:text-5xl tracking-tight text-gray-900">FAQ</h2>
          <p className="mt-4 text-lg text-gray-500">
            Everything you need to know about VoceChat.
          </p>
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
