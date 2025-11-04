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
import { useTranslation } from "react-i18next"; // Import useTranslation

const Values = () => {
  const { t } = useTranslation(); // Dapatkan fungsi 't' (translate)
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
      <div className="justify-center text-center mt-2 md:mt-16">
        <ScrollAnimationWrapper className={undefined}>
          <motion.div variants={scrollAnimation}>
            <h2 className="text-black-600 text-center font-Cabin justify-center mx-auto md:px-0 text-3xl md:text-5xl font-bold">
              {t("companyPhilosophy.section_title_part1")}{" "}
              {/* Menggunakan companyPhilosophy */}
              <span className="text-[#ACC937]">
                {t("companyPhilosophy.section_title_part2")}{" "}
                {/* Menggunakan companyPhilosophy */}
              </span>
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
                className="bg-center bg-cover basis-1/3 transition duration-1000 ease-in-out hover:transition-all hover:basis-2/5 h-full flex items-center group relative"
                style={{ backgroundImage: `url(${value1})` }}
              >
                <span className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm p-2 text-center sr-only">
                  {t("companyPhilosophy.value_1_alt")}{" "}
                  {/* Menggunakan companyPhilosophy */}
                </span>
                <h1 className="drop-shadow-md text-2xl md:text-4xl text-center justify-center mx-auto text-white-300 font-bold font-Cabin z-10">
                  {t("companyPhilosophy.value_1_title")}{" "}
                  {/* Menggunakan companyPhilosophy */}
                </h1>
              </div>
              <div
                className="bg-center bg-cover basis-1/3 transition duration-1000 ease-in-out hover:transition-all hover:basis-2/5 h-full flex items-center group relative"
                style={{ backgroundImage: `url(${value2})` }}
              >
                <span className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm p-2 text-center sr-only">
                  {t("companyPhilosophy.value_2_alt")}{" "}
                  {/* Menggunakan companyPhilosophy */}
                </span>
                <h1 className="drop-shadow-md text-2xl md:text-4xl text-center justify-center mx-auto text-white-300 font-bold font-Cabin z-10">
                  {t("companyPhilosophy.value_2_title")}{" "}
                  {/* Menggunakan companyPhilosophy */}
                </h1>
              </div>
              <div
                className="bg-center bg-cover basis-1/3 transition duration-1000 ease-in-out hover:transition-all hover:basis-2/5 h-full flex items-center group relative"
                style={{ backgroundImage: `url(${value3})` }}
              >
                <span className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm p-2 text-center sr-only">
                  {t("companyPhilosophy.value_3_alt")}{" "}
                  {/* Menggunakan companyPhilosophy */}
                </span>
                <h1 className="drop-shadow-md text-2xl md:text-4xl text-center justify-center mx-auto text-white-300 font-bold font-Cabin z-10">
                  {t("companyPhilosophy.value_3_title")}{" "}
                  {/* Menggunakan companyPhilosophy */}
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
                className="bg-center bg-cover basis-1/2 transition duration-1000 ease-in-out hover:transition-all hover:basis-2/3 h-full flex items-center group relative"
                style={{ backgroundImage: `url(${value4})` }}
              >
                <span className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm p-2 text-center sr-only">
                  {t("companyPhilosophy.value_4_alt")}{" "}
                  {/* Menggunakan companyPhilosophy */}
                </span>
                <h1 className="drop-shadow-md text-2xl md:text-4xl text-center justify-center mx-auto text-white-300 font-bold font-Cabin z-10">
                  {t("companyPhilosophy.value_4_title")}{" "}
                  {/* Menggunakan companyPhilosophy */}
                </h1>
              </div>
              <div
                className="bg-center bg-cover basis-1/2 transition duration-1000 ease-in-out hover:transition-all hover:basis-2/3 h-full flex items-center group relative"
                style={{ backgroundImage: `url(${value5})` }}
              >
                <span className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm p-2 text-center sr-only">
                  {t("companyPhilosophy.value_5_alt")}{" "}
                  {/* Menggunakan companyPhilosophy */}
                </span>
                <h1 className="drop-shadow-md text-2xl md:text-4xl text-center justify-center mx-auto text-white-300 font-bold font-Cabin z-10">
                  {t("companyPhilosophy.value_5_title")}{" "}
                  {/* Menggunakan companyPhilosophy */}
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
                className="bg-center bg-cover basis-1/2 transition duration-1000 ease-in-out hover:transition-all hover:basis-2/3 h-full flex items-center group relative"
                style={{ backgroundImage: `url(${value6})` }}
              >
                <span className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm p-2 text-center sr-only">
                  {t("companyPhilosophy.value_6_alt")}{" "}
                  {/* Menggunakan companyPhilosophy */}
                </span>
                <h1 className="drop-shadow-md text-2xl md:text-4xl text-center justify-center mx-auto text-white-300 font-bold font-Cabin z-10">
                  {t("companyPhilosophy.value_6_title")}{" "}
                  {/* Menggunakan companyPhilosophy */}
                </h1>
              </div>
              <div
                className="bg-center bg-cover basis-1/2 transition duration-1000 ease-in-out hover:transition-all hover:basis-2/3 h-full flex items-center group relative"
                style={{ backgroundImage: `url(${value7})` }}
              >
                <span className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm p-2 text-center sr-only">
                  {t("companyPhilosophy.value_7_alt")}{" "}
                  {/* Menggunakan companyPhilosophy */}
                </span>
                <h1 className="drop-shadow-md text-2xl md:text-4xl text-center justify-center mx-auto text-white-300 font-bold font-Cabin z-10">
                  {t("companyPhilosophy.value_7_title")}{" "}
                  {/* Menggunakan companyPhilosophy */}
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
