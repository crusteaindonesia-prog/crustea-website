import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../Layout/ScrollAnimationWrapper";
import farmercons from "/images/landing/farmer_cons.png";
import farmercult from "/images/landing/farmers_cult.png";
import projectcollab from "/images/landing/project_collab.png";
import consul from "/images/landing/consul.png";

const Consultant = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <>
      <div className="mt-40 mx-auto justify-center text-center">
        <ScrollAnimationWrapper className={undefined}>
          <motion.div variants={scrollAnimation}>
            <h2 className="text-black-600 text-center font-Cabin justify-center mx-auto md:px-0 text-3xl md:text-5xl font-bold">
              Project <span className="text-[#ACC937]">and Consultant</span>
            </h2>
          </motion.div>
        </ScrollAnimationWrapper>
        <div className="flex flex-wrap mx-auto justify-center mt-12 md:mt-24">
          <ScrollAnimationWrapper className={undefined}>
            <motion.div
              variants={scrollAnimation}
              className="w-screen md:w-96 m-1 md:m-3 h-32 lg:w-[633px] lg:h-44 md:rounded-lg"
            >
              <div
                className="bg-center bg-cover relative h-32 lg:h-44 md:rounded-lg"
                style={{ backgroundImage: `url(${farmercons})` }}
              >
                <div className="bg-[#0A262F] h-full w-full md:rounded-lg bg-opacity-50 flex justify-center items-center md:justify-start md:items-end">
                  <h2 className="text-2xl text-white-300 lg:text-4xl rounded-lg font-bold drop-shadow-md mx-2 md:mx-0 md:pb-7 md:px-7">
                    Farmers construction
                  </h2>
                </div>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className={undefined}>
            <motion.div
              variants={scrollAnimation}
              className="w-screen md:w-96 m-1 md:m-3 h-32 lg:w-[633px] lg:h-44 md:rounded-lg"
            >
              <div
                className="bg-center bg-cover relative h-32 lg:h-44 md:rounded-lg"
                style={{ backgroundImage: `url(${farmercult})` }}
              >
                <div className="bg-[#A5C035] w-full h-full bg-opacity-50 md:rounded-lg flex justify-center items-center md:justify-end md:items-end">
                  <h2 className="text-2xl text-white-300 lg:text-4xl font-bold drop-shadow-md mx-2 md:mx-0 md:pr-7 md:pb-7 md:text-right">
                    Farmers cultivation consultation
                  </h2>
                </div>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className={undefined}>
            <motion.div
              variants={scrollAnimation}
              className="w-screen md:w-96 m-1 md:m-3 h-32 lg:w-[633px] lg:h-44 rounded-lg"
            >
              <div
                className="bg-center bg-cover relative h-32 lg:h-44 rounded-lg"
                style={{ backgroundImage: `url(${projectcollab})` }}
              >
                <div className="bg-[#0A262F] md:bg-[#A5C035] w-full h-full bg-opacity-50 md:bg-opacity-50 md:rounded-lg flex justify-center items-center md:justify-start md:items-end">
                  <h2 className="text-2xl text-white-300 lg:text-4xl font-bold drop-shadow-md mx-2 md:mx-0 md:pb-7 md:px-7 md:text-left md:max-w-md">
                    Project collaboration in the fields of AI, IoT, Renewable
                    Energy
                  </h2>
                </div>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className={undefined}>
            <motion.div
              variants={scrollAnimation}
              className="w-screen md:w-96 m-1 md:m-3 h-32 lg:w-[633px] lg:h-44 md:rounded-lg"
            >
              <div
                className="bg-center bg-cover relative h-32 lg:h-44 md:rounded-lg"
                style={{ backgroundImage: `url(${consul})` }}
              >
                <div className="bg-[#A5C035] md:bg-[#0A262F] w-full h-full bg-opacity-50 md:bg-opacity-50 md:rounded-lg flex justify-center items-center md:justify-end md:items-end">
                  <h2 className="text-2xl text-white-300 lg:text-4xl font-bold drop-shadow-md mx-2 md:mx-0 md:pr-7 md:pb-7 md:text-right">
                    Consultation on the use of renewable energy
                  </h2>
                </div>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </>
  );
};

export default Consultant;
