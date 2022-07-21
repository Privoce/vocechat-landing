import React, { ReactNode } from "react";
import Image from "next/future/image";
const Cell = ({
  type = "check",
  children
}: {
  type?: "title" | "check" | "none";
  children?: ReactNode;
}) => {
  return (
    <td
      align={type === "title" ? "left" : "center"}
      className="w-60 text-gray-400 xl:w-50 sm:w-10 px-6 py-5 text-md"
    >
      {type == "check" ? (
        <Image
          width={24}
          height={24}
          className="w-6 h-6"
          src={"/img/check.svg"}
          alt="check icon"
        ></Image>
      ) : type === "title" ? (
        children
      ) : (
        "-"
      )}
    </td>
  );
};
const HeaderCell = ({ isFirst = false, children }: { isFirst?: boolean; children: ReactNode }) => {
  return (
    <td align={isFirst ? "left" : "center"} className="w-60 xl:w-50 px-6 py-5 font-bold text-md ">
      {children}
    </td>
  );
};
type Props = {};

function Compare({}: Props) {
  return (
    <section className="flex flex-col items-center pt-24">
      <h2 className="font-semibold text-5xl text-gray-900 mb-24 text-center">
        Compare our tool with others
      </h2>
      <div className="pb-24 border-b border-gray-200 md:w-fit sm:w-full overflow-auto">
        <table className="table border-b m-auto">
          <thead className="border-solid border-b border-gray-200">
            <tr>
              <HeaderCell isFirst={true}>Products</HeaderCell>
              <HeaderCell>Security & Privacy</HeaderCell>
              <HeaderCell>Open Source</HeaderCell>
              <HeaderCell>Mobile App</HeaderCell>
              <HeaderCell>Private Hosting</HeaderCell>
            </tr>
          </thead>
          <tbody className="[&_tr:nth-child(odd)]:bg-gray-50">
            <tr>
              <Cell type="title">VoceChat</Cell>
              <Cell />
              <Cell />
              <Cell />
              <Cell />
            </tr>
            <tr>
              <Cell type="title">Maxtrix</Cell>
              <Cell />
              <Cell />
              <Cell />
              <Cell />
            </tr>
            <tr>
              <Cell type="title">XMPP</Cell>
              <Cell />
              <Cell />
              <Cell />
              <Cell type="none" />
            </tr>
            <tr>
              <Cell type="title">Rocketchat</Cell>
              <Cell />
              <Cell />
              <Cell />
              <Cell />
            </tr>
            <tr>
              <Cell type="title">Mattermost</Cell>
              <Cell />
              <Cell />
              <Cell />
              <Cell />
            </tr>
            <tr>
              <Cell type="title">Signal</Cell>
              <Cell />
              <Cell type="none" />
              <Cell />
              <Cell type="none" />
            </tr>
            <tr>
              <Cell type="title">Telegram</Cell>
              <Cell />
              <Cell />
              <Cell />
              <Cell type="none" />
            </tr>
            <tr>
              <Cell type="title">Discord</Cell>
              <Cell />
              <Cell />
              <Cell />
              <Cell type="none" />
            </tr>
            <tr>
              <Cell type="title">Whatsapp</Cell>
              <Cell />
              <Cell type="none" />
              <Cell />
              <Cell type="none" />
            </tr>
            <tr>
              <Cell type="title">Line</Cell>
              <Cell />
              <Cell type="none" />
              <Cell />
              <Cell type="none" />
            </tr>
            <tr>
              <Cell type="title">Slack</Cell>
              <Cell />
              <Cell type="none" />
              <Cell />
              <Cell type="none" />
            </tr>
            <tr>
              <Cell type="title">Wechat</Cell>
              <Cell />
              <Cell type="none" />
              <Cell />
              <Cell type="none" />
            </tr>
            <tr>
              <Cell type="title">MSN</Cell>
              <Cell />
              <Cell type="none" />
              <Cell type="none" />
              <Cell type="none" />
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Compare;
