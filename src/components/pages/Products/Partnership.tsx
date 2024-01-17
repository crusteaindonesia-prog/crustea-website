import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../Layout/ScrollAnimationWrapper";
import part1 from "../../../../public/images/landing/Products/Group_1.png";
import part2 from "../../../../public/images/landing/Products/Group_2.png";
import part3 from "../../../../public/images/landing/Products/Group_3.png";
import part4 from "../../../../public/images/landing/Products/Group_4.png";

const Partnership = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <>
      <div className="mx-auto justify-center text-center mt-6 md:mt-12">
        <ScrollAnimationWrapper className={undefined}>
          <motion.div variants={scrollAnimation}>
            <h2 className="text-center justify-center  font-Cabin font-bold text-3xl md:text-5xl text-black-600">
              Partnership
            </h2>
          </motion.div>
        </ScrollAnimationWrapper>

        <div className="flex flex-wrap justify-center text-center mx-5 md:mx-auto mt-10 md:mt-24">
          <ScrollAnimationWrapper className="flex items-stretch shadow-lg w-full lg:w-[563px] h-32 lg:h-44 m-2 md:w-3/4 md:my-4 rounded-2xl">
            <motion.div
              variants={scrollAnimation}
              className="self-center mx-auto justify-center text-center"
            >
              <img
                src={part1}
                alt="alternative"
                className="w-3/4 lg:w-auto mx-auto self-center"
              />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="flex items-stretch shadow-lg w-full lg:w-[563px] h-32 lg:h-44 m-2 md:w-3/4 md:my-4 rounded-2xl">
            <motion.div
              variants={scrollAnimation}
              className="self-center mx-auto justify-center text-center"
            >
              <img
                src={part2}
                alt="alternative"
                className="w-3/4 lg:w-auto mx-auto self-center"
              />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="flex items-stretch shadow-lg w-full lg:w-[563px] h-32 lg:h-44 m-2 md:w-3/4 md:my-4 rounded-2xl">
            <motion.div
              variants={scrollAnimation}
              className="self-center mx-auto justify-center text-center"
            >
              <img
                src={part3}
                alt="alternative"
                className="w-3/4 lg:w-auto mx-auto self-center"
              />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="flex items-stretch shadow-lg w-full lg:w-[563px] h-32 lg:h-44 m-2 md:w-3/4 md:my-4 rounded-2xl">
            <motion.div
              variants={scrollAnimation}
              className="self-center mx-auto justify-center text-center"
            >
              <img
                src={part4}
                alt="alternative"
                className="w-3/4 lg:w-auto mx-auto self-center"
              />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </>
  );
};

export default Partnership;
