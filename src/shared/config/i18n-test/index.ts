import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const defaultLanguage = 'ru';

i18n.use(initReactI18next).init({
  lng: defaultLanguage,
  fallbackLng: defaultLanguage,
  debug: false,
  resources: { ru: { translations: {} } },
});

export default i18n;
