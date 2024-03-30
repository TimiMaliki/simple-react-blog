import React, { useState } from "react";
import { useParams } from "react-router";

const Index = () => {
  const routeParams = useParams();

  const [currentBlog, setCurrentBlog] = useState({});

  const getBlog = (id) => {
    const currentBlog = db.find((read) => {
      console.log({ read, id });
      return read.id === Number(id);
    });
    console.log({ currentBlog });
    setCurrentBlog(currentBlog);
  };

  React.useEffect(() => {
    getBlog(routeParams.id);
  }, []);
  return (
    <div className="w-full h-full mt-8 ">
      <div className="p-20">
        <div className="w-full h-full flex justify-center mb-10">
          <img src={currentBlog.blogImg} alt="" srcset="" />
        </div>

        <div className="text-center w-full h-full">
          <h1 className="mb-4 text-2xl lg:text-5xl font-bold">
            {currentBlog.title}
          </h1>
          <p className="mb-4 text-base text-center lg:text-2xl">
            {currentBlog.body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
