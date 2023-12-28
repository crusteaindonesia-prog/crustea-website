import banner from "../../../../public/images/landing/Products/banner.png";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../Layout/ScrollAnimationWrapper";

const Header = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className="justify-center mx-auto">
      <div className="flex flex-wrap justify-center lg:mx-44">
        <div className="w-full self-center justify-center px-4 mt-28 mx-8 md:mx-0 md:mt-0 lg:w-1/2">
          <ScrollAnimationWrapper className={undefined}>
            <motion.div variants={scrollAnimation} className="mb-6 md:mb-0">
              <h1 className="uppercase font-Ubuntu font-bold text-3xl  text-black-600 md:text-7xl mb-10 md:mb-16">
                Operational cost <span className="text-[#ACCB37]">savings</span>{" "}
                of up to <span className="text-[#ACCB37]">80%</span>{" "}
              </h1>
              <a
                className="font-semibold text-base text-white-300 bg-[#ACCB37] py-3 px-8 rounded-lg hover:shadow-lg hover:bg-slate-500 cursor-pointer "
                href="#about"
              >
                Buy Processed Products
              </a>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="w-full px-4 self-end lg:w-1/2">
          <ScrollAnimationWrapper className={undefined}>
            <motion.div
              variants={scrollAnimation}
              className="mt-10 mx-6 md:mx-0 lg:mt-9"
            >
              <img src={banner} alt="" className="w-full" />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Header;
