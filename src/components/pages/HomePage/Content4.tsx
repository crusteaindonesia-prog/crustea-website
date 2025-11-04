import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation

const Arrow = ({ direction = "right" }) => {
  const rotation =
    direction === "down"
      ? "rotate-[135deg]"
      : direction === "left"
      ? "rotate-[225deg]"
      : direction === "up"
      ? "rotate-[-45deg]"
      : "rotate-45"; // right
  return (
    <div
      className={`w-3 h-3 border-t-2 border-r-2 border-[#70893E] ${rotation}`}
    />
  );
};

const Content4 = () => {
  const { t } = useTranslation(); // Dapatkan fungsi 't' (translate)

  const step1Items = [
    {
      icon: "/images/landing/content4-icon1.png",
      labelKey: "content4.education_label",
    },
    {
      icon: "/images/landing/content4-icon2.png",
      labelKey: "content4.open_project_label",
    },
  ];

  const bottomRowItems = [
    {
      icon: "/images/landing/content4-icon7.png",
      labelKey: "content4.fnb_label",
    },
    {
      icon: "/images/landing/content4-icon8.png",
      labelKey: "content4.food_processing_label",
    },
    {
      icon: "/images/landing/content4-icon9.png",
      labelKey: "content4.preservation_label",
    },
  ];

  return (
    <section className="relative bg-white-30 py-16 px-4 md:px-10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/landing/bg_content4.jpg"
          alt="Background"
          className="w-relative h-full object-cover opacity-10"
        />
      </div>

      <div className="max-w-screen-xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-[#08556b] text-center mb-10">
          {t("content4.heading")} {/* Terjemahkan judul utama */}
        </h2>

        {/* Flow Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 relative">
          {/* Step 1 */}
          <div className="flex flex-col gap-6 items-center w-full lg:w-[15%]">
            {step1Items.map((item, i) => (
              <React.Fragment key={item.labelKey}>
                <div className="bg-[#ffffff] shadow rounded-xl px-4 py-3 text-center text-sm text-gray-600 font-semibold flex flex-col items-center">
                  <img
                    src={item.icon}
                    alt={t(item.labelKey)}
                    className="h-24 mb-2"
                  />
                  {t(item.labelKey)} {/* Terjemahkan label */}
                </div>
                {i === 0 && (
                  <div className="lg:hidden">
                    <Arrow direction="down" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Arrow between blocks (horizontal) */}
          <div className="hidden lg:block">
            <Arrow direction="right" />
          </div>

          {/* Step 2 - Shrimp Cultivation */}
          <div className="w-full lg:w-[20%] flex flex-col items-center text-center">
            <div className="bg-[#cedc96] rounded-2xl px-4 py-6 flex flex-col items-center w-full max-w-[200px]">
              <h3 className="font-bold text-[#3C6511] mb-2 text-sm">
                {t("content4.shrimp_cultivation_title")}{" "}
                {/* Terjemahkan judul */}
              </h3>
              <img
                src="/images/landing/content4-1.png"
                alt={t("content4.shrimp_cultivation_title")}
                className="h-32"
              />
            </div>
          </div>

          {/* Arrow */}
          <div className="lg:block hidden">
            <Arrow direction="right" />
          </div>
          <div className="lg:hidden">
            <Arrow direction="down" />
          </div>

          {/* Step 3 - Pre Cultivation */}
          <div className="w-full lg:w-[20%] flex flex-col items-center text-center">
            <div className="bg-[#b7d266] text-white font-semibold px-4 py-1 rounded-t-md text-sm">
              {t("content4.pre_cultivation_tech_label")}{" "}
              {/* Terjemahkan label "Technology" */}
            </div>
            <div className="bg-[#ffffff] shadow rounded-b-xl px-4 py-5 flex flex-col items-center gap-4 w-full text-sm">
              <div className="flex flex-col items-center">
                <img
                  src="/images/landing/content4-icon3.png"
                  alt={t("content4.funding_aqua_input_label")}
                  className="h-50 mb-1"
                />
                <p className="text-[#3C6511] font-semibold text-center whitespace-pre-line">
                  {t("content4.funding_aqua_input_label")}{" "}
                  {/* Terjemahkan teks ini */}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/images/landing/content4-icon4.png"
                  alt={t("content4.consultation_label")}
                  className="h-50 mb-1"
                />
                <p className="text-[#3C6511] font-semibold">
                  {t("content4.consultation_label")}{" "}
                  {/* Terjemahkan label "Consultation" */}
                </p>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="lg:block hidden">
            <Arrow direction="right" />
          </div>
          <div className="lg:hidden">
            <Arrow direction="down" />
          </div>

          {/* Step 4 - During Cultivation */}
          <div className="w-full lg:w-[25%] flex flex-col items-center text-center">
            <div className="bg-[#b7d266] text-white font-semibold px-4 py-1 rounded-t-md text-sm">
              {t("content4.during_cultivation_tech_label")}{" "}
              {/* Terjemahkan label "Technology" */}
            </div>
            <div className="bg-[#ffffff] shadow rounded-b-xl px-4 py-5 w-full flex flex-col items-center text-sm">
              <img
                src="/images/landing/content4-2.png"
                alt={t("content4.during_cultivation_details")}
                className="h-28 object-contain mb-2"
              />
              <p className="text-[#3C6511] font-semibold">
                {t("content4.during_cultivation_details")}{" "}
                {/* Terjemahkan detail teknologi */}
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="lg:block hidden">
            <Arrow direction="right" />
          </div>
          <div className="lg:hidden">
            <Arrow direction="down" />
          </div>

          {/* Step 5 - Post Cultivation */}
          <div className="w-full lg:w-[20%] flex flex-col items-center text-center">
            <div className="bg-[#b7d266] text-white font-semibold px-4 py-1 rounded-t-md text-sm">
              {t("content4.post_cultivation_tech_label")}{" "}
              {/* Terjemahkan label "Technology" */}
            </div>
            <div className="bg-white shadow rounded-b-xl px-4 py-5 w-full flex flex-col items-center gap-4 text-sm">
              <div>
                <img
                  src="/images/landing/content4-icon5.png"
                  alt={t("content4.marketplace_label")}
                  className="h-50 mb-1 mx-auto"
                />
                <p className="text-[#3C6511] font-semibold">
                  {t("content4.marketplace_label")}{" "}
                  {/* Terjemahkan label "Marketplace" */}
                </p>
              </div>
              <div>
                <img
                  src="/images/landing/content4-icon6.png"
                  alt={t("content4.global_selling_label")}
                  className="h-50 mb-1 mx-auto"
                />
                <p className="text-[#3C6511] font-semibold">
                  {t("content4.global_selling_label")}{" "}
                  {/* Terjemahkan label "Global Selling / Shipping" */}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">
          {bottomRowItems.map((item, i) => (
            <div
              key={item.labelKey} // Gunakan labelKey sebagai key yang stabil
              className="bg-white shadow rounded-xl px-4 py-4 text-center text-sm text-gray-600 font-semibold flex flex-col items-center w-36"
            >
              <img
                src={item.icon}
                alt={t(item.labelKey)}
                className="h-26 mb-2 rounded-xl"
              />
              {t(item.labelKey)} {/* Terjemahkan label */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content4;
