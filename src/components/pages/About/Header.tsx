import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../Layout/ScrollAnimationWrapper";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import video from "../../../../public/images/landing/about/company profile.mp4";

const Header = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <>
      <div className="mt-8 md:mt-32">
        <div className="justify-center lg:max-w-[950px] mx-auto text-center">
          <ScrollAnimationWrapper className={undefined}>
            <motion.div
              variants={scrollAnimation}
              className="text-black-600 font-bold font-Cabin text-3xl md:text-5xl"
            >
              <h1 className="text-black-600 font-bold font-Cabin text-3xl md:text-5xl">
                AIoT-based
                <span className="text-[#ACCB37]"> Eco-Friendly</span> Aeration
                Technology Innovation in
                <span className="text-[#ACCB37]"> Aquaculture</span>
              </h1>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="mt-10 md:mx-64 rounded-xl md:mt-20">
          <ScrollAnimationWrapper className={undefined}>
            <motion.div variants={scrollAnimation} className="">
              <video className="w-full rounded-xl" controls autoPlay>
                <source src={video} type="video/mp4" />
              </video>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </>
  );
};

export default Header;
