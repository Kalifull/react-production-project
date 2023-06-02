import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const defaultLanguage = 'ru';

const i18nStorybook = i18n.createInstance();

i18nStorybook
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: defaultLanguage,
    fallbackLng: defaultLanguage,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18nStorybook;
