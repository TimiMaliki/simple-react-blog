import React, { useEffect, useState } from "react";
import Delete from "./Delete";
import { Link } from "react-router-dom";

const HomeBlog = () => {
  const [homeBlog, setHomeBlog] = useState([]);

  const storeRetrive = () => {
    const data = localStorage.getItem("store");
    const parse = JSON.parse(data);
    return parse;
  };

  useEffect(() => {
    const item = storeRetrive();
    setHomeBlog(item);
  }, []);

  const getFile = (e) => {
    const file = e.target.files[0];
    const reader = newfileReader();

    reader.onloadend = () => {
      setHomeBlog(reader.result.toString());
    };
    reader.readAsDataURL(file);
  };

  const handleDelete = (id) => {
    const data = storeRetrive();
    const deleteItem = data.filter((item) => {
    return  item.id !== id;
    });
    setHomeBlog(deleteItem);
    localStorage.setItem("store", JSON.stringify(deleteItem));
  };

  return (
    <div className="w-full h-full mt-12">
      <div className="w-full h-full flex justify-center gap-3 p-14">
        <div className="our-services">
          <Link to="blog">
            <h1 className="text-5xl  lg:text-7xl font-extrabold">Blog</h1>
          </Link>
        </div>
      </div>

      <div className="w-full h-full grid grid-cols-1  place-content-center grid-cols-1 lg:grid-cols-3  mb-2 ">
        {homeBlog.map((homeBlog) => (
          <div
            className="blogGrid grid  place-content-center  p-20 lg:p-20"
            key={homeBlog.id}
          >
            <div className="blogCard w-full  bg-white border border-gray-200 rounded-lg shadow bg-gray-100 dark:border-gray-700">
              <img
                className="w-full h-full  rounded-t-lg"
                src={homeBlog.blogImg}
                alt="blog imagies"
                onChange={getFile}
                // style={{ width: "100%" }}
              />
            </div>

            <Link to={"blog"}>
              <p className="mb-8">{homeBlog.date}</p>
            </Link>

            <Link to={"blog"}>
              <p className=" text-xl w-full mb-8">{homeBlog.title}</p>
            </Link>
            <Delete handleDelete={() => handleDelete(homeBlog.id)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBlog;
