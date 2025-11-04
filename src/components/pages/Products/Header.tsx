import banner from "/images/landing/Products/banner.png";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../Layout/ScrollAnimationWrapper";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="justify-center mx-auto">
      <div className="flex flex-wrap justify-center lg:mx-44">
        <div className="w-full self-center justify-center px-4 mt-28 mx-8 md:mx-0 md:mt-0 lg:w-1/2">
          <ScrollAnimationWrapper className={undefined}>
            <motion.div variants={scrollAnimation} className="mb-6 md:mb-0">
              <h1 className="uppercase font-Ubuntu font-bold text-3xl text-black-600 md:text-7xl mb-10 md:mb-16">
                {t("productsHeader.main_heading_part1")}{" "}
                <span className="text-[#ACCB37]">
                  {t("productsHeader.main_heading_part2_highlight")}
                </span>{" "}
                {t("productsHeader.main_heading_part3")}{" "}
                <span className="text-[#ACCB37]">
                  {t("productsHeader.main_heading_part4_highlight")}
                </span>{" "}
              </h1>
              <button
                onClick={() => {
                  const section = document.getElementById("Product");
                  if (section) {
                    section.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="font-semibold text-base text-white-300 bg-[#ACCB37] py-3 px-8 rounded-lg hover:shadow-lg hover:bg-slate-500 cursor-pointer transition-all duration-300"
              >
                {t("productsHeader.button_text")}
              </button>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>

        <div className="w-full px-4 self-end lg:w-1/2">
          <ScrollAnimationWrapper className={undefined}>
            <motion.div
              variants={scrollAnimation}
              className="mt-10 mx-6 md:mx-0 lg:mt-9"
            >
              {/* Optimized LCP image */}
              <img
                src={banner}
                alt={t("productsHeader.banner_alt_text")}
                className="w-full object-cover"
                fetchpriority="high"
                loading="eager" // pastikan gambar dimuat langsung
              />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Header;
