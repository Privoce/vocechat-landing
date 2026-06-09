import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Handles locale detection (cookie + Accept-Language) and prefixing,
// replacing the previous hand-written zh-CN redirect logic.
export default createMiddleware(routing);

export const config = {
  // Skip Next internals, API routes and anything with a file extension.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"]
};
