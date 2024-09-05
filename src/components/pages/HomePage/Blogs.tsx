import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../Layout/ScrollAnimationWrapper";
import { Routes, Route, Link } from "react-router-dom";
import arrowIcon from "/images/landing/Component 2.png";
import Blog from "./Blog";

const Blogs = ({ isHomePage = false }) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
      <div className="mx-8 md:mx-32 mt-16 md:mt-20">
        <ScrollAnimationWrapper className={undefined}>
          <motion.div
            variants={scrollAnimation}
            className="mx-auto font-bold text-center font-Cabin text-3xl md:text-5xl"
          >
            <h2 className="text-[#ACCB37]">
              <span className="text-black-600">Blogs</span>
            </h2>
          </motion.div>
        </ScrollAnimationWrapper>
        {isHomePage && ( // Conditional rendering
          <ScrollAnimationWrapper className={undefined}>
            <motion.div
              variants={scrollAnimation}
              className="flex justify-center md:justify-end mt-4"
            >
              <Link
                to="/blogs"
                className="flex justify-center md:justify-end mt-8"
              >
                <div className="md:mr-40 rounded-md cursor-pointer hover:ring-2 hover:ring-[#ACCB37] flex self-end items-center w-fit p-1">
                  <h3 className="text-[#ACCB37] md:text-2xl">Read blogs...</h3>
                </div>
              </Link>
            </motion.div>
          </ScrollAnimationWrapper>
        )}
        <div className="mt-8 md:mt-8 justify-center mx-auto flex flex-wrap">
          {Blog.slice(0, isHomePage ? 3 : Blog.length).map((product, index) => {
            return (
              <div key={index}>
                <div className="mt-5 md:mt-0 md:w-80 2xl:w-96 h-fit md:h-[720px] bg-[#ffff] md:m-4 rounded-3xl drop-shadow-lg flex flex-col">
                  <ScrollAnimationWrapper className={undefined}>
                    <motion.div variants={scrollAnimation}>
                      <img
                        src={product.img}
                        className="rounded-3xl w-full md:w-full aspect-square object-cover object-top"
                      ></img>
                    </motion.div>
                  </ScrollAnimationWrapper>

                  <ScrollAnimationWrapper className={undefined}>
                    <motion.div variants={scrollAnimation}>
                      <h2 className="text-xl md:text-xl ml-3 mt-3 font-bold text-black-600">
                        {product.in.title}
                      </h2>
                    </motion.div>
                  </ScrollAnimationWrapper>

                  <ScrollAnimationWrapper className={undefined}>
                    <motion.div variants={scrollAnimation}>
                      <p className="font-normal font-DMSans text-black-600 text-base p-3 md:text-xl">
                        {product.in.desc.slice(0, 220) + "..."}
                      </p>
                    </motion.div>
                  </ScrollAnimationWrapper>

                  <ScrollAnimationWrapper className="mt-auto mb-3">
                    <motion.div variants={scrollAnimation} className="ml-3">
                      <Link to={`/blog/${product.id}`}>
                        <div className="rounded-md cursor-pointer hover:ring-2 hover:ring-[#ACCB37] flex self-end items-center w-fit p-1">
                          <h3 className="text-[#ACCB37] md:text-2xl">
                            Read more ...
                          </h3>
                          <img
                            src={arrowIcon}
                            className="ml-2 hover:hue-rotate-30"
                          ></img>
                        </div>
                      </Link>
                    </motion.div>
                  </ScrollAnimationWrapper>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blogs;
