import { createContext, useState, ReactNode, useEffect } from "react";
import { useTranslation, initReactI18next } from "react-i18next";
import { onSnapshot } from "firebase/firestore";
import { getDataFromSnapshot, translationCollection } from "api";
import translationEnglish from "locales/en/static.json";
import translationPolish from "locales/pl/static.json";
import { Loader } from "components/common";
import { TranslationTypes } from "utils/Types";
import i18n from "i18next";


type LanguageContextType = {
  language: "PL" | "EN";
  setLanguage: (newLanguage: "PL" | "EN") => void;
  staticText: TranslationType | null;
  translation: TranslationTypes[] | null;
  resources: any;
};

type TranslationType = any;

const initialState: LanguageContextType = {
  language: "PL",
  setLanguage: () => {},
  staticText: [],
  translation: [],
  resources: null,
};

export const LanguageContext = createContext<LanguageContextType>(initialState);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<"PL" | "EN">("PL");
  const [staticText, setStaticText] = useState<TranslationType | null>(null);
  const [translation, setTranslation] = useState<any[]>([]);

  useEffect(() => {
    onSnapshot(translationCollection, (data) => {
      setTranslation(getDataFromSnapshot(data));
    });
  }, [i18n.language]);

  const resources = {
    en: {
      static: translationEnglish,
      tags: translation[0].EN,
    },
    pl: {
      static: translationPolish,
      tags: translation[0].PL,
    },
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, staticText, translation, resources }}
    >
      {translation ? children : <Loader />}
    </LanguageContext.Provider>
  );
};
