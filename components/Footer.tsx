import React from "react";
import Image from "next/future/image";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-800 py-12 px-28 flex justify-between sm:px-10 md:px-28">
      <span className="text-md text-gray-400">© 2022 Privoce Inc. All rights reserved.</span>
      <ul className="flex gap-6">
        <li>
          <a href="https://twitter.com/Privoce1" target="_blank" rel="noopener noreferrer">
            <Image
              width={24}
              height={24}
              className="w-6 h-6"
              alt="Social Icon"
              src={"/img/icon.twitter.svg"}
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/Privoce" target="_blank" rel="noopener noreferrer">
            <Image
              width={24}
              height={24}
              className="w-6 h-6"
              alt="Social Icon"
              src={"/img/icon.github.svg"}
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
