import { createContext, useState, ReactNode, useEffect } from "react";
import { Loader } from "components/common";
import { TranslationTypes } from "utils/Types";
import { onSnapshot } from "firebase/firestore";
import { getDataFromSnapshot, translationCollection } from "api";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {},
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

type LanguageContextType = {
  language: "PL" | "EN";
  setLanguage: (newLanguage: "PL" | "EN") => void;
  staticText: TranslationType | null;
  translation : TranslationTypes[] | null;
};

type TranslationType = any;

const initialState: LanguageContextType = {
  language: "PL",
  setLanguage: () => {},
  staticText: [],
  translation: [],
};

export const LanguageContext = createContext<LanguageContextType>(initialState);


export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<"PL" | "EN">("PL");
  const [staticText, setStaticText] = useState<TranslationType | null>(null);
  const [translationLoad, setTranslationLoad] = useState(false);
  const [translation, setTranslation] = useState<TranslationTypes[]>([]);

  const fetchTranslations = (newLanguage: "PL" | "EN") => {
    return new Promise((resolve, reject) => {
      const path = `translations/${language}.json`;
      fetch(path)
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
          setStaticText(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  useEffect(() => {
    fetchTranslations(language);
    i18n.changeLanguage(language);
    onSnapshot(translationCollection, (data) => {
      setTranslation(getDataFromSnapshot(data));
    });
  }, [language, i18n]);

  console.log(typeof translation)

  return (
    <LanguageContext.Provider value={{ language, setLanguage, staticText, translation }}>
      {staticText&&translation ? children : <Loader />}
    </LanguageContext.Provider>
  );
};
