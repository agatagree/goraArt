import { Suspense, useEffect } from "react";
import { I18nextProvider, initReactI18next } from "react-i18next";
import "react-loading-skeleton/dist/skeleton.css";
import { BrowserRouter } from "react-router-dom";
import translationEnglish from "locales/en/static.json";
import translationPolish from "locales/pl/static.json";
import { AppRouts } from "routes/AppRouts";
import { Loader } from "components/common";
import { Header, Footer } from "components/layout/Navigation";
import { useGetTranslations } from "hooks/useGetTranslations";
import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { FilterProvider } from "providers/FilterProvider";
import styles from "./App.module.scss";
import "styles/global.scss";

export const App = () => {
  const { translation } = useGetTranslations();

  useEffect(() => {
    const resources = {
      en: {
        static: translationEnglish,
        dynamic: translation[0] && translation[0].EN,
      },
      pl: {
        static: translationPolish,
        dynamic: translation[0] && translation[0].PL,
      },
    };

    i18n
      .use(detector)
      .use(initReactI18next)
      .init({
        resources,
        defaultNS: "static",
        lng: "pl",
        fallbackLng: "en",
        interpolation: {
          escapeValue: false,
        },
      });
  }, [translation]);

  return (
    <Suspense fallback={<Loader />}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <div className={styles.layout}>
            <FilterProvider>
              <Header />
              <AppRouts />
            </FilterProvider>
            <Footer />
          </div>
        </BrowserRouter>
      </I18nextProvider>
    </Suspense>
  );
};
