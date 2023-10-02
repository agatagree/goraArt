import { Outlet } from "react-router-dom";
import { GalleryProvider } from "providers/GalleryProvider";

export const GalleryPage = () => {
  return (
    <GalleryProvider>
      <Outlet />
    </GalleryProvider>
  );
};
