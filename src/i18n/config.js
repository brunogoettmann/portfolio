import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { CONSTANTS } from "../utils";

i18n.use(initReactI18next).init({
  ns: ["translations"],
  defaultNS: "translations",
  lng: CONSTANTS.LANGUAGE.DEFAULT,
  fallbackLng: CONSTANTS.LANGUAGE.DEFAULT,
  resources: {
    en: {
      translations: require("./locales/en.json"),
    },
    "pt-BR": {
      translations: require("./locales/pt-BR.json"),
    },
  },
});

i18n.languages = [CONSTANTS.LANGUAGE.ENGLISH, CONSTANTS.LANGUAGE.PORTUGUESE_BR];

export default i18n;
