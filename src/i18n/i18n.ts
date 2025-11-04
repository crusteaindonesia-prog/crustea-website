import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en.json";
import id from "./id.json";

i18n
  .use(LanguageDetector) // ini opsional tapi sangat direkomendasikan
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      id: { translation: id }, // gunakan "id" untuk bahasa Indonesia
      // support legacy/alternate code 'in' (some parts of the app use 'in')
      in: { translation: id },
    },
    lng: "en", // default
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
