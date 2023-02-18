import { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import "react-loading-skeleton/dist/skeleton.css";
import { BrowserRouter } from "react-router-dom";
import { AppRouts } from "routes/AppRouts";
import { Loader } from "components/common";
import { Header, Footer } from "components/layout/Navigation";
import { useGetTranslations } from "hooks/useGetTranslations";
import { FilterProvider } from "providers/FilterProvider";
import styles from "./App.module.scss";
import "styles/global.scss";

export const App = () => {
  const { i18next } = useGetTranslations();

  return (
    <Suspense fallback={<Loader />}>
      <I18nextProvider i18n={i18next}>
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
