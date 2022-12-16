import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "pages/HomePage";
import { Footer } from "components/layout/Navigation/Footer";
import { GalleryPage } from "pages/GalleryPage";
import { SingleArtPage } from "pages/SingleArtPage";
import { AboutPage } from "pages/AboutPage";
import { ContactPage } from "pages/ContactPage";
import { MessagePage } from "components/layout/MessagePage";
import { Header } from "components/layout/Navigation/Header";
import { SignUpPage, ForgotPasswordPage } from "pages/Authorization";
import "styles/global.scss";
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className={styles.layout}>
          <Header />
          <div className={styles.content}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/gallery/:id" element={<SingleArtPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/signUp" element={<SignUpPage />} />
              <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
              <Route
                path="*"
                element={<MessagePage message={"pageNotFound"} />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
