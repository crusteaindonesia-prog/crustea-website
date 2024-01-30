/* eslint-disable react/no-children-prop */
import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../Layout/ScrollAnimationWrapper";
import aboutImg from "/images/landing/WhatsApp Image 2023-02-06 at 11 1.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Hero = ({
  banners = [
    {
      url: "/images/landing/banner_1.webp",
    },
    {
      url: "/images/landing/banner_2.webp",
    },
    {
      url: "/images/landing/banner_3.webp",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentBannerIndex === 0;
    const newIndex = isFirstSlide ? banners.length - 1 : currentBannerIndex - 1;
    setCurrentBannerIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentBannerIndex === banners.length - 1;
    const newIndex = isLastSlide ? 0 : currentBannerIndex + 1;
    setCurrentBannerIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentBannerIndex(slideIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  });

  return (
    <>
      <div
        style={{ backgroundImage: `url(${banners[currentBannerIndex].url})` }}
        className="bg-center bg-cover w-full h-screen flex items-center duration-1000 group"
        id="home"
      >
        {/* Left Arrow */}
        <div className="hidden group-hover:block md:hidden absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white-500 opacity-50 cursor-pointer">
          <BsChevronCompactLeft size={30} onClick={prevSlide} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white-500 opacity-50 cursor-pointer">
          <BsChevronCompactRight size={30} onClick={nextSlide} />
        </div>
        <div className="absolute bottom-4 right-0 left-0 flex items-center justify-center gap-2">
          {banners.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-white-500 transition-all "
            >
              <RxDotFilled
                size={`${currentBannerIndex === slideIndex ? "50" : "20"}`}
              />
            </div>
          ))}
        </div>
        <div
          className="max-w-screen-xl w-full px-8 xl:px-16 mx-auto"
          id="banner"
        >
          <ScrollAnimationWrapper className={undefined}>
            <motion.div variants={scrollAnimation}>
              <div className="w-full grid gap-10 md:grid-cols-2 md:items-center">
                <h1 className="text-white-500 text-5xl md:text-6xl font-bold text-center md:text-left lg:text-[72px] font-Ubuntu">
                  AQUACULTURE <br />
                  TECHNOLOGY <br />
                  COMPANY
                </h1>
                <p className=" text-white-500 font-Montserrat text-center md:text-justify md:w-[320px] md:justify-self-end">
                  Crustea Indonesia offers aeration technology innovation that
                  is efficient, economical, and environmentally friendly to
                  increase productivity of pond farmers
                </p>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
      <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
        <div
          className="flex flex-col items-center main-h-screen mt-4 mb-24"
          id="company-purpose"
        >
          <ScrollAnimationWrapper className={undefined}>
            <motion.div variants={scrollAnimation}>
              <h3 className="opacity-100 text-green-600 pt-5 md:pt-10 font-Cabin font-bold text-3xl md:text-5xl py-20 text-center">
                Uncover <span style={{ color: "#ACCB37" }}>Our Story</span>
              </h3>
            </motion.div>
          </ScrollAnimationWrapper>
          <div className="flex flex-wrap">
            <ScrollAnimationWrapper className="w-full lg:w-1/2 mx-5 md:mx-auto">
              <motion.div variants={scrollAnimation}>
                <img
                  className="rounded-2xl mx-auto md:rounded-3xl w-full md:max-w-[568px] lg:mr-14 justify-start lg:max-h-[550px] object-cover"
                  alt=""
                  src={aboutImg}
                ></img>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="w-full lg:w-1/2">
              <motion.div
                variants={scrollAnimation}
                className="mx-5 lg:ml-14 lg:max-w-[510px]"
              >
                <h3 className="pt-6 lg:pt-0 font-semibold text-2xl md:text-4xl font-Cabin ">
                  We're Dedicated to{" "}
                  <span style={{ color: "#ACCB37" }}>
                    Enhancing the Productivity
                  </span>{" "}
                  of Indonesian Pond Farmers.
                </h3>
                <p className="font-DMSans text-[17px] pt-6 text-justify lg:text-left lg:pt-14 text-black-600">
                  Driven by the concerns of Indonesian pond farmers who struggle
                  with high operational costs impacting productivity, we have
                  taken a pledge to innovate technology solutions.
                </p>
                <p className="font-DMSans text-[17px] pt-3 text-justify lg:text-left lg:pt-10 text-black-600">
                  Driven by the concerns of Indonesian pond farmers who struggle
                  with high operational Our goal is to empower farmers to
                  achieve the best possible outcomes in terms of quantity and
                  quality in aquaculture production while making a direct
                  contribution to environmental preservation through
                  eco-friendly innovations.
                </p>
                <button className="bg-[#ACCB37] rounded-3xl text-white-300 lg:mt-14 py-3 px-6 shadow-xl font-semibold text-xl hover:bg-white-300 hover:text-[#ACCB37] ring-[#ACCB37] ring-2 mt-6">
                  Learn More
                </button>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <div className="main-h-screen mt-24 mb-24" id="company-purpose"></div>
      </div>
    </>
  );
};

export default Hero;
