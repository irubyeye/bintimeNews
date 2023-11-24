import NewsPage from "../pages/NewsPage";
import NewsIdPage from "../pages/NewsIdPage";

export const routes = [
  { path: "/news", component: <NewsPage />, exact: true },
  { path: "/news/:id", component: <NewsIdPage />, exact: true },
];
