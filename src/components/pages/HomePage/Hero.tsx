/* eslint-disable react/no-children-prop */
import { motion, AnimatePresence } from "framer-motion";
import React, { useMemo, useState } from "react";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../Layout/ScrollAnimationWrapper";
import aboutImg from "/images/landing/WhatsApp Image 2023-02-06 at 11 1.jpg";

const HeroSection = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {/* === HERO SECTION ala Jala.tech === */}
      <section className="relative bg-gradient-to-b from-white via-blue-50 to-white pt-20 lg:pt-24 pb-20 lg:pb-32 overflow-hidden">
  <div className="max-w-screen-xl mx-auto px-1 md:px-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
    
    {/* === Text Side === */}
    <div className="text-left w-full max-w-screen-md ml-auto px-4 lg:pl-24 animate-fade-in-up">
  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-Cabin text-gray-900">
    <span className="block">AQUACULTURE</span>
    <span className="text-crustea-green">TECHNOLOGY</span>
    <br />
    <span className="text-crustea-green">COMPANY</span>
    <br />
  </h1><br />
  <p className="text-4xl sm:text-5xl lg:text-2xl font-bold leading-tight font-Cabin text-gray-90"><i>for Sustainable Cultivation</i></p>

  <p className="mt-6 text-lg text-gray-510 font-DMSans max-w-xl">
    Creating solutions for pond farmers in Indonesia by developing various technologies to increase productivity and efficiency in ponds.
  </p>

  <div className="mt-8 flex flex-col sm:flex-row justify-start gap-4">
    <a
      href="http://api.whatsapp.com/send?phone=6282140773592"
      className="bg-crustea-green hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
    >
      📞 Contact Us
    </a>
    <a
      href="/products"
      className="border border-crustea-green text-crustea-green hover:bg-crustea-green hover:text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
    >
      Get Products
    </a>
  </div>
</div>

    {/* === Image Side === */}
      <div className="w-full flex justify-center mb-12 md:mb-0 animate-fadeIn">
        <div className="relative w-full max-w-[800px]"> {/* Lebar maksimal diperluas */}
          <img
            src="/images/landing/produk.png"
            alt="Shrimpr Person"
            className="w-full h-auto rounded-xl shadow-x"
          />
          <div className="absolute -bottom-24 right-0 md:right-12 bg-white rounded-2xl shadow-xl w-60 px-5 py-4 z-30 border border-gray-100 animate-fade-in-up transition-transform duration-700 ease-out hover:scale-105">
            <p className="text-base font-semibold mb-3 text-[#ACCB37] tracking-wide">
              PRODUCT <span className="text-green-700">CRUSTEA</span>
            </p>
            <img
              src="/images/landing/sistem.png"
              alt="Crustea Product"
              className="w-full h-auto rounded-md max-h-28 object-contain transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
</div>
  </div>

  {/* Background Circle Element */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl z-0"></div>
</section>


{/* === VIDEO MARQUE SECTION === */}
<section className="relative w-1/2 ml-40 bg-white-300 py-12 overflow-hidden">
   
    {/* Teks di kiri atas sejajar container */}
        <div className="mb-7">
         <p className="text-sm text-gray-501 font-extralight">Product present</p>
        </div>

  {/* Container utama */}
  <div className="relative mx-auto max-w-screen-x px-4 sm:px-8 lg:px-16">
    
   {/* Shadow kiri: gradasi masuk dari luar */}
<div className="absolute top-[-10%] bottom-[-10%] left-0 w-20 sm:w-24 z-20 pointer-events-none bg-gradient-to-r from-white-300 via-white-300/80 to-transparent" />

{/* Shadow kanan: gradasi keluar ke luar */}
<div className="absolute top-[-10%] bottom-[-10%] right-0 w-20 sm:w-24 z-20 pointer-events-none bg-gradient-to-l from-white-300 via-white-300/80 to-transparent" />

    {/* Isi marquee */}
    <div className="flex whitespace-nowrap animate-marquee gap-8">
      {[...Array(10)].map((_, i) =>
        [1, 2, 3].map((n) => (
          <img
            key={`${i}-${n}`}
            src={`/images/landing/produk${n}.png`}
            alt={`Produk ${n}`}
            className="h-40 w-auto rounded-xl"
          />
        ))
      )}
    </div>
  </div>
</section>

      {/* === ABOUT SECTION === */}
      <div className="max-w-screen-xl mt-12 px-8 xl:px-16 mx-auto" id="about">
        <div className="flex flex-col items-center mt-4 mb-24" id="company-purpose">
          <ScrollAnimationWrapper>
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
                  className="rounded-2xl mx-auto md:rounded-3xl w-full md:max-w-[420px] lg:mr-14 mb-6 lg:max-h-[420px] object-cover"
                  alt="Our Story"
                  src={aboutImg}
                />
              </motion.div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper className="w-full lg:w-1/2">
              <motion.div
                variants={scrollAnimation}
                className="mx-5 lg:ml-14 lg:max-w-[510px]"
              >
                <h3 className="pt-6 lg:pt-0 font-semibold text-2xl md:text-4xl font-Cabin">
                  We're Dedicated to{" "}
                  <span style={{ color: "#ACCB37" }}>
                    Enhancing the Productivity
                  </span>{" "}
                  of Indonesian Pond Farmers.
                </h3>

                <p className="font-DMSans text-[17px] pt-6 text-justify text-black-600">
                  Driven by the concerns of Indonesian pond farmers who struggle
                  with high operational costs impacting productivity, we have
                  taken a pledge to innovate technology solutions.
                </p>

                <AnimatePresence>
                  {showMore && (
                    <motion.div
                      key="learnMoreText"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <p className="font-DMSans text-[17px] pt-3 text-justify text-black-600">
                        Our goal is to empower farmers to achieve the best possible
                        outcomes in terms of quantity and quality in aquaculture
                        production while making a direct contribution to
                        environmental preservation through eco-friendly innovations.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => setShowMore(!showMore)}
                  className="bg-[#ACCB37] rounded-3xl text-white-300 lg:mt-14 py-3 px-6 shadow-xl font-semibold text-xl hover:bg-white-300 hover:text-[#ACCB37] ring-[#ACCB37] ring-2 mt-6 transition-all duration-300"
                >
                  {showMore ? "Show Less" : "Learn More"}
                </button>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
