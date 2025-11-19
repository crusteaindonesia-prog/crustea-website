import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation

const Content7 = () => {
  const { t } = useTranslation(); // Dapatkan fungsi 't' (translate)

  return (
    <section className="relative py-16 px-6 sm:px-10 bg-gradient-to-r from-[#e4f4e5] via-[#f7fdf7] to-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Text */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#11445f]">
            {t("content7.main_title")} {/* Terjemahkan judul utama */}
          </h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-[#f6a100]">
            {t("content7.subtitle")} {/* Terjemahkan sub-judul */}
          </h3>
          <p className="text-gray-700 text-base leading-relaxed text-justify">
            {t("content7.description_part1")} {/* Terjemahkan bagian 1 */}
            <span className="text-[#f6a100] font-semibold">
              {t("content7.description_part2_highlight")}{" "}
              {/* Terjemahkan bagian 2 yang disorot */}
            </span>
            <br />
            {t("content7.description_part3")} {/* Terjemahkan bagian 3 */}
          </p>

          <div className="bg-white shadow-md p-6 rounded-xl w-full max-w-md">
            <h4 className="text-lg font-semibold text-[#11445f] mb-3">
              {t("content7.potential_impact_title")}{" "}
              {/* Terjemahkan "Potential Impact" */}
            </h4>
            <ul className="list-disc list-inside text-gray-800 space-y-1 text-sm sm:text-base">
              <li>{t("content7.impact_item1")}</li>{" "}
              {/* Terjemahkan item dampak 1 */}
              <li>{t("content7.impact_item2")}</li>{" "}
              {/* Terjemahkan item dampak 2 */}
              <li>{t("content7.impact_item3")}</li>{" "}
              {/* Terjemahkan item dampak 3 */}
            </ul>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 relative z-10 px-0">
          <img
            src="/images/landing/content7.png"
            alt={t("content7.image_alt_aerator")} // Komentar dihapus dari sini
            className="w-full max-w-[600px] mx-auto relative z-10"
          />
          {/* Background Image Behind Devices */}
          <img
            src="/images/landing/content7-icon1.png"
            alt={t("content7.image_alt_background")} // Komentar dihapus dari sini
            className="absolute top-1 lg:top-0 right-0 w-full max-w-[450px] opacity-70 z-0"
            style={{ transform: "translateY(-30%)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Content7;
