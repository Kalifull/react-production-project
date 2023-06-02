import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const defaultLanguage = 'ru';

const i18nTest = i18n.createInstance();

i18nTest.use(initReactI18next).init({
  lng: defaultLanguage,
  fallbackLng: defaultLanguage,
  debug: false,
  resources: { ru: { translations: {} } },
});

export default i18nTest;
