/* eslint-disable react/no-children-prop */
import { motion, AnimatePresence } from "framer-motion";
import React, { useMemo, useState, useEffect, useRef } from "react";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../Layout/ScrollAnimationWrapper";
import aboutImg from "/images/landing/WhatsApp Image 2023-02-06 at 11 1.jpg";
import { useTranslation } from "react-i18next";
import { AiOutlineClose } from "react-icons/ai"; // Pastikan ikon ini sudah diinstal

const HeroSection = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [showMore, setShowMore] = useState(false);
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(false); // Atur state awal pop-up menjadi 'false'
  const heroImgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // Timer untuk menampilkan pop-up setelah 1.5 detik
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Ensure the hero image has fetchpriority set for better LCP behavior
  useEffect(() => {
    if (heroImgRef.current) {
      try {
        heroImgRef.current.setAttribute("fetchpriority", "high");
      } catch (e) {
        // ignore
      }
    }
  }, []);

  return (
    <>
      {/* === MODAL POPUP === */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative p-0 max-w-lg w-full mx-4 shadow-2xl rounded-xl overflow-hidden bg-cover bg-center" // Hapus bg-white dan tambahkan kelas untuk background
              style={{
                minWidth: "400px",
                backgroundImage: `url('/images/landing/hueBG.jpg')`,
              }}
            >
              {/* Tombol close */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-black hover:text-gray-600 transition-colors z-10" // Ganti warna teks menjadi hitam agar terlihat di latar putih
              >
                <AiOutlineClose size={24} />
              </button>
              <div className="relative w-full h-full p-8 text-center">
                <h2 className="text-4xl font-bold font-Cabin mb-2 text-crustea-green text-drop-shadow">
                  {t("popup.title")}
                </h2>
                <p className="text-lg font-DMSans mb-6 max-w-sm mx-auto">
                  {t("popup.description")}
                </p>
                <a
                  href="https://wa.me/6282140773592"
                  className="bg-crustea-green text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:bg-green-600"
                  onClick={() => setShowPopup(false)}
                >
                  {t("popup.button_text")}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative bg-gradient-to-b from-white via-blue-50 to-white pt-20 lg:pt-24 pb-20 lg:pb-32 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-1 md:px-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* === Text Side === */}
          <div className="text-left w-full max-w-screen-md ml-auto px-4 lg:pl-24 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-Cabin text-gray-900">
              <span className="block">{t("hero.tagline_part1")}</span>
              <span className="text-crustea-green">
                {t("hero.tagline_part2")}
              </span>
              <br />
              <span className="text-crustea-green">
                {t("hero.tagline_part3")}
              </span>
              <br />
            </h1>
            <br />
            <p className="text-4xl sm:text-5xl lg:text-2xl font-bold leading-tight font-Cabin text-gray-90">
              <i>{t("hero.subtitle")}</i>
            </p>
            <p className="mt-6 text-lg text-gray-510 font-DMSans max-w-xl">
              {t("hero.description")}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-start gap-4">
              <a
                href="http://api.whatsapp.com/send?phone=6282140773592"
                className="bg-crustea-green hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                {t("hero.contact_us_button")}
              </a>
              <a
                href="/products"
                className="border border-crustea-green text-crustea-green hover:bg-crustea-green hover:text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                {t("hero.get_products_button")}
              </a>
            </div>
          </div>
          {/* === Image Side === */}
          <div className="w-full flex justify-center mb-12 md:mb-0 animate-fadeIn">
            <div className="relative w-full max-w-[800px]">
              <img
                ref={heroImgRef}
                src="/images/landing/banner_1.webp"
                alt="Shrimpr Person"
                className="w-full h-auto rounded-xl shadow-x"
              />
              {/* <div className="absolute -bottom-24 right-0 md:right-12 bg-white rounded-2xl shadow-xl w-60 px-5 py-4 z-30 border border-gray-100 animate-fade-in-up transition-transform duration-700 ease-out hover:scale-105">
                <p className="text-base font-semibold mb-3 text-[#ACCB37] tracking-wide">
                  {t('hero.product_label')}
                </p>
                <img
                  src="/images/landing/sistem.png"
                  alt="Crustea Product"
                  className="w-full h-auto rounded-md max-h-28 object-contain transition-all duration-500 ease-in-out"
                />
              </div> */}
            </div>
          </div>
        </div>
        {/* Background Circle Element */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl z-0"></div>
      </section>

      {/* === LANDING BANNER SECTION === */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden">
        {/* background image dengan opacity */}
        {/* === BACKGROUND SLIDESHOW === */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="slideshow absolute inset-0 w-full h-full">
            <div
              className="slide bg-cover bg-center opacity-20"
              style={{
                backgroundImage: "url('/images/landing/banner_1.webp')",
              }}
            ></div>
            <div
              className="slide bg-cover bg-center opacity-20"
              style={{
                backgroundImage: "url('/images/landing/banner_2.webp')",
              }}
            ></div>
            <div
              className="slide bg-cover bg-center opacity-20"
              style={{
                backgroundImage: "url('/images/landing/banner_3.webp')",
              }}
            ></div>
          </div>

          <style jsx>{`
            .slideshow {
              display: flex;
              width: 300%;
              height: 100%;
              animation: slideShow 18s infinite;
            }
            .slide {
              flex: 0 0 100%;
              background-size: cover;
              background-position: center;
            }

            @keyframes slideShow {
              0% {
                transform: translateX(0%);
              }
              30% {
                transform: translateX(0%);
              }
              35% {
                transform: translateX(-100%);
              }
              65% {
                transform: translateX(-100%);
              }
              70% {
                transform: translateX(-200%);
              }
              95% {
                transform: translateX(-200%);
              }
              100% {
                transform: translateX(0%);
              }
            }

            /* Mobile menyesuaikan fokus gambar */
            @media (max-width: 768px) {
              .slide {
                background-position: center top;
              }
            }
          `}</style>
        </div>

        {/* Overlay gelap agar teks terbaca */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* === LEFT: Headline & Join Form === */}
          <div className="space-y-8 text-white text-center lg:text-left">
            <div className="max-w-xl mx-auto lg:mx-0">
              <style>{`
          .headline-title {
            color: #184a54db; /* Biru Crustea */
          }
        `}</style>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight headline-title">
                {t("landing_banner.headline_1")}{" "}
                <span>{t("landing_banner.headline_crustea")}</span>
              </h1>
              <p
                className="text-base sm:text-lg mt-4"
                style={{ color: "#13556E" }}
              >
                {t("landing_banner.subheadline")}
              </p>
            </div>

            <form
              action="https://docs.google.com/forms/d/e/FORM_ID/formResponse"
              method="POST"
              target="_blank"
              className="backdrop-blur-md bg-crustea-green/10 border border-white/10 rounded-2xl p-6 w-full max-w-md mx-auto lg:mx-0 space-y-4 shadow-lg"
            >
              <input
                name="entry.123456"
                type="text"
                placeholder={t("landing_banner.form_name")}
                className="w-full px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-crustea"
                required
              />
              <input
                name="entry.654321"
                type="email"
                placeholder={t("landing_banner.form_email")}
                className="w-full px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-crustea"
                required
              />
              <input
                name="entry.987654"
                type="tel"
                placeholder={t("landing_banner.form_phone")}
                className="w-full px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-crustea"
                required
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-crustea-green hover:bg-crustea/90 text-white font-semibold transition shadow-md hover:shadow-xl"
              >
                {t("landing_banner.form_button")}
              </button>
            </form>
          </div>

          {/* === RIGHT: Video Slider === */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[260px] sm:w-[300px] md:w-[340px] lg:w-[360px] xl:w-[400px] h-[500px] sm:h-[540px] md:h-[600px] xl:h-[640px] overflow-hidden rounded-3xl shadow-2xl border border-white/10 bg-white/5">
              <div className="flex snap-x snap-mandatory overflow-x-auto scrollbar-none">
                {[
                  "/images/landing/videos/content1.mp4",
                  "/images/landing/videos/content2.mp4",
                  "/images/landing/videos/content3.mp4",
                ].map((src, i) => (
                  <video
                    key={i}
                    src={src}
                    className="w-full h-full object-cover rounded-3xl flex-shrink-0 snap-center"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === ABOUT SECTION === */}
      <div
        className="max-w-screen-xl px-8 xl:px-16 mx-auto"
        id="about"
        style={{ backgroundColor: "#eff9fcff" }}
      >
        <div className="flex flex-col items-center" id="company-purpose">
          <ScrollAnimationWrapper>
            <motion.div variants={scrollAnimation}>
              <h3 className="opacity-100 text-green-600 pt-5 md:pt-10 font-Cabin font-bold text-3xl md:text-5xl py-20 text-center">
                {t("hero.uncover_story_heading_part1")}{" "}
                <span style={{ color: "#ACCB37" }}>
                  {t("hero.uncover_story_heading_part2")}
                </span>
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
                  {t("hero.dedicated_to_heading_part1")}{" "}
                  <span style={{ color: "#ACCB37" }}>
                    {t("hero.dedicated_to_heading_part2")}
                  </span>{" "}
                  {t("hero.dedicated_to_heading_part3")}
                </h3>
                <p className="font-DMSans text-[17px] pt-6 text-justify text-black-600">
                  {t("hero.about_paragraph1")}
                </p>
                <motion.div
                  key="learnMoreText"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <p className="font-DMSans text-[17px] pt-3 text-justify text-black-600">
                    {t("hero.about_paragraph2")}
                  </p>
                </motion.div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
