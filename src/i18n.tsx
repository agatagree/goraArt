import { initReactI18next } from "react-i18next";
import i18next from "i18next";
import detector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18next.use(detector).use(initReactI18next).use(Backend).init({
  defaultNS: "static",
  lng: "pl",
  fallbackLng: "en",
});

export default i18next;