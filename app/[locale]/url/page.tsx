/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import CopyToClipboard from "../../../components/CopyToClipboard";
import { useTranslations } from "next-intl";
import useDownload from "../../../hooks/useDownload";

export const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

export default function Url() {
  const t = useTranslations("download");
  const [webLink, setWebLink] = useState("");
  const [copied, setCopied] = useState(false);
  const searchParams = useSearchParams();
  const download = useDownload();
  const server_url = searchParams.get("s") ?? "";
  const invitation_link = searchParams.get("i") ?? "";
  const link_type = server_url ? "server" : invitation_link ? "invite" : "";
  const link = invitation_link || server_url;
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  useEffect(() => {
    if (!isMobile() && link) {
      const rLink = decodeURIComponent(link);
      location.href = rLink;
    }
  }, [link]);

  useEffect(() => {
    const initInviteLink = (link: string) => {
      try {
        const dLink = decodeURIComponent(link);
        setWebLink(`${dLink}&ctx=web`);
      } catch (error) {
        console.error("parse web link error");
      }
    };
    if (link) {
      if (link_type === "invite") {
        initInviteLink(link);
      }
    }
  }, [link, link_type]);
  const app_link = `vocechat://i?magic_link=${encodeURIComponent(link)}`;

  return (
    <main className="flex h-screen flex-col items-center justify-between">
      <div className="relative">
        <img src="/img/app.grid.png" className="object-cover max-w-[unset]" alt="APP grid" />
        <span className="absolute left-1/2 bottom-8 -translate-x-1/2 bg-transparent font-bold text-lg ">
          {t("join")}!
        </span>
      </div>

      <p className="text-md text-gray-600 mt-10">
        {t("have_already")}{" "}
        <a href={app_link} className="text-blueLight-600">
          {t("open")}
        </a>{" "}
      </p>
      <div className="flex flex-col items-center mb-12">
        {webLink && (
          <a href={webLink} className="p-2 mt-2 rounded bg-primary-500 text-white">
            Continue with webapp
          </a>
        )}
        {link && (
          <div className="text-gray-600 text-center w-[80%] flex flex-col gap-2 mt-2">
            <i className="text-gray-400 not-italic text-xs break-words">
              👇App not showing? You may copy the following invitation link and paste it into
              VoceChat App.
            </i>
            <div
              className="text-left bg-gray-200 font-bold p-2 rounded-md break-all overflow-y-scroll resize-none"
              spellCheck={false}
            >
              {link}
            </div>
            <CopyToClipboard text={link} onCopy={handleCopy}>
              <button className="btn-primary">{copied ? "Copied" : `Copy`}</button>
            </CopyToClipboard>
          </div>
        )}
        {download ? (
          Array.isArray(download) ? (
            <ul className="my-10">
              {" "}
              {download.map((d) => {
                const { link, icon } = d;
                return (
                  <li key={link}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <img
                        alt="App Download Icon"
                        src={icon}
                        className="max-w-[80%] h-auto m-auto mb-2"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          ) : (
            <a href={download.link} target="_blank" rel="noopener noreferrer" className="my-10">
              <img
                alt="App Download Icon"
                src={download.icon}
                className="max-w-[80%] h-auto m-auto"
              />
            </a>
          )
        ) : null}
      </div>
    </main>
  );
}
