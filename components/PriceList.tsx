import React, { useState, useEffect, useRef, FC } from "react";
import clsx from 'clsx'

type Price = {
  title: string,
  desc: string,
  price?: {
    value: number,
    unit: "forever" | "version"
  },
  pay_link: string,
  feats: string[],
  highlight?: boolean
}

// `linear-gradient(rgb(40, 40, 40),rgb(40, 40, 40))_padding-box_padding-box,linear-gradient(153.06deg,rgb(60, 140, 231)_4.31%,rgb(99, 237, 230)_56.27%)_border-box_border-box`
const PriceBlock = ({ data }: { data: Price }) => {
  const { title, desc, price, pay_link, feats, highlight } = data;
  console.log("data", data);
  const blockClass = clsx(
    "flex flex-col items-start text-white p-5 border-solid border border-white rounded-3xl bg-black w-[326px]",
    highlight && "border-[6px] border-[#63EDE6]")
  return <div className={blockClass}>
    <h2 className=" text-5xl font-bold min-h-[68px]">{title}</h2>
    <p className="text-lg min-h-[60px]">{desc}</p>
    <div className="text-5xl font-semibold my-4">
      {price ? <>{`$${price.value}`}<span className="text-2xl font-normal">/{price.unit}</span></> : "Let's talk"}
    </div>
    <a href={pay_link} target="_blank" rel="noopener noreferrer" className={clsx("py-2 px-4 rounded-full bg-white text-black text-sm my-6 hover:opacity-80", highlight && "bg-[#52EDFF]")}>Get Started</a>
    <h3 className="text-2xl font-semibold my-3">Key Features</h3>
    <ul className="text-lg flex flex-col gap-3 opacity-80">
      {feats.map(f => {
        return <li key={f} className="flex items-start gap-2"><i className="inline-block check-flip-x font-light font-mono">ヘ</i>
          <span>
            {f}
          </span>
        </li>
      })}
    </ul>

  </div>;
};
const prices: Price[] = [
  {
    title: "Free",
    desc: "Run VoceChat on your server",
    price: {
      value: 0,
      unit: "forever"
    },
    pay_link: "https://doc.voce.chat/install/",
    feats: [
      "Limited Bot and Webhook",
      "Public and Private Channel",
      "Limited to 20 members"
    ]
  },
  {
    title: "Pro",
    desc: "Build a community of your own with VoceChat",
    price: {
      value: 49,
      unit: "version"
    },
    pay_link: "https://doc.voce.chat/install/",
    feats: [
      "Chat widget for customer service",
      "Unlimited Members and Bot",
      "No recurring charges",
      "Only pay when you want to upgrade to newer versions"
    ],
    highlight: true
  },
  {
    title: "Enterprise",
    desc: "Add a chat feature to your app with VoceChat SDK",
    pay_link: "https://calendly.com/hansu",
    feats: [
      "Source code with license",
      "No recurring charges",
      "On-demand customization",
      "Video and Audio",
    ]
  }
]
const PriceList = () => {
  // const [copied, setCopied] = useState(false);
  return (
    <section className="flex flex-col gap-12 items-center justify-center py-[96px] bg-gray-800 md:flex-row md:items-stretch">
      {prices.map(p => {
        return <PriceBlock data={p} key={p.title} />
      })}
    </section>
  );
};

export default PriceList;
