import { useState, useEffect } from "react";
import { initReactI18next } from "react-i18next";
import { onSnapshot } from "firebase/firestore";
import { getDataFromSnapshot, translationCollection } from "api";
import translationEnglish from "locales/en/static.json";
import translationPolish from "locales/pl/static.json";
// import { resources } from "utils/GetTranslations";
import i18n from "i18next";

// const GetTranslations = () => {
//   const [translation, setTranslation] = useState<any[]>([]);

//   useEffect(() => {
//     onSnapshot(translationCollection, (data) => {
//       setTranslation(getDataFromSnapshot(data));
//     });
//   }, [i18n.language]);

//   const resources = {
//     en: {
//       static: translationEnglish,
//       tags: translation[0]?.EN || {},
//     },
//     pl: {
//       static: translationPolish,
//       tags: translation[0]?.PL || {},
//     },
//   };

//   return resources;
// };

export const resources = {
  en: {
    static: translationEnglish,
  },
  pl: {
    static: translationPolish,
  },
};

i18n.use(initReactI18next).init({
  resources,
  defaultNS: "static",
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
