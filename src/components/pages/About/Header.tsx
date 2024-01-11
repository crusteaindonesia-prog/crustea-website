import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../Layout/ScrollAnimationWrapper";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import video from "/images/landing/about/company profile.mp4";
import YouTube, { YouTubeProps } from "react-youtube";

const Header = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const onReady = (e) => {
    console.log(e.target);
  };

  const youtubeID = "Eu0IJ6drT-Y?si=xCHz0z8z7WAMASqX";

  return (
    <>
      <div className="mt-8 md:mt-32">
        <div className="justify-center lg:max-w-[950px] mx-4 md:mx-auto text-center">
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
        <div className="mt-10 md:mx-auto justify-center text-center rounded-xl md:mt-20">
          <ScrollAnimationWrapper className={undefined}>
            <motion.div
              variants={scrollAnimation}
              className="mx-5 md:mx-auto md:w-3/4 lg:max-w-[920px] justify-center text-center"
            >
              <YouTube videoId={youtubeID} onReady={onReady} />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </>
  );
};

export default Header;
