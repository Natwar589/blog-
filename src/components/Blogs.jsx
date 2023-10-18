import React, { useContext } from "react";
import { Appcontext } from "../context/Appcontext";
import Spinner from "./Spinner";
const Blogs = () => {
  const { posts, loading } = useContext(Appcontext);

  return (
    <div className="w-[650px] h-100vh flex items-center justify-center flex-col m-auto mt-5 gap-4">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div className="">
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div className="" key={post.id}>
            <p className="font-bold text-xl ">{post.title}</p>
            <p className="text-xs ">
              By <span className="italic">{post.author}</span> on{" "}
              <span className="underline">{post.category}</span>
            </p>
            <p className="text-sm mt-1 mb-4">Posted on {" "}{post.date}</p>
            <p>{post.content}</p>
            <div className="flex  mt-3 gap-1 text-blue-800">
              {post.tags.map((tag, index) => {
                return <span key={index}>{`#${tag}`}</span>;
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
