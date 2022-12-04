const path = require("path");
/** @type import("next").I18NConfig */
const i18n = {
  localeDetection: true,
  defaultLocale: "en",
  locales: ["en", "zh-CN"]
};
/** @type import("next-i18next").UserConfig */
module.exports = {
  i18n,
  localePath: path.resolve("./public/locales"),
  fallbackLng: {
    default: ["en"],
    "zh-SG": ["zh-CN"],
    "zh-HK": ["zh-CN"]
  }
};
