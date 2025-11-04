import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation

const Content10 = () => {
  const { t } = useTranslation(); // Dapatkan fungsi 't' (translate)

  return (
    <section className="relative w-full py-12 px-4 lg:px-16 bg-white overflow-hidden">
      {/* Background Image + Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/images/landing/content10-icon1.png')] bg-cover bg-100% opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Image Section - Left */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="/images/landing/content10.webp"
            alt={t("content10.image_alt_shrimp_in_hand")}
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>

        {/* Text Section - Right */}
        <div>
          <h2 className="text-[#004b5c] text-2xl lg:text-3xl font-bold mb-2">
            {t("content10.main_title")}
          </h2>
          <p className="text-[#f6a100] font-semibold text-sm lg:text-base mb-6">
            {t("content10.subtitle")}
          </p>

          <h3 className="text-[#004b5c] text-lg font-bold mb-2">
            {t("content10.section_title_capacity_building")}
          </h3>
          <p className="text-gray-700 text-sm lg:text-base leading-relaxed text-justify mb-6">
            {t("content10.description")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {/* Detail */}
            <div>
              <h4 className="font-semibold text-[#004b5c] mb-2">
                {t("content10.detail_title")}
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>{t("content10.detail_item1")}</li>
                <li>
                  {t("content10.detail_item2_part1")}
                  <sup>{t("content10.detail_item2_part2")}</sup>
                  {t("content10.detail_item2_part3")}
                  <sup>{t("content10.detail_item2_part4")}</sup>
                  {t("content10.detail_item2_part5")}
                </li>
                <li>{t("content10.detail_item3_part1")}</li>
              </ul>
            </div>

            {/* KPI */}
            <div>
              <h4 className="font-semibold text-[#004b5c] mb-2">
                {t("content10.kpi_title")}
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>
                  <strong>{t("content10.kpi_item1_highlight")}</strong>{" "}
                  {t("content10.kpi_item1_text")}
                </li>
                <li>
                  <strong>{t("content10.kpi_item2_highlight")}</strong>{" "}
                  {t("content10.kpi_item2_text")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content10;
