import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  return (

    <div className="mt-10"><div className="mt-4">
    <div className="w-11/12 max-w-2xl mx-auto">
      <NavLink to={`/blog/${post.id}`}>
        <h2 className="font-bold text-xl mb-2">{post.title}</h2>
      </NavLink>
      <p className="text-sm my-1">
        By <span className="italic">{post.author}</span> on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="font-semibold underline cursor-pointer">
            {post.category}
          </span>
        </NavLink>
      </p>
      <p className="text-sm mb-2">Posted on {post.date}</p>
      <p className="text-base">{post.content}</p>
      <div className="flex flex-wrap gap-x-2 items-center mt-4 ">
        {post.tags.map((tag, index) => (
          <NavLink
            key={index}
            to={`/tags/${tag.replaceAll(" ", "-")}`}
            className="text-sm bg-gray-200 px-2 py-1 rounded-md mt-2"
          >
            {`#${tag}`}
          </NavLink>
        ))}
      </div>
    </div>
  </div>

    </div>
    
  );
};

export default BlogDetails;
