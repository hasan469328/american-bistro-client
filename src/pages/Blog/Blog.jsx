import React, { useContext, useState } from "react";
import BlogCard from "./BlogCard";
import { AuthContext } from "../../provider/AuthProvider";
import { GridLoader } from "react-spinners";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const { loader, setLoader } = useContext(AuthContext);
  fetch("http://localhost:5000/blog")
    .then((res) => res.json())
    .then((data) => {
      setLoader(false);
      setBlogData(data);
    });
  return (
    <>
      {loader ? (
        <div>
          <GridLoader
            color="#36d7b7"
            cssOverride={{
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
      ) : (
        <div className="bg-gray-100 py-8 px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Question
          </h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {blogData.map((blog) => (
              <BlogCard key={blog.answer} blog={blog}></BlogCard>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
