import React, { ReactElement } from "react";
import Image from "next/image";
const data = [
  {
    icon: "/img/icon.secure.png",
    title: "Security",
    list: [
      "All data is stored on your own, private, server.",
      "The server is developed in Rust with critical business process tests with 80%+ coverage.",
      "Read and delete functionality."
    ]
  },
  {
    icon: "/img/icon.lightweight.png",
    title: "Lightweight",
    list: ["The server is less than 20 MB in size and can easily run on a NAS and Raspberry Pi."]
  },
  {
    icon: "/img/icon.open.api.png",
    title: <a href="https://doc.voce.chat/api/get-the-server-version" target={"_blank"} rel="noreferrer">OpenAPI</a>,
    list: [
      "Utilizes open API standard, with easy integration with third-party applications and tools. ",
      "With complete documentation and testing."
    ]
  },
  {
    icon: "/img/icon.cross.platform.png",
    title: "Cross Platform",
    list: [
      "Developed with Flutter + React.",
      "Support Android, iOS, MacOS, Web, and Windows platforms."
    ]
  }
];
type FeatureProps = { icon: string; title: string | ReactElement; list: string[] };
const Feature = ({ icon, title, list }: FeatureProps) => {
  return (
    <div className="flex flex-col w-[272px] sm:w-[75%] sm:items-center md:items-start md:w-[272px]">
      <Image
        width={48}
        height={48}
        alt="Feature Icon"
        src={icon}
        className="w-12 h-12 sm:w-24 sm:h-24 md:w-12 md:h-12"
      ></Image>
      <h4 className="text-gray-900 font-semibold text-xl sm:text-4xl md:text-xl mt-5 mb-2">
        {title}
      </h4>
      <ul className="flex flex-col gap-4">
        {list.map((l) => {
          return (
            <li
              key={l}
              className="text-md sm:text-xl md:text-md text-gray-500 sm:text-center md:text-left"
            >
              {l}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

type Props = {};
const Features = (props: Props) => {
  return (
    <section className="flex flex-col items-center pb-24">
      <h3 className="font-semibold text-4xl tracking-tight text-gray-900 text-center">
        Open API and SDK for you to host anywhere. No central service.
      </h3>
      <p className="sm:w-[80%] w-[768px] text-center text-xl sm:text-2xl md:text-xl text-gray-500 mt-5 mb-16 ">
        Bots, video call, publich channel, open ID, open API, open sourced SDK, iterate based on users feedback. Trusted by
        over <a href="https://hub.docker.com/r/privoce/vocechat-server/tags">40,000</a> customers from 50+ countries.
      </p>
      <div class = "flex gap-12 md:flex-row">
        <a
        href="https://doc.voce.chat/api/get-the-server-version"
        target={"_blank"}
        rel="noopener noreferrer"
        className="btn-primary mb-16"
      >
        View doc
      </a> 
      <a
        href="https://doc.voce.chat/api/get-the-server-version"
        target={"_blank"}
        rel="noopener noreferrer"
        className="btn-primary mb-16"
      >
        Test API
      </a>
      </div>

      <div className="flex gap-24 sm:flex-col sm:items-center md:flex-row">
        <div className="flex flex-col gap-24 sm:items-center sm:order-2 md:order-1">
          {data.slice(0, 2).map((f) => {
            const { title, icon, list } = f;
            return <Feature key={icon} title={title} icon={icon} list={list} />;
          })}
        </div>
        <div className="relative w-[480px] flex justify-center sm:order-1 md:order-2">
          <div className="w-[532px] h-[480px] rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] bg-primary-100 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] animate-morph"></div>
          <Image
            width={290}
            height={600}
            className="w-[290px] translate-x-0 translate-y-0"
            src={"/img/mobile.png"}
            alt="Mobile Demo Picture"
          />
        </div>
        <div className="flex flex-col gap-24 sm:items-center sm:order-3">
          {data.slice(2).map((f) => {
            const { title, icon, list } = f;
            return <Feature key={icon} title={title} icon={icon} list={list} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
