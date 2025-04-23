import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../Layout/ScrollAnimationWrapper";
import { Link } from "react-router-dom";
import arrowIcon from "/images/landing/Component 2.png";
import Blog from "./Blog";

const Blogs = ({ isHomePage = false }) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="mx-4 md:mx-16 lg:mx-24 mt-12 md:mt-20">
      {/* Title */}
      <ScrollAnimationWrapper>
        <motion.div
          variants={scrollAnimation}
          className="text-center font-Cabin font-semibold text-2xl md:text-4xl"
        >
          <h2 className="text-[#ACCB37]">
            <span className="text-black">Blogs</span>
          </h2>
        </motion.div>
      </ScrollAnimationWrapper>

      {/* Read Blogs Button for Home Page */}
      {isHomePage && (
        <ScrollAnimationWrapper>
          <motion.div
            variants={scrollAnimation}
            className="flex justify-center md:justify-end mt-6"
          >
            <Link to="/blogs">
              <div className="md:mr-24 rounded-md cursor-pointer hover:ring-2 hover:ring-[#ACCB37] flex items-center w-fit px-6 py-3 transition-all duration-200 hover:bg-[#ACCB37]/10">
                <h3 className="text-[#ACCB37] text-base md:text-lg font-medium">
                  Read Blogs...
                </h3>
              </div>
            </Link>
          </motion.div>
        </ScrollAnimationWrapper>
      )}

      {/* Blog Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Blog.slice(0, isHomePage ? 3 : Blog.length).map((product, index) => (
          <ScrollAnimationWrapper key={index}>
            <motion.div
              variants={scrollAnimation}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Blog Image */}
              <img
                src={product.img}
                alt={product.in.title}
                className="rounded-t-2xl w-full h-64 object-cover object-center"
              />
              <div className="p-6 flex flex-col flex-grow">
                {/* Blog Title */}
                <h2 className="text-lg md:text-xl font-semibold text-black mb-3">
                  {product.in.title}
                </h2>
                {/* Blog Description */}
                <p className="text-sm md:text-base text-gray-700 font-DMSans flex-grow mb-4">
                  {product.in.desc.slice(0, 180)}...
                </p>
                {/* Read More Link */}
                <div className="mt-auto">
                  <Link to={`/blog/${product.id}`}>
                    <div className="flex items-center text-[#ACCB37] hover:text-[#91b12e] transition-colors">
                      <span className="text-sm md:text-base font-medium">
                        Read more...
                      </span>
                      <img
                        src={arrowIcon}
                        className="ml-2 w-4 h-4 md:w-5 md:h-5"
                        alt="Arrow Icon"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        ))}
      </div>
      <br />
    </div>
  );
};

export default Blogs;
