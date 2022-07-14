import React from "react";
import Image from "next/future/image";
type Props = {};

const Deploy = (props: Props) => {
  return (
    <section className="flex flex-col items-center py-[96px] bg-gray-800 text-white">
      <h3 className="font-semibold text-4xl sm:text-6xl md:text-4xl tracking-tight text-gray-25 text-center">
        Deploy our free-trial version through docker:
      </h3>
      <p className="text-center text-gray-300 text-xl mt-5">
        For other ways of installation, check out our{" "}
        <a
          className="text-primary-500"
          href="https://doc.voce.chat/en-us/"
          target="_blank"
          rel="noopener noreferrer"
        >
          documentation
        </a>
        .
      </p>
      <div className="mt-16 mb-10 py-2">
        <code className="w-fit bg-gray-900 px-10 py-5 rounded-xl whitespace-pre">
          curl -sf https://sh.rustchat.com/install.sh a+x install.sh && ./install.sh
        </code>
      </div>
      <div className="flex gap-2">
        <button className="btn-primary-large flex gap-3 items-center">
          <Image className="w-6 h-6" src={"/img/icon.copy.svg"} alt="Copy Icon"></Image>
          Copy Code
        </button>
        <a
          className="btn-primary-large bg-white text-gray-700 hover:bg-gray-25/80"
          target="_blank"
          rel="noopener noreferrer"
          href="//privoce.voce.chat"
        >
          Demo
        </a>
      </div>
      <span className="my-16 text-gray-25 text-md">
        After starting the server, visit http://localhost:3000/ to use the app.
      </span>
      <div className="flex flex-col items-center">
        <h4 className="font-semibold text-4xl sm:text-6xl md:text-4xl text-[#FCFCFD]">
          Still having a problem?
        </h4>
        <span className="mt-3 mb-16">
          Check out{" "}
          <a
            className="text-primary-400"
            href="https://www.youtube.com/watch?v=RzmwpFWY-kI"
            target="_blank"
            rel="noopener noreferrer"
          >
            video instruction
          </a>{" "}
          . Or book a consulting meeting with us:
        </span>
        <a
          href="https://calendly.com/hansu/han-meeting"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Book a Meeting
        </a>
      </div>
    </section>
  );
};

export default Deploy;
