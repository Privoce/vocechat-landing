"use client"
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  id?: string;
  children?: ReactNode;
}

const Modal = ({ id = "root_modal", children }: Props) => {
  const [root, setRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const modalRoot = document.getElementById(id);
    setRoot(modalRoot);
  }, [id]);

  if (!root) return null;
  return createPortal(
    <div className="flex items-center justify-center bg-gray-900/50 pointer-events-auto w-screen h-screen ">
      {children}
    </div>,
    root
  );
};

export default Modal;
