import { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import "react-loading-skeleton/dist/skeleton.css";
import { BrowserRouter } from "react-router-dom";
import { AppRouts } from "routes/AppRouts";
import { Loader } from "components/common";
import { Header, Footer } from "components/layout/Navigation";
import "./i18n";
import { useGetTranslations } from "hooks/useGetTranslations";
import i18next from "i18next";
import { FilterProvider } from "providers/FilterProvider";
import styles from "./App.module.scss";
import "styles/global.scss";

export const App = () => {
  useGetTranslations();
  console.log('app')

  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <div className={styles.layout}>
          <I18nextProvider i18n={i18next}>
            <FilterProvider>
              <Header />
              <AppRouts />
            </FilterProvider>
          </I18nextProvider>
          <Footer />
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
