"use client";
import {
  Children,
  cloneElement,
  isValidElement,
  type MouseEvent,
  type ReactElement,
  type ReactNode
} from "react";

interface Props {
  text: string;
  onCopy?: () => void;
  children: ReactNode;
}

/**
 * Drop-in replacement for the (unmaintained) `react-copy-to-clipboard`,
 * backed by the native Clipboard API. Wraps a single child and copies
 * `text` to the clipboard on click, then invokes `onCopy`.
 */
export default function CopyToClipboard({ text, onCopy, children }: Props) {
  const child = Children.only(children);
  if (!isValidElement(child)) return <>{children}</>;
  const element = child as ReactElement<{ onClick?: (e: MouseEvent) => void }>;

  const handleClick = async (e: MouseEvent) => {
    element.props.onClick?.(e);
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Clipboard may be unavailable (insecure context); fail silently.
    }
    onCopy?.();
  };

  return cloneElement(element, { onClick: handleClick });
}
