import React, { useState } from "react";
const Create = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [body, setBody] = useState("");
  const [blogImg, setBlogImg] = useState("");
  const [id, setId] = useState([]);

  const localStore = (post) => {
    const dataStored = localStorage.getItem("store");
    if (!dataStored || dataStored.length === 0) {
      let store = [];
      store.push(post);
      localStorage.setItem("store", JSON.stringify(store));
    } else {
      const parseData = JSON.parse(dataStored);
      let myNewarr = parseData;
      myNewarr.push(post);
      localStorage.setItem("store", JSON.stringify(myNewarr));
    }
  };

  const getFile = (e) => {
    setBlogImg(URL.createObjectURL(e.target.files[0]));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    localStore({ title, date, body, id, blogImg});
  };

 
  return (
    <div className="w-full h-full p-20 text-center mt-2 grid">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="p-10">
          <label className="text-4xl">Create A Blog and Post For Free</label>
        </div>


        <div className="p-10 grid place-content-center">
          <label className="text-4xl mb-2">Upload a picture</label>
          <input
            type="file"
            required
            onChange={getFile}
            className="w-full h-full lg:w-[500px] lg:h-[105px] border border-black text-black rounded-lg shadow-lg p-2"
          />
          <img src={blogImg} alt="" className="w-full h-full  rounded-lg mt-4" />
        </div>

        <div className="p-10 grid place-content-center">
          <label className="text-4xl mb-2">Title:{title}</label>
          <input
            type="text"
            placeholder=""
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-[500px] h-[35px] border border-black  rounded-lg shadow-lg p-2"
          />
        </div>

        <div className="p-10 grid place-content-center">
          <label className="text-4xl mb-2">Date:{date}</label>
          <input
            type="text"
            placeholder=""
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-[500px] h-[35px] border border-black rounded-lg shadow-lg p-2"
          />
        </div>

        <div className="p-10  grid place-content-center">
          <label className="text-4xl mb-2">Body:{body}</label>
          <textarea
            className="w-[500px] h-[400px] border border-black rounded-lg shadow-lg p-10"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>

        <div className="p-10 grid place-content-center">
          <label className="text-4xl mb-2">Id:{id}</label>
          <input
            type="text"
            placeholder=""
            required
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-[500px] h-[35px] border border-black rounded-lg shadow-lg p-2"
          />
        </div>

        <button className="w-[100px] h-[45px] bg-black text-white p-2 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
