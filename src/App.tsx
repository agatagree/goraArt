import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const metaDescription = t("common.description");
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{t("common.title")}</title>
          <link rel="canonical" href="https://wgora.com/" />
          <meta name="description" content={metaDescription} />
        </Helmet>
        <RouterProvider router={router} />;
      </HelmetProvider>
    </>
  );
};
