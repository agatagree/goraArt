import { useState, useEffect } from "react";
import { initReactI18next } from "react-i18next";
import { onSnapshot } from "firebase/firestore";
import { getDataFromSnapshot, translationCollection } from "api";
import i18next from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";

export const useGetTranslations = () => {
  const [translation, setTranslation] = useState<{ [key: string]: string }[]>(
    []
  );

  useEffect(() => {
    onSnapshot(translationCollection, (data) => {
      setTranslation(getDataFromSnapshot(data));
    });
  }, []);

  i18next.use(detector).use(initReactI18next).use(backend).init({
    defaultNS: "static",
    lng: "pl",
    fallbackLng: "en",
  });
  i18next.addResourceBundle(
    "en",
    "dynamic",
    translation[0] && translation[0].EN
  );
  i18next.addResourceBundle(
    "pl",
    "dynamic",
    translation[0] && translation[0].PL
  );

  return { i18next };
};
