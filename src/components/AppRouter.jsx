import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../router/routes";
import NewsPage from "../pages/NewsPage";

export default function AppRouter() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
      <Route path="/*" element={<NewsPage />} />
    </Routes>
  );
}
