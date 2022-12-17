import { Route, Routes } from "react-router-dom";
import { MessagePage } from "components/layout/MessagePage";
import { AboutPage } from "pages/AboutPage";
import { ForgotPasswordPage, SignUpPage } from "pages/Authorization";
import { ContactPage } from "pages/ContactPage";
import { GalleryPage } from "pages/GalleryPage";
import { HomePage } from "pages/HomePage";
import { SingleArtPage } from "pages/SingleArtPage";
import styles from "./AppRouts.module.scss";

export const AppRouts = () => {
  return (
    <div className={styles.content}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery/:id" element={<SingleArtPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
        <Route path="*" element={<MessagePage message={"pageNotFound"} />} />
      </Routes>
    </div>
  );
};
