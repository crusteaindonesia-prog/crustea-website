import React from "react";
import { useTranslation } from "react-i18next";

const LandingBanner = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-screen flex items-start lg:items-center overflow-hidden bg-[#0b1d2a] pt-32 sm:pt-36 lg:pt-0">
      {/* Background image + overlay gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 animate-slow-zoom"
        style={{ backgroundImage: "url('/images/landing/banner_2.webp')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* LEFT: Headline + form */}
        <div className="space-y-8 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug sm:leading-tight drop-shadow-xl text-[#9BCB3C] break-words">
            {t("landing_banner.headline_1")}{" "}
            <span className="text-[#F7E6EE]">
              {t("landing_banner.headline_crustea")}
            </span>
            {/* Underline glow */}
            <span className="block w-1/2 lg:w-1/3 h-[4px] mt-4 bg-[#9BCB3C] rounded-full blur-[3px] opacity-90 mx-auto lg:mx-0"></span>
          </h1>

          <p className="text-base sm:text-lg mt-4 opacity-95 max-w-md leading-relaxed text-[#F9F1F1] mx-auto lg:mx-0">
            {t("landing_banner.subheadline")}
          </p>

          <form
            action="https://docs.google.com/forms/d/e/FORM_ID/formResponse"
            method="POST"
            target="_blank"
            className="backdrop-blur-xl bg-white/50 border border-[#08556b]/30 rounded-2xl p-6 w-full max-w-md space-y-4 shadow-xl hover:shadow-[#08556b]/30 transition mx-auto lg:mx-0"
          >
            <input
              name="entry.123456"
              type="text"
              placeholder={t("landing_banner.form_name")}
              className="w-full px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9BCB3C]"
              required
            />
            <input
              name="entry.654321"
              type="email"
              placeholder={t("landing_banner.form_email")}
              className="w-full px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9BCB3C]"
              required
            />
            <input
              name="entry.987654"
              type="tel"
              placeholder={t("landing_banner.form_phone")}
              className="w-full px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9BCB3C]"
              required
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#9BCB3C] hover:bg-[#85b12f] text-white font-semibold shadow-lg hover:shadow-xl transform transition hover:scale-105"
            >
              {t("landing_banner.form_button")}
            </button>
          </form>
        </div>

        {/* RIGHT: video slider */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[260px] sm:w-[300px] md:w-[320px] h-[440px] sm:h-[500px] md:h-[580px] overflow-hidden rounded-3xl shadow-2xl border border-white/20 bg-white/10 group">
            <div className="flex snap-x snap-mandatory overflow-x-auto scrollbar-none">
              {[
                "/images/landing/videos/content1.mp4",
                "/images/landing/videos/content2.mp4",
                "/images/landing/videos/content3.mp4",
              ].map((src, i) => (
                <video
                  key={i}
                  src={src}
                  className="w-full h-full object-cover rounded-3xl flex-shrink-0 snap-center group-hover:brightness-110 transition"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ))}
            </div>
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>
            {/* Glow border subtle */}
            <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#9BCB3C]/60 transition"></div>
          </div>
        </div>
      </div>

      {/* Animasi background slow zoom */}
      <style jsx>{`
        @keyframes slow-zoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.08);
          }
        }
        .animate-slow-zoom {
          animation: slow-zoom 25s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default LandingBanner;
