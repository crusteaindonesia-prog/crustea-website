import React from "react";
import { useParams } from "react-router";
import Blog from "./Blog";
import arrowIcon from "/images/landing/Component 2.png";
import { Link } from "react-router-dom";

const Article: React.FC = () => {
  const { id } = useParams();
  const blog = Blog.find((blog) => blog.id === id);

  return (
    <>
      <div className="">
        <h1 className="text-black-600 font-semibold md:font-bold mt-28 font-Cabin text-4xl md:text-5xl text-center">
          Blogs
        </h1>
      </div>

      <div className="mx-3 md:mx-12 lg:mx-28 shadow-xl px-5 py-4 lg:px-24 lg:py-14 md:mt-20 mb-12 md:mb-36">
        <Link to={"/"}>
          <div className="rounded-md cursor-pointer hover:ring-2 hover:ring-[#ACCB37] flex self-end items-center w-fit p-1">
            <img
              src={arrowIcon}
              className="hover:hue-rotate-30 rotate-180"
            ></img>
            <h3 className="text-[#ACCB37] ml-2 md:text-2xl">Back</h3>
          </div>
        </Link>

        <div>
          <h2 className="font-DMSans font-medium md:font-bold mt-3 md:mt-14 text-2xl md:text-4xl">
            {blog.title}
          </h2>

          <img
            src={blog.poster}
            alt="alternative"
            className="xl:max-w-3xl mt-3 md:mt-6"
          />

          <div
            dangerouslySetInnerHTML={{ __html: blog.desc }}
            className="font-normal text-black-600 text-xl md:text-3xl mt-4 md:mt-14"
          ></div>

          <div className="mt-5 md:mt-16">
            {blog.tags.map((tag, index) => {
              return (
                <h3
                  className="font-bold text-black-600 text-xl md:text-3xl inline-block mr-2 md:mr-4 hover:text-[#ACCB37] cursor-pointer"
                  key={index}
                >
                  #{tag}
                </h3>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
