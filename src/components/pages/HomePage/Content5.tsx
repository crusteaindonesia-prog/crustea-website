import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation

const Content5 = () => {
  const { t } = useTranslation(); // Dapatkan fungsi 't' (translate)

  // Data untuk setiap kartu layanan, sekarang dengan kunci terjemahan
  const servicesData = [
    {
      titleKey: "content5.service1_title",
      descriptionKey: "content5.service1_description",
    },
    {
      titleKey: "content5.service2_title",
      descriptionKey: "content5.service2_description",
    },
    {
      titleKey: "content5.service3_title",
      descriptionKey: "content5.service3_description",
    },
    {
      titleKey: "content5.service4_title",
      descriptionKey: "content5.service4_description",
    },
    {
      titleKey: "content5.service5_title",
      descriptionKey: "content5.service5_description",
    },
    {
      titleKey: "content5.service6_title",
      descriptionKey: "content5.service6_description",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative py-8 sm:py-12 px-4 md:px-6 overflow-hidden min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/landing/content5.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(252, 252, 252, 0.69)",
        backgroundBlendMode: "lighten",
      }}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#d0e0d2] to-crustea-lightGreen opacity-75"></div>

      <div className="max-w-screen-xl mx-auto relative z-10 w-full">
        {/* Judul Utama dengan Gradien Warna Crustea */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8 md:mb-10 tracking-wide leading-tight"
          style={{
            backgroundImage: `linear-gradient(to right,rgb(25, 46, 76),rgb(35, 115, 146))`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent", // Fallback
          }}
        >
          {t("content5.heading")} {/* Terjemahkan judul utama */}
        </h2>

        {/* Grid Layanan dengan Aksi Buka/Tutup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-5 justify-center">
          {servicesData.map((service, index) => {
            const isOpen = openIndex === index;
            const panelId = `service-panel-${index}`;
            const headerId = `service-header-${index}`;
            const headerManualTextColorTitle = "#465057";
            const headerManualTextColorDescription = "#152e79";

            return (
              <div
                key={index}
                className={`
                  relative
                  rounded-xl p-4
                  transition-all duration-300 ease-in-out
                  overflow-hidden
                  
                  bg-white shadow-md border border-gray-200
                  
                  ${
                    isOpen
                      ? "shadow-lg border-crustea-accentPurple bg-crustea-lightGreen"
                      : ""
                  }
                  
                  ${isOpen ? "animate-powerful-glow" : ""} 
                `}
              >
                {/* Tombol Judul - Area yang bisa diklik */}
                <button
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex justify-between items-center w-full text-left cursor-pointer focus:outline-none py-1.5"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3
                    className="text-lg sm:text-xl font-semibold leading-snug pr-4"
                    style={{ color: headerManualTextColorTitle }}
                  >
                    {t(service.titleKey)} {/* Terjemahkan judul layanan */}
                  </h3>
                  {/* Ikon panah yang berputar */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 text-crustea-accentPurple transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Konten Deskripsi yang bisa dibuka/ditutup */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`
                    transition-all duration-500 ease-in-out
                    ${
                      isOpen
                        ? "max-h-[500px] opacity-100 pt-2"
                        : "max-h-0 opacity-0 pt-0"
                    }
                  `}
                >
                  <p
                    className="text-sm text-gray-700 leading-relaxed"
                    style={{ color: headerManualTextColorDescription }}
                  >
                    {t(service.descriptionKey)}{" "}
                    {/* Terjemahkan deskripsi layanan */}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Div untuk gradasi di bagian bawah. Dibiarkan tidak berubah. */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/3"
        style={{
          background: "linear-gradient(to top, white, transparent)",
        }}
      ></div>
    </section>
  );
};

export default Content5;
