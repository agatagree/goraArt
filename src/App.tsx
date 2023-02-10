import { I18nextProvider } from "react-i18next";
import { initReactI18next } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import translationEnglish from "locales/en/static.json";
import translationPolish from "locales/pl/static.json";
import { AppRouts } from "routes/AppRouts";
import { Header, Footer } from "components/layout/Navigation";
import { useGetTranslations } from "hooks/useGetTranslations";
import i18n from "i18next";
import { FilterProvider } from "providers/FilterProvider";
import styles from "./App.module.scss";
import "styles/global.scss";

export const App = () => {
  const { translation } = useGetTranslations();

  const resources = {
    en: {
      static: translationEnglish,
      dynamic: translation[0]?.EN,
    },
    pl: {
      static: translationPolish,
      dynamic: translation[0]?.PL,
    },
  };

  i18n.use(initReactI18next).init({
    resources,
    defaultNS: "static",
    lng: "pl",
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
