"use client";
import React, { useState } from "react";
import { InlineWidget } from "react-calendly";
import { useTranslations } from "next-intl";
import Modal from "./Modal";
import Eyebrow from "./Eyebrow";
const Booking = () => {
  const t = useTranslations("home.booking");
  const [opened, setOpened] = useState(false);
  const handleCloseModal = () => {
    setOpened(false);
  };
  return (
    <section className="relative flex flex-col items-center overflow-hidden py-28">
      {/* soft backdrop glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[880px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(34,204,238,0.1),transparent)]"
      />
      <Eyebrow className="mb-5">{t("eyebrow")}</Eyebrow>
      <h2 className="font-semibold text-4xl sm:text-5xl md:text-4xl tracking-tight text-gray-900 w-[768px] sm:w-[80%] md:w-[768px] text-center ">
        {t("headingLine1")}
        <br />
        {t("headingLine2")}
      </h2>
      <p className="mx-4 mt-5 mb-10 max-w-3xl text-center text-xl text-gray-500">{t("subtitle")}</p>
      <button type="button" onClick={() => setOpened(true)} className="btn-primary-large relative">
        {t("submit")}
      </button>
      {opened && (
        // @ts-ignore
        <Modal>
          <div className="sm:w-full md:w-[600px] relative">
            <InlineWidget url="https://calendly.com/hansu" />
            <button
              onClick={handleCloseModal}
              className="btn-primary-small absolute -bottom-20 left-[50%] translate-x-[-50%]"
            >
              {t("close")}
            </button>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Booking;
