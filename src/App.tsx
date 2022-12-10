import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./views/HomePage/HomePage";
import { Footer } from "./components/layout/Navigation/Footer/Footer";
// import { GalleryPage } from "./views/GalleryPage/GalleryPage";
import { SingleArtPage } from "./views/GalleryPage/SingleArtPage/SingleArtPage";
// import { AboutPage } from "./views/AboutPage/AboutPage";
// import { ContactPage } from "./views/ContactPage/ContactPage";
import { MessagePage } from "./components/layout/MessagePage/MessagePage";
import { Header } from "./components/layout/Navigation/Header/Header";
// import { SignUpPage } from "./views/Authorization/SignUpPage/SignUpPage";
import { ForgotPasswordPage } from "./views/Authorization/ForgotPasswordPage/ForgotPasswordPage";
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
              {/* <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/gallery/:id" element={<SingleArtPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/signUp" element={<SignUpPage />} />
              <Route path="/forgotPassword" element={<ForgotPasswordPage />} /> */}
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
