import "react-loading-skeleton/dist/skeleton.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MessagePage, RootLayout } from "components/layout";
import "./i18n";
import { GalleryPage, HomePage } from "pages";
import { GalleryListPage, SingleArtPage } from "pages/GalleryPage";
import "styles/global.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <MessagePage message={"pageNotFound"} />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
        children: [
          {
            path: "/gallery",
            element: <GalleryListPage />,
          },
          {
            path: "/gallery/:id",
            element: <SingleArtPage />,
          },
        ],
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
