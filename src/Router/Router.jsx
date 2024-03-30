import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../Layouts/MainLayout.jsx";
import BlogArticle from "../page/BlogArticle.jsx";
import Index from "../BlogArticlesStories.jsx/Index.jsx";
import Create from "../page/CreateBlog/Create.jsx";
import HomeBlog from "../page/HomeBlog.jsx";

const Router = () => {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
      <Route index path="" element={<HomeBlog />} />
        <Route path="/blog" element={<BlogArticle />} />
        <Route path="/blog/:id" element={<Index/>} />
        <Route path="/create" element={<Create/>} />
      </Route>
    </Routes>
  );
};

export default Router;
