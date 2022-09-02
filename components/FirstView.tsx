import React from "react";
import Image from "next/future/image";
type Props = {};

function FirstView({}: Props) {
  return (
    <section className="flex min-h-screen flex-col items-center bg-primary-50 pt-24 pb-10 bg-[url('/img/bg.first.view.jpg')] bg-bottom bg-no-repeat bg-contain">
      <h2 className="font-semibold md:text-6xl sm:text-4xl text-primary-900 tracking-tight text-center">
        Your Social Media Privately Hosted
      </h2>
      <p className="text-xl w-[768px] sm:w-[90%] text-center text-primary-700 mt-6 mb-16 mx-4">
        As a top alternative to centralized chat services, Voce chat is a superlight Rust powered
        open-core chat app that prioritizes private hosting.
      </p>
      <Image
        width={800}
        height={496}
        placeholder="blur"
        className="sm:w-[90%] md:w-[800px] lg:w-[1200px]"
        blurDataURL="data:image/png;base64,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"
        quality={100}
        unoptimized={true}
        src={"/img/demo.png"}
        alt="demo picture"
      />
    </section>
  );
}

export default FirstView;
