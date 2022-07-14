import React from "react";
import Image from "next/future/image";
type Props = {
  size?: "large" | "small" | "normal";
  type?: "link" | "button";
  text: string;
  link?: string;
  icon?: string;
  bg?: string;
  color?: string;
};
const Sizes = {
  normal: "px-5 py-3 sm:text-lg md:text-md",
  large: "px-7 py-4 sm:text-xl md:text-lg",
  small: "px-4 py-2 sm:text-md md:text-sm"
};
const Button = ({
  size = "normal",
  type = "button",
  text,
  link,
  icon,
  bg = "bg-primary-400",
  color = "text-gray-25"
}: Props) => {
  const classNames = `${color} ${bg} ${Sizes[size]} font-medium rounded-lg  shadow-[0_1px_2px_rgba(16,24,40,0.05)] flex gap-3 items-center cursor-pointer hover:bg-primary-400/80`;
  const Icon = icon ? <Image className="w-6 h-6" src={icon} alt="button icon" /> : null;
  return type == "button" ? (
    <button className={classNames}>
      {Icon}
      {text}
    </button>
  ) : (
    <a className={classNames} href={link} target="_blank" rel="noopener noreferrer">
      {Icon}
      {text}
    </a>
  );
};

export default Button;
