import React, { ReactNode } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Eyebrow from "./Eyebrow";
const Cell = ({
  type = "check",
  highlight = false,
  children
}: {
  type?: "title" | "check" | "none";
  highlight?: boolean;
  children?: ReactNode;
}) => {
  return (
    <td
      align={type === "title" ? "left" : "center"}
      className={`w-60 xl:w-50 sm:w-10 px-6 py-5 text-md ${
        highlight ? "font-semibold text-primary-800" : "text-gray-400"
      } ${type === "title" ? "sticky left-0 z-10 bg-inherit" : ""}`}
    >
      {type == "check" ? (
        <Image
          width={24}
          height={24}
          className="w-6 h-6"
          src={"/img/check.svg"}
          alt="Supported"
        ></Image>
      ) : type === "title" ? (
        children
      ) : (
        <span className="text-gray-300">—</span>
      )}
    </td>
  );
};
const HeaderCell = ({ isFirst = false, children }: { isFirst?: boolean; children: ReactNode }) => {
  return (
    <td
      align={isFirst ? "left" : "center"}
      className={`w-60 xl:w-50 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-gray-500 ${
        isFirst ? "sticky left-0 z-10 bg-gray-50" : ""
      }`}
    >
      {children}
    </td>
  );
};

type Row = {
  name: string;
  privateApi: boolean;
  openSource: boolean;
  mobile: boolean;
  lightweight: boolean;
};

const ROWS: Row[] = [
  { name: "VoceChat", privateApi: true, openSource: true, mobile: true, lightweight: true },
  { name: "Matrix", privateApi: true, openSource: true, mobile: true, lightweight: false },
  { name: "XMPP", privateApi: true, openSource: true, mobile: true, lightweight: false },
  { name: "Rocketchat", privateApi: true, openSource: true, mobile: true, lightweight: false },
  { name: "Mattermost", privateApi: true, openSource: true, mobile: true, lightweight: false },
  { name: "Signal", privateApi: false, openSource: true, mobile: true, lightweight: false },
  { name: "Telegram", privateApi: false, openSource: true, mobile: true, lightweight: false },
  { name: "Discord", privateApi: false, openSource: false, mobile: true, lightweight: false },
  { name: "Whatsapp", privateApi: false, openSource: false, mobile: true, lightweight: false },
  { name: "Line", privateApi: false, openSource: false, mobile: true, lightweight: false },
  { name: "Slack", privateApi: false, openSource: false, mobile: true, lightweight: false },
  { name: "Wechat", privateApi: false, openSource: false, mobile: true, lightweight: false }
];

function Compare() {
  const t = useTranslations("home.compare");
  return (
    <section
      id="compare"
      className="relative flex scroll-mt-20 flex-col items-center overflow-hidden bg-gray-50 py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
      />
      <Eyebrow className="mb-5">{t("eyebrow")}</Eyebrow>
      <h2 className="mx-4 mb-14 max-w-4xl text-center text-5xl font-semibold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
        {t("heading")}
      </h2>
      <div className="w-[95%] max-w-6xl overflow-auto rounded-2xl border border-gray-200 bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04),0_16px_48px_-12px_rgba(16,24,40,0.1)] md:w-fit">
        <table className="table m-auto">
          <thead className="border-solid border-b border-gray-200 bg-gray-50">
            <tr>
              <HeaderCell isFirst={true}>{t("colProducts")}</HeaderCell>
              <HeaderCell>{t("colPrivateApi")}</HeaderCell>
              <HeaderCell>{t("colOpenSource")}</HeaderCell>
              <HeaderCell>{t("colMobile")}</HeaderCell>
              <HeaderCell>{t("colLightweight")}</HeaderCell>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {ROWS.map((row) => {
              const isVoce = row.name === "VoceChat";
              return (
                <tr
                  key={row.name}
                  className={isVoce ? "bg-primary-25" : "odd:bg-gray-50 even:bg-white"}
                >
                  <Cell type="title" highlight={isVoce}>
                    {row.name}
                  </Cell>
                  <Cell type={row.privateApi ? "check" : "none"} />
                  <Cell type={row.openSource ? "check" : "none"} />
                  <Cell type={row.mobile ? "check" : "none"} />
                  <Cell type={row.lightweight ? "check" : "none"} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Compare;
