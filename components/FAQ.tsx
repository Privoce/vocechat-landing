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
    <section className="flex flex-col items-center py-24">
      <h2 className="font-semibold text-4xl sm:text-5xl md:text-4xl tracking-tight text-gray-900 w-[768px] sm:w-[80%] md:w-[768px] text-center ">
        FAQ
      </h2>
      <ul className="flex flex-col gap-3 m-auto w-full max-w-xl">
        {items.map((q) => {
          return (
            <li key={q.question} className="[&_a]:underline [&_a]:text-primary-500">
              <details>
                <summary className="cursor-pointer text-lg font-bold select-none">
                  {q.question}
                </summary>
                <div className="text-gray-800">{q.answer}</div>
              </details>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FAQ;
