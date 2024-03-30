import React, { useState } from "react";
import { Link } from "react-router-dom";



const BlogArticle = () => {
  const [articles, setArticles] = useState();

   const handleDelete = (id) => {
            const blog = articles.filter((item) =>  item.id !== id);
           setArticles(blog)
   }

  return (
    <div className="w-full h-full mt-2">
      <div className="article-component w-full h-full flex justify-start p-12 lg:p-20">
        <div>
          <Link to="/">
            <h2 className="text-black  text-center text-2xl lg:text-5xl font-bold hover:text-yellow-700">
              Article
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;
