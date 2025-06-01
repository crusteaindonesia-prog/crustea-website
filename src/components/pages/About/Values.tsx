import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../Layout/ScrollAnimationWrapper";
import value1 from "/images/landing/about/value1.png";
import value2 from "/images/landing/about/value2.png";
import value3 from "/images/landing/about/value3.png";
import value4 from "/images/landing/about/value4.png";
import value5 from "/images/landing/about/value5.png";
import value6 from "/images/landing/about/value6.png";
import value7 from "/images/landing/about/value7.png";

const Values = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
      <div className="justify-center text-center mt-8 md:mt-16">
        <ScrollAnimationWrapper className={undefined}>
          <motion.div variants={scrollAnimation}>
            <h2 className="text-black-600 text-center font-Cabin justify-center mx-auto md:px-0 text-3xl md:text-5xl font-bold">
              Company <span className="text-[#ACC937]">Philosophy</span>
            </h2>
          </motion.div>
        </ScrollAnimationWrapper>

        <div className="mx-auto md:mx-20 mt-12 md:mt-24">
          <ScrollAnimationWrapper className={undefined}>
            <motion.div
              variants={scrollAnimation}
              className="w-full flex flex-row h-32 md:h-96"
            >
              <div
                className="bg-center bg-cover basis-1/3 transition duration-1000 ease-in-out hover:transition-all hover:basis-2/5 h-full flex items-center "
                style={{ backgroundImage: `url(${value1})` }}
              >
                <h1 className="drop-shadow-md text-2xl md:text-4xl text-center justify-center mx-auto text-white-300 font-bold font-Cabin">
                  Creative & Innovative
                </h1>
              </div>
              <div
                className="bg-center bg-cover basis-1/3 transition duration-1000 ease-in-out hover:transition-all hover:basis-2/5 h-full flex items-center "
                style={{ backgroundImage: `url(${value2})` }}
              >
                <h1 className="drop-shadow-md text-2xl md:text-4xl text-center justify-center mx-auto text-white-300 font-bold font-Cabin">
                  Respect
                </h1>
              </div>
              <div
                className="bg-center bg-cover basis-1/3 transition duration-1000 ease-in-out hover:transition-all hover:basis-2/5 h-full flex items-center "
                style={{ backgroundImage: `url(${value3})` }}
              >
                <h1 className="drop-shadow-md text-2xl md:text-4xl text-center justify-center mx-auto text-white-300 font-bold font-Cabin">
                  Humility
                </h1>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>

        <div className="mx-auto md:mx-20 mt-3 md:mt-6 max-w-full flex flex-wrap">
          <ScrollAnimationWrapper className="w-full lg:w-1/2 mt-3 lg:mt-0">
            <motion.div
              variants={scrollAnimation}
              className="w-full flex flex-row h-32 md:h-96"
            >
              <div
                className="bg-center bg-cover basis-1/2 transition duration-1000 ease-in-out hover:transition-all hover:basis-2/3 h-full flex items-center "
                style={{ backgroundImage: `url(${value4})` }}
              >
                <h1 className="drop-shadow-md text-2xl md:text-4xl text-center justify-center mx-auto text-white-300 font-bold font-Cabin">
                  Skillful
                </h1>
              </div>
              <div
                className="bg-center bg-cover basis-1/2 transition duration-1000 ease-in-out hover:transition-all hover:basis-2/3 h-full flex items-center "
                style={{ backgroundImage: `url(${value5})` }}
              >
                <h1 className="drop-shadow-md text-2xl md:text-4xl text-center justify-center mx-auto text-white-300 font-bold font-Cabin">
                  Teamwork
                </h1>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper className="w-full lg:w-1/2 mt-3 lg:mt-0">
            <motion.div
              variants={scrollAnimation}
              className="w-full flex flex-row h-32 md:h-96"
            >
              <div
                className="bg-center bg-cover basis-1/2 transition duration-1000 ease-in-out hover:transition-all hover:basis-2/3 h-full flex items-center "
                style={{ backgroundImage: `url(${value6})` }}
              >
                <h1 className="drop-shadow-md text-2xl md:text-4xl text-center justify-center mx-auto text-white-300 font-bold font-Cabin">
                  Ethic & Integrity
                </h1>
              </div>
              <div
                className="bg-center bg-cover basis-1/2 transition duration-1000 ease-in-out hover:transition-all hover:basis-2/3 h-full flex items-center "
                style={{ backgroundImage: `url(${value7})` }}
              >
                <h1 className="drop-shadow-md text-2xl md:text-4xl text-center justify-center mx-auto text-white-300 font-bold font-Cabin">
                  Adaptive
                </h1>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </>
  );
};

export default Values;
