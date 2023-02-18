import { Route, Routes } from "react-router-dom";
import { MessagePage } from "components/layout/MessagePage";
import {
  AboutPage,
  ContactPage,
  GalleryPage,
  HomePage,
  SingleArtPage,
  LoginPage,
  AdminPage
} from "pages";
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/adminPage" element={<AdminPage />} />
        <Route path="*" element={<MessagePage message={"pageNotFound"} />} />
      </Routes>
    </div>
  );
};
