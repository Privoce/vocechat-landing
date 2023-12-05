import { useRouter } from "next/router";
import React, { useState } from "react";
import Image from "next/image";
import CopyToClipboard from "react-copy-to-clipboard";
import Head from "../components/Head";
// type Props = {};

const Index = () => {
  const router = useRouter()
  const link = decodeURIComponent(router.query.magic_link as string ?? "")
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <>
      <Head />
      <main className="flex min-h-screen flex-col items-center justify-center bg-primary-50">
        <ul className="flex flex-col justify-center items-center p-4 pt-2">
          <li className="mb-1 text-2xl font-bold">Open APP to join</li>
          <div className="overflow-hidden w-[60%]">
            <Image
              width={412}
              height={817}
              className="w-full h-auto"
              src={"/img/redirecting.png"}
              alt="redirecting image"
            ></Image>
          </div>
          {link && <li className="text-gray-600 text-center w-full flex flex-col gap-2 mt-2">
            <i className="text-gray-400 not-italic text-xs break-words">👇App not showing? You may copy the following invitation link and paste it into VoceChat App.</i>
            <div className="text-left bg-gray-200 font-bold p-2 rounded-md break-all overflow-y-scroll resize-none" spellCheck={false}>
              {link}
            </div>
            <CopyToClipboard text={link} onCopy={handleCopy} >
              <button
                className="btn-primary"
              >
                {copied ? "Copied" : `Copy`}
              </button>
            </CopyToClipboard>
          </li>}
        </ul>

      </main>
    </>
  );
};

export default Index;
