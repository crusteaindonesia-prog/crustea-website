/* eslint-disable react/no-children-prop */
import React, { useMemo } from "react";
import style from "./header.module.css";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero = ({
  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Ponds",
      number: "50",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <ScrollAnimationWrapper className={undefined}>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className="lg:flex hidden">
            <div
              className={`flex justify-center py-16 px-32 ${style["bg-batik"]}`}
            >
              <div className={style["header-image"]} />
              <div className="w-16 h-16 rounded-tl-3xl rounded-br-3xl mt-11 ml-3 bg-green-500" />
            </div>
          </div>
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              FISHING TECHNOLOGY COMPANY
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              Aeration technology innovation that is efficient, economical, and
              environmentally friendly to increase the productivity of pond
              farmers
            </p>
          </div>
          <div className="flex w-full">
            <motion.div
              className="h-full w-full"
              variants={scrollAnimation}
            ></motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div
        className="flex flex-col items-center main-h-screen mt-24 mb-24"
        id="company-purpose"
      >
        <ScrollAnimationWrapper className={undefined}>
          <motion.div variants={scrollAnimation}>
            <h3 className="text-green-600 pt-10 font-sans font-bold text-2xl md:text-4xl py-9 text-center">
              Tujuan utama kami membantu petani tambak Indonesia
            </h3>
            <p className="txt-base text-center">
              Sektor akuakultur Indonesia merupakan salah satu sektor yang
              paling berpotensi untuk menjadi penopang ekonomi nasional saat ini
              mengingat melimpahnya sumber daya alam yang mampu menunjang siklus
              kehidupan biota akuakultur di dalamnya. Namun, masih banyak
              kendala yang dihadapi dalam sektor akuakultur yang dapat
              menghambat proses budidaya. <br /> <br />
              Berawal dari suara keresahan para petani tambak Indonesia yang
              mengeluhkan tingginya biaya operasional dalam menjalankan budidaya
              akuakultur yang berdampak pada kurangnya produktivitas petambak
              Indonesia, kami berkomitmen untuk menciptakan inovasi teknologi
              yang mampu membantu para petani mendapatkan hasil yang maksimal,
              sekaligus berkontribusi langsung untuk melindungi bumi dengan
              inovasi kami yang ramah lingkungan.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div className="relative w-full flex">
        <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
