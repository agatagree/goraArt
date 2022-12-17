import { BrowserRouter } from "react-router-dom";
import { AppRouts } from "routes/AppRouts";
import { Footer } from "components/layout/Navigation/Footer";
import { Header } from "components/layout/Navigation/Header";
import styles from "./App.module.scss";
import "styles/global.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className={styles.layout}>
          <Header />
          <AppRouts />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
