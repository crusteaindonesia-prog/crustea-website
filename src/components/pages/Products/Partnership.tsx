import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../Layout/ScrollAnimationWrapper";
import part1 from "/images/landing/Products/Group_1.png";
import part2 from "/images/landing/Products/Group_2.png";
import part3 from "/images/landing/Products/Group_3.png";
import part4 from "/images/landing/Products/Group_4.png";
import { useTranslation } from "react-i18next";

const Partnership = () => {
  const { t } = useTranslation();
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <ScrollAnimationWrapper>
          <motion.div variants={scrollAnimation}>
            <h2 className="font-Cabin font-bold text-3xl md:text-5xl text-gray-800">
              {t("partnership.section_title")}
            </h2>
          </motion.div>
        </ScrollAnimationWrapper>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[part1, part2, part3, part4].map((part, i) => (
            <ScrollAnimationWrapper key={i}>
              <motion.div
                variants={scrollAnimation}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center shadow-md hover:shadow-xl transition-all bg-white rounded-2xl p-6"
              >
                <div className="w-full aspect-[1/1] flex items-center justify-center">
                  <img
                    src={part}
                    alt={t("partnership.image_alt_text_generic")}
                    className="max-w-[90%] max-h-[90%] object-contain"
                  />
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnership;
