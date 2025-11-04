import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../Layout/ScrollAnimationWrapper";
// import video from "/images/landing/about/company profile.mp4"; // Ini tidak digunakan karena Anda pakai YouTube
import YouTube, { YouTubeProps } from "react-youtube";
import { useTranslation } from "react-i18next"; // Import useTranslation

const Header = () => {
  const { t } = useTranslation(); // Dapatkan fungsi 't' (translate)
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const onReady: YouTubeProps["onReady"] = (e) => {
    // Perbaiki tipe onReady
    console.log(e.target);
  };

  // Pastikan ID YouTube-nya hanya ID video, bukan URL lengkap
  // "Eu0IJ6drT-Y?si=xCHz0z8z7WAMASqX" -> "Eu0IJ6drT-Y"
  const youtubeID = "Eu0IJ6drT-Y";

  const opts: YouTubeProps["opts"] = {
    height: "390", // Sesuaikan tinggi default jika perlu
    width: "640", // Sesuaikan lebar default jika perlu
    playerVars: {
      autoplay: 0, // Matikan autoplay secara default
    },
  };

  return (
    <>
      <div className="pt-28 md:pt-44">
        {" "}
        {/* atur sesuai tinggi navbar */}
        <div className="justify-center lg:max-w-[950px] mx-4 md:mx-auto text-center">
          <ScrollAnimationWrapper className={undefined}>
            <motion.div
              variants={scrollAnimation}
              className="text-black font-bold font-Cabin text-3xl md:text-5xl"
            >
              <h1 className="font-bold font-Cabin text-3xl md:text-5xl text-gray-900 drop-shadow-lg">
                {t("aboutHeader.title_part1")}{" "}
                <span className="text-[#ACCB37] drop-shadow-lg">
                  {t("aboutHeader.title_part2")}
                </span>{" "}
                {t("aboutHeader.title_part3")}{" "}
                <span className="text-[#ACCB37] drop-shadow-lg">
                  {t("aboutHeader.title_part4")}
                </span>
              </h1>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="mt-10 md:mx-auto justify-center text-center rounded-xl md:mt-20">
          <ScrollAnimationWrapper className={undefined}>
            <motion.div
              variants={scrollAnimation}
              className="mx-5 md:mx-auto md:w-3/4 lg:max-w-[920px] justify-center text-center aspect-video"
            >
              <YouTube
                videoId={youtubeID}
                opts={opts}
                onReady={onReady}
                className="w-full h-full"
                iframeClassName="w-full h-full rounded-xl shadow-lg"
              />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </>
  );
};

export default Header;
