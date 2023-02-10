import { useState, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import { initReactI18next } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { onSnapshot } from "firebase/firestore";
import { getDataFromSnapshot, translationCollection } from "api";
import translationEnglish from "locales/en/static.json";
import translationPolish from "locales/pl/static.json";
import { AppRouts } from "routes/AppRouts";
import { Header, Footer } from "components/layout/Navigation";
import i18n from "i18next";
// import i18n from "---ccc---i18n";
import { FilterProvider } from "providers/FilterProvider";
import styles from "./App.module.scss";
import "styles/global.scss";

export const App = () => {
  const [translation, setTranslation] = useState<any[]>([]);

  useEffect(() => {
    onSnapshot(translationCollection, (data) => {
      setTranslation(getDataFromSnapshot(data));
    });
  }, [i18n.language]);

  const resources = {
    en: {
      static: translationEnglish,
      tags: translation[0]?.EN,
    },
    pl: {
      static: translationPolish,
      tags: translation[0]?.PL,
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

  return (
    <I18nextProvider i18n={i18n}>
      <FilterProvider>
        <BrowserRouter>
          <div className={styles.layout}>
            <Header />
            <AppRouts />
            <Footer />
          </div>
        </BrowserRouter>
      </FilterProvider>
    </I18nextProvider>
  );
};
