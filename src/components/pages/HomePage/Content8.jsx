import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation

const Content8 = () => {
  const { t } = useTranslation(); // Dapatkan fungsi 't' (translate)

  return (
    <section className="w-full relative bg-white overflow-hidden py-10 px-4 lg:px-16">
      {/* Desktop Layout */}
      <div className="hidden lg:block relative h-[640px]">
        {/* Judul */}
        <div className="absolute top-[5%] left-1/2 transform -translate-x-1/2 text-center z-10">
          <h2 className="text-[28px] font-bold text-[#004b5c] leading-tight">
            {t("content8.main_title")}
          </h2>
          <p className="text-[#f6a100] font-semibold text-base">
            {t("content8.subtitle")}
          </p>
        </div>

        {/* Gambar dan posisi absolut */}
        <img
          src="/images/landing/produk.png"
          alt={t("content8.image_alt_aerator")}
          className="absolute left-[4%] top-[25%] w-[38%] h-auto object-contain z-0"
        />
        <div className="absolute top-[30%] left-[3%] w-[110px] text-white text-[20px] font-bold leading-tight text-center z-10">
          {t("content8.impact_shrimp_fish_percent")} <br />
          <span className="text-[12px] font-normal">
            {t("content8.impact_shrimp_fish_desc")
              .split("\n")
              .map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index <
                    t("content8.impact_shrimp_fish_desc").split("\n").length -
                      1 && <br />}
                </React.Fragment>
              ))}
          </span>
        </div>
        <div className="absolute bottom-[33%] left-[5%] text-[13px] text-[#f6a100] font-bold z-10">
          {t("content8.eco_aerator_title")} <br />
          <span className="text-[12px] text-black font-normal">
            {t("content8.eco_aerator_desc")
              .split("\n")
              .map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index <
                    t("content8.eco_aerator_desc").split("\n").length - 1 && (
                    <br />
                  )}
                </React.Fragment>
              ))}
          </span>
        </div>
        <div className="absolute top-[25%] left-[32%] text-[13px] text-[#036666] font-bold z-10">
          {t("content8.technology_overview_title")}
        </div>
        <div className="absolute top-[29%] left-[32%] text-[#f6a100] text-[13px] font-bold z-10">
          {t("content8.photovoltaic_title")} <br />
          <span className="text-black text-[12px] font-normal">
            {t("content8.photovoltaic_desc")}
          </span>
        </div>
        <img
          src="/images/landing/content3-1.png"
          alt={t("content8.image_alt_ebii")}
          className="absolute top-[28%] left-[40%] w-[300px] z-10"
        />
        <div className="absolute top-[28%] left-[61%] text-[13px] text-black text-left z-10 w-[150px]">
          <span className="text-[#f6a100] font-semibold">
            {t("content8.ebii_system_title")}
          </span>
          <br />
          {t("content8.ebii_system_desc")
            .split("\n")
            .map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index <
                  t("content8.ebii_system_desc").split("\n").length - 1 && (
                  <br />
                )}
              </React.Fragment>
            ))}
        </div>
        <div className="absolute top-[40%] left-[61%] text-white text-[17px] font-bold leading-tight text-center z-10">
          {t("content8.ghg_reduction_value")}
          <br />
          <span className="text-[12px] font-normal">
            {t("content8.ghg_reduction_desc")}
          </span>
        </div>
        <img
          src="/images/landing/content3-3.png"
          alt={t("content8.image_alt_smart_energy")}
          className="absolute top-[10%] right-[2%] w-[300px] z-10"
        />
        <div className="absolute top-[46%] right-[5%] text-[#f6a100] font-bold text-[14px] text-left z-10 w-[180px]">
          {t("content8.smart_energy_title")} <br />
          <span className="text-black font-normal text-[13px] leading-snug">
            {t("content8.smart_energy_desc")
              .split("\n")
              .map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index <
                    t("content8.smart_energy_desc").split("\n").length - 1 && (
                    <br />
                  )}
                </React.Fragment>
              ))}
          </span>
        </div>
        <img
          src="/images/landing/content8-icon1.jpg"
          alt={t("content8.image_alt_arrow")}
          className="absolute bottom-[17%] right-[10%] w-[120px] rotate-[-180deg] z-10"
        />
        <div className="absolute bottom-[6%] right-[20%] w-[200px] text-[13px] text-black text-left z-10">
          <span className="text-[#f6a100] font-semibold">
            {t("content8.auto_control_highlight")}
          </span>{" "}
          {t("content8.auto_control_desc")
            .split("\n")
            .map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index <
                  t("content8.auto_control_desc").split("\n").length - 1 && (
                  <br />
                )}
              </React.Fragment>
            ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block lg:hidden flex flex-col items-center gap-4 text-center">
        <h2 className="text-[22px] font-bold text-[#004b5c] leading-tight">
          {t("content8.main_title")}
        </h2>
        <p className="text-[#f6a100] font-semibold text-sm">
          {t("content8.subtitle")}
        </p>

        <img
          src="/images/landing/produk.png"
          alt={t("content8.image_alt_aerator")}
          className="w-[80%] object-contain"
        />
        <div className="bg-[#004b5c] px-4 py-2 rounded font-bold text-[18px] text-[#f1f1f1]">
          {t("content8.impact_shrimp_fish_percent")} <br />
          <span className="text-[12px] font-normal block">
            {t("content8.impact_shrimp_fish_desc")
              .split("\n")
              .map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index <
                    t("content8.impact_shrimp_fish_desc").split("\n").length -
                      1 && <br />}
                </React.Fragment>
              ))}
          </span>
        </div>

        <div className="text-[#f6a100] font-bold text-[14px]">
          {t("content8.eco_aerator_title")} <br />
          <span className="text-black font-normal text-[12px]">
            {t("content8.eco_aerator_desc")
              .split("\n")
              .map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index <
                    t("content8.eco_aerator_desc").split("\n").length - 1 && (
                    <br />
                  )}
                </React.Fragment>
              ))}
          </span>
        </div>

        <div className="text-[#036666] font-bold text-[14px]">
          {t("content8.technology_overview_title")}
        </div>
        <div className="text-[#f6a100] font-bold text-[14px]">
          {t("content8.photovoltaic_title")} <br />
          <span className="text-black font-normal text-[12px]">
            {t("content8.photovoltaic_desc")}
          </span>
        </div>

        <img
          src="/images/landing/content3-1.png"
          alt={t("content8.image_alt_ebii")}
          className="w-[70%]"
        />
        <div className="text-black text-[13px]">
          <span className="text-[#f6a100] font-semibold">
            {t("content8.ebii_system_title")}
          </span>
          <br />
          {t("content8.ebii_system_desc")
            .split("\n")
            .map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index <
                  t("content8.ebii_system_desc").split("\n").length - 1 && (
                  <br />
                )}
              </React.Fragment>
            ))}
        </div>
        <div className="bg-[#004b5c] text-[#f1f1f1] text-[15px] px-3 py-1 rounded font-bold">
          {t("content8.ghg_reduction_value")}
          <br />
          <span className="text-[12px] font-normal">
            {t("content8.ghg_reduction_desc")}
          </span>
        </div>

        <img
          src="/images/landing/content3-3.png"
          alt={t("content8.image_alt_smart_energy")}
          className="w-[80%]"
        />
        <div className="text-[#f6a100] font-bold text-[14px]">
          {t("content8.smart_energy_title")} <br />
          <span className="text-black font-normal text-[13px] leading-snug">
            {t("content8.smart_energy_desc")
              .split("\n")
              .map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index <
                    t("content8.smart_energy_desc").split("\n").length - 1 && (
                    <br />
                  )}
                </React.Fragment>
              ))}
          </span>
        </div>

        <img
          src="/images/landing/content8-icon1.jpg"
          alt={t("content8.image_alt_arrow")}
          className="w-[100px] rotate-[-180deg]"
        />
        <div className="text-[13px] text-black">
          <span className="text-[#f6a100] font-semibold">
            {t("content8.auto_control_highlight")}
          </span>{" "}
          {t("content8.auto_control_desc")
            .split("\n")
            .map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index <
                  t("content8.auto_control_desc").split("\n").length - 1 && (
                  <br />
                )}
              </React.Fragment>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Content8;
