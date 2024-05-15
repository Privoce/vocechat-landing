"use client";
import React, { useState } from "react";

type Props = {};

const WechatButton = ({}: Props) => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible(!visible);
  const handleClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    toggleVisible();
  };
  return (
    <>
      {visible && (
        <aside
          role="button"
          onClick={toggleVisible}
          className="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center"
        >
          <img
            className="w-96 rounded-lg"
            src="/img/qr.contact.jpg"
            alt="wechat contact qr image"
          />
          <span className="text-white -mt-9 rounded-full px-3 py-1 bg-warning-600 text-xs border border-warning-500/50">
            Click anywhere to close
          </span>
        </aside>
      )}
      <a
        onClick={handleClick}
        href="#"
        className="py-2 px-4 rounded-full bg-white hover:opacity-80"
      >
        WeChat
      </a>
    </>
  );
};

export default WechatButton;
