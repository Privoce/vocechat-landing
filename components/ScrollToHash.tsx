"use client";

import { useEffect } from "react";

function scrollToHash(hash: string) {
  if (!hash || hash === "#") return false;
  const id = decodeURIComponent(hash.slice(1));
  const target = document.getElementById(id);
  if (!target) return false;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

export default function ScrollToHash() {
  useEffect(() => {
    const run = () => {
      scrollToHash(window.location.hash);
    };

    run();
    const t1 = window.setTimeout(run, 150);
    const t2 = window.setTimeout(run, 600);
    window.addEventListener("hashchange", run);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("hashchange", run);
    };
  }, []);

  return null;
}
