import React, { useState, useEffect } from "react";
import Image from "next/future/image";
import Modal from "./Modal";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
const shellCode = `docker run -d --restart=always \\
-p 3000:3000 \\
--name vocechat-server \\
privoce/vocechat-server:latest`;
const YoutubePlayer = ({ closePlayer }: { closePlayer?: () => void }) => {
  useEffect(() => {
    const player = new Plyr("#youtube_player", {
      autoplay: true
    });

    return () => {
      player.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-3 sm:w-full md:w-[800px] px-2">
      <div className="shadow-xl rounded-2xl overflow-hidden w-full">
        <div id="youtube_player" data-plyr-provider="youtube" data-plyr-embed-id="RzmwpFWY-kI" />
      </div>
      {closePlayer && (
        <button onClick={closePlayer} className="btn-primary-small ">
          Close
        </button>
      )}
    </div>
  );
};
const Deploy = () => {
  const [copied, setCopied] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  const handleYoutubeOpen = () => {
    setShowPlayer(true);
  };
  return (
    <>
      <section className="flex flex-col items-center py-[96px] bg-gray-800 text-white text-center">
        <h3 className="font-semibold text-4xl tracking-tight text-gray-25 ">
          Deploy our free-trial version through docker:
        </h3>
        <p className="text-gray-300 text-xl mt-5">
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
        <code className="flex w-fit font-mono text-md bg-gray-900 sm:px-8 md:px-10 py-5 rounded-xl whitespace-pre mt-16 mb-10 sm:w-[90%] md:w-fit overflow-x-auto overflow-y-hidden text-left">
          {shellCode}
        </code>
        <div className="flex gap-2">
          <CopyToClipboard text={shellCode} onCopy={handleCopy}>
            <button className="btn-primary-large flex gap-3 items-center">
              <Image
                width={24}
                height={24}
                className="w-6 h-6"
                src={"/img/icon.copy.svg"}
                alt="Copy Icon"
              ></Image>
              {copied ? `Copied!` : `Copy Code`}
            </button>
          </CopyToClipboard>
          <a
            className="btn-primary-large bg-white text-gray-700 hover:bg-gray-25/80"
            target="_blank"
            rel="noopener noreferrer"
            href="//privoce.voce.chat"
          >
            Live Demo
          </a>
        </div>
        <span className="my-16 text-gray-25 text-md">
          After starting the server, visit http://localhost:3000/ to use the app.
        </span>
        <div className="flex flex-col items-center">
          <h4 className="font-semibold text-4xl text-gray-25 ">Still having a problem?</h4>
          <span className="mt-3 mb-16 ">
            Check out{" "}
            <button onClick={handleYoutubeOpen} className="text-primary-400">
              video instruction
            </button>{" "}
            . Or book a consulting meeting with us:
          </span>
          <div className="flex gap-2">
            <a
              href="https://calendly.com/hansu/han-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a Meeting
            </a>
            <a
              href="https://doc.voce.chat/en-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-white text-gray-700 hover:bg-gray-25/80"
            >
              View Doc
            </a>
          </div>
        </div>
      </section>
      {showPlayer && (
        <Modal>
          <YoutubePlayer
            closePlayer={() => {
              setShowPlayer(false);
            }}
          />
        </Modal>
      )}
    </>
  );
};

export default Deploy;
