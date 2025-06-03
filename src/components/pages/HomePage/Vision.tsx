import React, { useMemo } from "react";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../../Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import { CheckCircle } from "lucide-react";
import imgBG from "/images/landing/hueBG.jpg";

const Vision = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <ScrollAnimationWrapper>
      <motion.section
        variants={scrollAnimation}
        className="relative py-20 bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ffffff] overflow-hidden"
      >
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#dfffff] via-[#def9df] to-[#f2ffe6] bg-[length:400%_400%] animate-[bg-shift] z-0 opacity-30 blur-2xl" />

        <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl shadow-xl overflow-hidden p-6 md:p-12">
            
            {/* TEXT */}
            <motion.div
              variants={scrollAnimation}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-5xl font-Cabin font-bold text-gray-900 mb-6 leading-tight">
                Our Vision
              </h2>
              <p className="text-base sm:text-lg md:text-xl font-DMSans text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Increasing the Pond Farmer's Productivity{" "}
                <span className="text-[#6A994E] font-semibold">
                  & Food Security by Implementing
                </span>{" "}
                Eco-Aerator Technology
              </p>
              <ul className="space-y-4 text-gray-800 text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto lg:mx-0">
                {[
                  "Boosting productivity with precision Eco-Aerator systems",
                  "Supporting sustainable food security for future generations",
                  "Empowering digital-savvy pond farmers with real-time tech"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-[#6A994E]" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              variants={scrollAnimation}
              className="relative w-full h-[240px] sm:h-[320px] md:h-[400px] lg:h-full rounded-xl overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${imgBG})` }}
              />
              <div className="absolute inset-0 bg-[#ACCB37]/70 mix-blend-multiply backdrop-blur-sm" />
              <div className="relative z-10 h-full flex items-center justify-center p-6">
                <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-Cabin font-bold text-center leading-tight drop-shadow-lg">
                  Smart Farming<br className="hidden sm:block" /> for a Better Future
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </ScrollAnimationWrapper>
  );
};

export default Vision;
