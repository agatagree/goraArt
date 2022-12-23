import { BrowserRouter } from "react-router-dom";
import { AppRouts } from "routes/AppRouts";
import { Header, Footer } from "components/layout/Navigation";
import { FilterProvider } from "providers/FilterProvider";
import styles from "./App.module.scss";
import "styles/global.scss";

export const App = () => {
  return (
    <FilterProvider>
      <BrowserRouter>
        <div className={styles.layout}>
          <Header />
          <AppRouts />
          <Footer />
        </div>
      </BrowserRouter>
    </FilterProvider>
  );
};
