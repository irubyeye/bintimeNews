import NewsPage from "../pages/NewsPage";
import NewsIdPage from "../pages/NewsIdPage";

export const routes = [
  { path: "/", component: <NewsPage />, exact: true },
  { path: "/:id", component: <NewsIdPage />, exact: true },
];
