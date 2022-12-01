import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from './next-i18next.config';

export function getTranslationProps(locale?: string) {
    return serverSideTranslations(
        locale || nextI18NextConfig.i18n.defaultLocale,
        ['common', "download"],
        nextI18NextConfig
    );
}
