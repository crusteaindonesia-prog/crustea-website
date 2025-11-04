import React, { useMemo } from "react";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../../Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import { CheckCircle } from "lucide-react";
import imgBG from "/images/landing/hueBG.jpg";
import { useTranslation } from "react-i18next"; // Impor useTranslation

const Vision = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const { t } = useTranslation(); // Dapatkan fungsi 't' (translate)

  return (
    <ScrollAnimationWrapper>
      <motion.section
        variants={scrollAnimation}
        className="relative py-20 overflow-hidden"
        style={{ backgroundColor: "#eff9fcff" }} // ⬅️ Tambahan background di sini
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
              {/* Menggunakan terjemahan untuk judul */}
              <h2 className="text-3xl md:text-5xl font-Cabin font-bold text-gray-900 mb-6 leading-tight">
                {t("vision.heading")}
              </h2>
              {/* Menggunakan terjemahan untuk deskripsi */}
              <p className="text-base sm:text-lg md:text-xl font-DMSans text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t("vision.description_part1")}{" "}
                <span className="text-[#6A994E] font-semibold">
                  {t("vision.description_part2")}
                </span>{" "}
                {t("vision.description_part3")}
              </p>
              <ul className="space-y-4 text-gray-800 text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto lg:mx-0">
                {/* Menggunakan terjemahan untuk setiap item daftar */}
                {[
                  t("vision.list_item1"),
                  t("vision.list_item2"),
                  t("vision.list_item3"),
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
                {/* Menggunakan terjemahan untuk teks di dalam gambar */}
                <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-Cabin font-bold text-center leading-tight drop-shadow-lg">
                  {t("vision.image_heading_part1")}
                  <br className="hidden sm:block" />{" "}
                  {t("vision.image_heading_part2")}
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
