/* eslint-disable react/no-children-prop */
import React, { useMemo } from "react";
import style from "./header.module.css";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import aboutImg from "/images/landing/WhatsApp Image 2023-02-06 at 11 1.jpg";

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <ScrollAnimationWrapper className={undefined}>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className="lg:flex hidden">
            <div
              className={`flex justify-center py-16 px-32 ${style["bg-batik"]}`}
            >
              <div className={style["header-image"]} />
              <div className="w-16 h-16 rounded-tl-3xl rounded-br-3xl mt-11 ml-3 bg-green-500" />
            </div>
          </div>
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              FISHING TECHNOLOGY COMPANY
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              Aeration technology innovation that is efficient, economical, and
              environmentally friendly to increase the productivity of pond
              farmers
            </p>
          </div>
          <div className="flex w-full">
            <motion.div
              className="h-full w-full"
              variants={scrollAnimation}
            ></motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div
        className="flex flex-col items-center main-h-screen mt-4 mb-24"
        id="company-purpose"
      >
        <ScrollAnimationWrapper className={undefined}>
          <motion.div variants={scrollAnimation}>
            <h3 className="text-green-600 pt-5 md:pt-10 font-sans font-bold text-3xl md:text-5xl py-9 text-center">
              Uncover <span style={{ color: "#ACCB37" }}>Our Story</span>
            </h3>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 mx-5 md:mx-auto">
                <img
                  className="rounded-2xl mx-auto md:rounded-3xl w-full md:max-w-[568px] lg:mr-14 justify-start lg:max-h-[550px] object-cover"
                  alt=""
                  src={aboutImg}
                ></img>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="mx-5 lg:ml-14 lg:max-w-[510px]">
                  <h3 className="pt-6 lg:pt-0 font-semibold text-2xl md:text-4xl font-sans ">
                    We're Dedicated to{" "}
                    <span style={{ color: "#ACCB37" }}>
                      Enhancing the Productivity
                    </span>{" "}
                    of Indonesian Pond Farmers.
                  </h3>
                  <p className="font-sans text-[17px] pt-6 text-justify lg:text-left lg:pt-14 text-black-600">
                    Driven by the concerns of Indonesian pond farmers who
                    struggle with high operational costs impacting productivity,
                    we have taken a pledge to innovate technology solutions.
                  </p>
                  <p className="font-sans text-[17px] pt-3 text-justify lg:text-left lg:pt-10 text-black-600">
                    Driven by the concerns of Indonesian pond farmers who
                    struggle with high operational Our goal is to empower
                    farmers to achieve the best possible outcomes in terms of
                    quantity and quality in aquaculture production while making
                    a direct contribution to environmental preservation through
                    eco-friendly innovations.
                  </p>
                  <button className="bg-[#ACCB37] rounded-3xl text-white-300 lg:mt-14 py-3 px-6 shadow-xl font-semibold text-xl hover:bg-white-300 hover:text-[#ACCB37] ring-[#ACCB37] ring-2 mt-6">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div className="main-h-screen mt-24 mb-24" id="company-purpose"></div>
    </div>
  );
};

export default Hero;
