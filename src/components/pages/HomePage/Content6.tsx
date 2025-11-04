import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation

const Content6 = () => {
  const { t } = useTranslation(); // Dapatkan fungsi 't' (translate)

  // Data untuk ikon SDG
  const sdgIcons = [
    { src: "/images/landing/content6-icon1.png", altKey: "content6.sdg1_alt" },
    { src: "/images/landing/content6-icon2.png", altKey: "content6.sdg2_alt" },
    { src: "/images/landing/content6-icon3.png", altKey: "content6.sdg7_alt" },
    { src: "/images/landing/content6-icon4.png", altKey: "content6.sdg14_alt" },
    { src: "/images/landing/content6-icon5.png", altKey: "content6.sdg13_alt" },
  ];

  // Data untuk kartu metrik dampak
  const impactMetrics = [
    {
      valueKey: "content6.impact_shrimp_fish_quality_value",
      descriptionKey: "content6.impact_shrimp_fish_quality_description",
    },
    {
      valueKey: "content6.impact_operational_cost_saving_value",
      descriptionKey: "content6.impact_operational_cost_saving_description",
    },
    {
      valueKey: "content6.impact_ghg_reduction_value",
      descriptionKey: "content6.impact_ghg_reduction_description",
    },
    {
      valueKey: "content6.impact_women_management_value",
      descriptionKey: "content6.impact_women_management_description",
    },
  ];

  return (
    <section
      className="relative py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex flex-col justify-center"
      style={{
        background:
          "linear-gradient(to bottom, #ffffff 0%, #ffffff 5%, var(--color-crustea-light-green,rgba(208, 249, 155, 0.17)) 20%, #ffffff 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Business Model Title */}
        <div className="mb-8 md:mb-10 lg:mb-12 text-center">
          <span
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide"
            style={{
              color: "var(--color-crustea-dark-blue,rgb(157, 215, 32))",
            }}
          >
            {t("content6.business_model_title_part1")}{" "}
            {/* Terjemahkan "Business" */}
          </span>
          &nbsp;
          <span
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide"
            style={{ color: "var(--color-crustea-dark-blue,rgb(36, 82, 134))" }}
          >
            {t("content6.business_model_title_part2")}{" "}
            {/* Terjemahkan "Model" */}
          </span>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* B2B Section */}
          <div className="col-span-1 flex flex-col items-center">
            <div
              className={`
                relative rounded-xl bg-white shadow-lg p-6 md:p-8 lg:p-10 flex flex-col items-center
                border border-solid
                transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl
              `}
              style={{
                borderColor: "var(--color-crustea-accent-blue,rgb(7, 61, 83))",
              }}
            >
              {/* B2B Icon / Graphic (SVG remains as is for now) */}
              <div
                className="relative w-28 h-28 rounded-full flex items-center justify-center mb-4"
                style={{
                  backgroundColor: "var(--color-crustea-light-blue, #DDEBF0)",
                  color: "var(--color-crustea-dark-blue,rgb(34, 85, 157))",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-4 right-4 h-9 w-9 opacity-70"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                  style={{ color: "var(--color-crustea-dark-blue, #192E4C)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>

              <div
                className="flex items-center text-xl font-semibold mb-2"
                style={{ color: "var(--color-crustea-dark-blue, #192E4C)" }}
              >
                <span className="mr-2">B</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 rotate-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  style={{ color: "var(--color-crustea-accent-blue, #237392)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7l4-4m0 0l4 4m-4-4v18"
                  />
                </svg>
                <span className="ml-2">B</span>
              </div>
              <ul className="list-none text-base text-gray-700 text-center font-medium">
                <li className="mb-1">{t("content6.b2b_farmers")}</li>{" "}
                {/* Terjemahkan "Pond Farmers" */}
                <li>{t("content6.b2b_sectors")}</li>{" "}
                {/* Terjemahkan "Public/Private Sectors" */}
              </ul>
            </div>
            {/* Arrow indicating flow towards products/services */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mt-6 md:mt-8 animate-bounce-arrow"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              style={{ color: "var(--color-crustea-accent-green, #2E8B57)" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>

          {/* Products (Technology) */}
          <div className="col-span-1">
            <div
              className={`
                rounded-xl bg-white shadow-lg p-6 md:p-8 lg:p-10 h-full flex flex-col items-center text-center
                border border-solid
                transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl
              `}
              style={{
                borderColor: "var(--color-crustea-accent-blue, #237392)",
              }}
            >
              <h3
                className="text-xl font-bold mb-6"
                style={{
                  color: "var(--color-crustea-dark-blue,rgb(13, 62, 130))",
                }}
              >
                {t("content6.products_technology_title")}{" "}
                {/* Terjemahkan "Products (Technology)" */}
              </h3>
              <div className="grid grid-cols-3 gap-4 md:gap-6 flex-grow items-center">
                {/* Direct Selling Card */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-2 shadow-sm"
                    style={{
                      backgroundColor:
                        "var(--color-crustea-light-green, #DDEBF0)",
                      color: "var(--color-crustea-accent-green, #2E8B57)",
                    }}
                  >
                    {/* Hand with plant icon (SVG remains as is) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.085 15.352a.417.417 0 00.584 0l.968-.783a4.024 4.024 0 015.35 1.579L21.36 17.65a.5.5 0 01-.194.887l-2.071.492a4.024 4.024 0 01-2.915-1.12l-1.397-.998a4.024 4.024 0 00-5.467 1.13L3.64 20.35a.5.5 0 01-.887-.194l-.492-2.071a4.024 4.024 0 011.12-2.915l.998-1.397a4.024 4.024 0 00-1.13-5.467l-.783-.968a.417.417 0 010-.584l-.51-.639a.5.5 0 01.32-.871l2.071.492a4.024 4.024 0 012.915-1.12l1.397-.998a4.024 4.024 0 005.467 1.13l.968-.783a.417.417 0 01.584 0l.639.51a.5.5 0 01.871-.32l-.492-2.071a4.024 4.024 0 011.12-2.915l.998-1.397a4.024 4.024 0 00-1.13-5.467l-.783-.968a.417.417 0 010-.584"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18V6"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-700 font-medium">
                    {t("content6.direct_selling_label")}
                  </p>{" "}
                  {/* Terjemahkan "Direct Selling" */}
                </div>
                {/* Leasing Card */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-2 shadow-sm"
                    style={{
                      backgroundColor:
                        "var(--color-crustea-light-blue, #DDEBF0)",
                      color: "var(--color-crustea-accent-blue, #237392)",
                    }}
                  >
                    {/* Key icon (SVG remains as is) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 7a2 2 0 012 2v1a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2h6zM7 11a4 4 0 11-8 0 4 4 0 018 0zm-3 0a1 1 0 10-2 0 1 1 0 002 0zm10-5a1 1 0 100-2 1 1 0 000 2zM19 19a1 1 0 100-2 1 1 0 000 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-700 font-medium">
                    {t("content6.leasing_label")}
                  </p>{" "}
                  {/* Terjemahkan "Leasing" */}
                </div>
                {/* PaaS/SaaS Card */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-2 shadow-sm"
                    style={{
                      backgroundColor:
                        "var(--color-crustea-light-blue, #DDEBF0)",
                      color: "var(--color-crustea-accent-blue, #237392)",
                    }}
                  >
                    {/* Person with data streams icon (SVG remains as is) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5l7 7-7 7M10 9l3-3m0 0L7 3m6 6l-3 3m0 0L7 9m6 6l-3-3m0 0L7 15"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-700 font-medium">
                    {t("content6.paas_saas_label")}
                  </p>{" "}
                  {/* Terjemahkan "PaaS/SaaS" */}
                </div>
              </div>
            </div>
          </div>

          {/* Services & Other Revenue */}
          <div className="col-span-1">
            <div
              className={`
                rounded-xl bg-white shadow-lg p-6 md:p-8 lg:p-10 h-full
                border border-solid
                transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl
              `}
              style={{
                borderColor: "var(--color-crustea-accent-blue, #237392)",
              }}
            >
              <h3
                className="text-xl font-bold mb-6"
                style={{
                  color: "var(--color-crustea-dark-blue,rgb(24, 71, 138))",
                }}
              >
                {t("content6.services_revenue_title")}{" "}
                {/* Terjemahkan "Services & Other Revenue:" */}
              </h3>
              <ul className="list-disc list-inside text-base text-gray-700 space-y-3 font-medium">
                <li>{t("content6.shrimp_trading_products")}</li>{" "}
                {/* Terjemahkan item */}
                <li>{t("content6.projects")}</li> {/* Terjemahkan item */}
                <li>{t("content6.consulting_technical_assistance")}</li>{" "}
                {/* Terjemahkan item */}
                <li>{t("content6.technology_maintenance_repair")}</li>{" "}
                {/* Terjemahkan item */}
              </ul>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 md:mt-12 lg:mt-16">
          <div
            className={`
              flex flex-col items-center rounded-xl bg-white shadow-md p-6 md:p-8
              border border-solid
              transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg
            `}
            style={{ borderColor: "var(--color-crustea-accent-blue, #237392)" }}
          >
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center mb-3"
              style={{
                backgroundColor: "var(--color-crustea-light-blue, #DDEBF0)",
                color: "var(--color-crustea-dark-blue, #192E4C)",
              }}
            >
              <span className="text-3xl font-extrabold">
                {t("content6.production_capacity_value")}
              </span>{" "}
              {/* Terjemahkan nilai */}
              <span className="text-lg ml-1 font-semibold">
                {t("content6.production_capacity_unit")}
              </span>{" "}
              {/* Terjemahkan unit */}
            </div>
            <p
              className="text-lg font-semibold text-center mt-2"
              style={{
                color: "var(--color-crustea-dark-blue,rgb(28, 67, 120))",
              }}
            >
              {t("content6.production_capacity_label")}{" "}
              {/* Terjemahkan label */}
            </p>
            <p className="text-base text-gray-700 text-center">
              {t("content6.production_capacity_timeframe")}
            </p>{" "}
            {/* Terjemahkan timeframe */}
          </div>
          <div
            className={`
              flex flex-col items-center rounded-xl bg-white shadow-md p-6 md:p-8
              border border-solid
              transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg
            `}
            style={{
              borderColor: "var(--color-crustea-accent-blue,rgb(22, 87, 113))",
            }}
          >
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center mb-3"
              style={{
                backgroundColor: "var(--color-crustea-light-green, #DDEBF0)",
                color: "var(--color-crustea-accent-green, #2E8B57)",
              }}
            >
              <span className="text-3xl font-extrabold">
                {t("content6.revenue_projected_value")}
              </span>{" "}
              {/* Terjemahkan nilai */}
            </div>
            <p
              className="text-lg font-semibold text-center mt-2"
              style={{
                color: "var(--color-crustea-dark-blue,rgb(29, 70, 127))",
              }}
            >
              {t("content6.revenue_projected_label")} {/* Terjemahkan label */}
            </p>
            <p className="text-base text-gray-700 text-center">
              {t("content6.revenue_projected_year")}
            </p>{" "}
            {/* Terjemahkan tahun */}
          </div>
          <div
            className={`
              flex flex-col items-center rounded-xl bg-white shadow-md p-6 md:p-8
              border border-solid
              transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg
            `}
            style={{ borderColor: "var(--color-crustea-accent-blue, #237392)" }}
          >
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center mb-3"
              style={{
                backgroundColor: "var(--color-crustea-light-blue, #DDEBF0)",
                color: "var(--color-crustea-dark-blue, #192E4C)",
              }}
            >
              <span className="text-3xl font-extrabold">
                {t("content6.gross_margin_value")}
              </span>{" "}
              {/* Terjemahkan nilai */}
            </div>
            <p
              className="text-lg font-semibold text-center mt-2"
              style={{
                color: "var(--color-crustea-dark-blue,rgb(28, 61, 106))",
              }}
            >
              {t("content6.gross_margin_label")} {/* Terjemahkan label */}
            </p>
          </div>
        </div>

        {/* Our Impact Section */}
        <div
          className={`
            mt-10 md:mt-12 lg:mt-16 rounded-xl bg-white shadow-lg p-6 md:p-8 lg:p-10
            border border-solid
            transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl
          `}
          style={{ borderColor: "var(--color-crustea-accent-blue, #237392)" }}
        >
          <h3
            className="text-xl font-bold mb-6 text-center"
            style={{ color: "var(--color-crustea-dark-blue,rgb(26, 70, 132))" }}
          >
            {t("content6.our_impact_title")} {/* Terjemahkan "Our Impact" */}
          </h3>

          {/* Baris Atas: Ikon SDG (5 ikon) */}
          <div className="flex justify-center items-center flex-wrap gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-10">
            {sdgIcons.map((icon, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-20 h-20 bg-white rounded-xl shadow-md"
              >
                <img
                  src={icon.src}
                  alt={t(icon.altKey)}
                  className="w-16 h-16 object-contain"
                />{" "}
                {/* Terjemahkan alt text */}
              </div>
            ))}
          </div>

          {/* Baris Bawah: Kartu Metrik (4 kartu) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {impactMetrics.map((metric, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg"
              >
                <p
                  className="text-xl font-bold text-crustea-dark-blue mb-2"
                  style={{
                    color: "var(--color-crustea-dark-blue,rgb(28, 61, 106))",
                  }}
                >
                  {t(metric.valueKey)} {/* Terjemahkan nilai */}
                </p>
                <p className="text-sm font-semibold text-gray-700 leading-relaxed">
                  {t(metric.descriptionKey)} {/* Terjemahkan deskripsi */}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content6;
