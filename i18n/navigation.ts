import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware drop-in replacements for next/navigation APIs.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
