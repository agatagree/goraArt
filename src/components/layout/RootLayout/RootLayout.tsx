import { I18nextProvider } from "react-i18next";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../Navigation";
import { useGetTranslations } from "hooks/useGetTranslations";
import i18next from "i18next";
import { ConditionalScrollRestoration } from "pages/HomePage/utils/conditionalScrollRestoration";
import { FilterProvider } from "providers/FilterProvider";
import styles from "./RootLayout.module.scss";

export const RootLayout = () => {
  useGetTranslations();

  return (
    <div className={styles.layout}>
      <I18nextProvider i18n={i18next}>
        <ConditionalScrollRestoration />
        <FilterProvider>
          <Header />
          <div className={styles.contentWrapper}>
            <Outlet />
          </div>
        </FilterProvider>
      </I18nextProvider>
      <Footer />
    </div>
  );
};
