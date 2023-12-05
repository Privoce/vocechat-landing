import { useRouter } from "next/router";
import React, { useState, MouseEvent } from "react";
import Image from "next/image";
import CopyToClipboard from "react-copy-to-clipboard";
import Head from "../components/Head";
import useDownload from "../hooks/useDownload";
type Props = {};

const Index = (props: Props) => {
  const router = useRouter()
  const link = decodeURIComponent(router.query.s as string ?? "")
  const [copied, setCopied] = useState(false);
  const download = useDownload()
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  const handleTextareaClick = (evt: MouseEvent<HTMLTextAreaElement>) => {
    const ele = evt.currentTarget;
    ele.select()
  }
  return (
    <>
      <Head />
      <main className="flex min-h-screen flex-col items-center justify-center bg-primary-50">
        <ul className="flex flex-col justify-center items-center p-4 pt-2">
          <li className="mb-1 text-2xl font-bold">Open APP to login</li>
          <div className="overflow-hidden w-[60%]">
            <Image
              width={412}
              height={817}
              className="w-full h-auto"
              src={"/img/login.preview.png"}
              alt="login image"
            ></Image>
          </div>
          {link && <li className="text-gray-600 text-center w-full flex flex-col gap-2 mt-2">
            <i className="text-gray-400 not-italic text-xs break-words">👇 App not showing? You may copy the following link and paste it into VoceChat App.</i>
            <textarea onClick={handleTextareaClick} readOnly value={link} className="bg-gray-200 font-bold p-2 rounded-md break-all" spellCheck={false}>
            </textarea>
            <CopyToClipboard text={link} onCopy={handleCopy} >
              <button
                className="btn-primary"
              >
                {copied ? "Copied" : `Copy`}
              </button>
            </CopyToClipboard>
          </li>}
        </ul>
        <div className="flex flex-col items-center mb-6">
          {/* <h1 className="mobile:text-xl tablet:text-2xl font-bold text-center">{t("start_download")}</h1> */}
          {download ? Array.isArray(download) ? <ul className="my-10"> {download.map(d => {
            const { link, icon } = d
            return <li key={link}><a href={link} target="_blank" rel="noopener noreferrer" >
              <img alt="App Download Icon" src={icon} className="max-w-[80%] h-auto m-auto mb-2" />
            </a></li>
          })}</ul> : <a href={download.link} target="_blank" rel="noopener noreferrer">
            <img alt="App Download Icon" src={download.icon} className="max-w-[80%] h-auto m-auto" />
          </a> : null}
        </div>
      </main>
    </>
  );
};

export default Index;
