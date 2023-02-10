import { useState, useEffect } from "react";
import { initReactI18next } from "react-i18next";
import { onSnapshot } from "firebase/firestore";
import { getDataFromSnapshot, translationCollection } from "api";
import translationEnglish from "locales/en/static.json";
import translationPolish from "locales/pl/static.json";
import i18n from "i18next";

const GetTranslations = () => {
  const [translation, setTranslation] = useState<any[]>([]);

  useEffect(() => {
    onSnapshot(translationCollection, (data) => {
      setTranslation(getDataFromSnapshot(data));
    });
  }, [i18n.language]);

  return translation;
};

export const resources = {
  en: {
    static: translationEnglish,
    tags: GetTranslations()[0]?.EN,
  },
  pl: {
    static: translationPolish,
    tags: GetTranslations()[0]?.PL,
  },
};