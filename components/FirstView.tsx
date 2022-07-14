import React from "react";
import Image from "next/future/image";
type Props = {};

function FirstView({}: Props) {
  return (
    <section className="flex h-[100vh] flex-col items-center bg-primary-50 pt-24 pb-10 bg-[url('/img/bg.first.view.jpg')] bg-bottom bg-no-repeat bg-contain">
      <h2 className="font-semibold md:text-6xl sm:text-4xl text-primary-900 tracking-tight text-center">
        Your Social Media Privately Hosted
      </h2>
      <p className="text-xl w-[768px] sm:w-[90%] text-center text-primary-700 mt-6 mb-16 mx-4">
        As a top alternative to centralized chat services, Voce chat is a superlight Rust powered
        open-core chat app that prioritizes private hosting.
      </p>
      <Image className="sm:w-[90%] md:w-[800px]" src={"/img/demo.png"} alt="demo picture" />
    </section>
  );
}

export default FirstView;
