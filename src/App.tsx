import "react-loading-skeleton/dist/skeleton.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { MessagePage } from "components/layout";
import { RootLayout } from "components/layout";
import "./i18n";
import { GalleryPage, HomePage, SingleArtPage } from "pages";
import "styles/global.scss";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/gallery/:id" element={<SingleArtPage />} />
      <Route path="*" element={<MessagePage message={"pageNotFound"} />} />
    </Route>
  )
);

export const App = () => {
  return <RouterProvider router={router} />;
};
