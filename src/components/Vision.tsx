import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import imgBG from "/images/landing/hueBG.jpg";

const Vision = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <>
      <ScrollAnimationWrapper className={undefined}>
        <div className="flex flex-wrap lg:h-72 md:mt-40">
          <motion.div
            variants={scrollAnimation}
            className="w-full lg:w-[2/5] md:h-72 md:basis-2/5 md:order-2"
          >
            <div
              className="bg-center bg-cover relative h-32 lg:h-72"
              style={{ backgroundImage: `url(${imgBG})` }}
            >
              <div className="bg-[#ACCB37] h-full lg:h-full w-full mix-blend-multiply">
                <h2 className="text-white-300 h-full lg:h-full font-Cabin font-bold mx-auto mix-blend-normal flex items-center justify-center text-3xl lg:text-6xl">
                  OUR VISION
                </h2>
              </div>
            </div>
            {/* <div className="bg-[#ACCB37] text-white-300 lg:h-72">
              <h2 className="mx-auto text-center text-3xl font-bold my-auto lg:text-6xl align-middle">OUR VISION</h2>
            </div> */}
          </motion.div>
          <motion.div
            variants={scrollAnimation}
            className="w-full lg:w-[3/5] md:h-72 md:basis-3/5"
          >
            <div className="bg-[#DEE8DB] lg:py-16 h-32 w-full lg:h-72">
              <p className="text-xl text-[#000000] h-full lg:text-3xl max-w-xl mx-5 sm:mx-10 md:mx-auto font-DMSans text-center font-medium flex items-center lg:leading-[48px] md:justify-center italic lg:text-right lg:mr-16">
                Increasing the Pond Farmer's Productivity & Food Security by
                Implementing Eco-Aerator Technology
              </p>
            </div>
          </motion.div>
        </div>
      </ScrollAnimationWrapper>
    </>
  );
};

export default Vision;
