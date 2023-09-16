import { Route, Routes } from "react-router-dom";
import { MessagePage } from "components/layout/MessagePage";
import { GalleryPage, HomePage, SingleArtPage } from "pages";
import styles from "./AppRouts.module.scss";

export const AppRouts = () => {
  return (
    <div className={styles.layout}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery/:id" element={<SingleArtPage />} />
        <Route path="*" element={<MessagePage message={"pageNotFound"} />} />
      </Routes>
    </div>
  );
};
