import { Route, Routes, BrowserRouter } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import { UniversalResults as UniversalResultsPage } from "./pages/UniversalResultsPage";
import { VerticalResultsPage } from "./pages/VerticalResultsPage";

export const routeConfig: {
  label: string;
  path: string;
  element: JSX.Element;
}[] = [
  {
    label: "All",
    path: "/search",
    element: (
      <PageLayout>
        <UniversalResultsPage />
      </PageLayout>
    ),
  },
  {
    label: "Blog",
    path: "/search/help_articles",
    element: (
      <PageLayout>
        {" "}
        <VerticalResultsPage verticalKey="help_articles" />{" "}
      </PageLayout>
    ),
  },
  {
    label: "Guides",
    path: "/search/guides",
    element: (
      <PageLayout>
        <VerticalResultsPage verticalKey="guides" />
      </PageLayout>
    ),
  },
  {
    label: "Authors",
    path: "/search/authors",
    element: (
      <PageLayout>
        <VerticalResultsPage verticalKey="author" />
      </PageLayout>
    ),
  },
];

export const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routeConfig.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
