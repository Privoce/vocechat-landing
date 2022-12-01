import 'i18next';
import type common from './public/locales/en/common.json';
import type download from './public/locales/en/download.json';


const resources = {
  en: {
    common,
    download
  },
} as const;

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: typeof resources['en'];
  }
}

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: typeof resources['en'];
  }
}
