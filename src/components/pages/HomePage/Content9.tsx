import React, { useState } from "react";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
import { useTranslation } from "react-i18next"; // Import useTranslation

const Content9 = () => {
  const { t } = useTranslation(); // Dapatkan fungsi 't' (translate)
  const [modalImage, setModalImage] = useState<string | null>(null); // Tambahkan tipe untuk useState

  const openModal = (src: string) => {
    // Tambahkan tipe untuk src
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section className="w-full bg-gradient-to-r from-[#e6f3eb] via-white to-[#f8f9fa] py-12 px-4 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-[#004b5c] text-2xl lg:text-3xl font-bold mb-1">
            {t("content9.main_title")}
          </h2>
          <p className="text-[#f6a100] font-semibold text-sm lg:text-base mb-6">
            {t("content9.subtitle")}
          </p>

          <h3 className="text-[#007b5e] text-lg font-bold mb-2">
            {t("content9.section_title_women_in_aquaculture")}
          </h3>
          <p className="text-gray-700 text-sm lg:text-base mb-6 leading-relaxed text-justify">
            {t("content9.description")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {/* Detail */}
            <div>
              <h4 className="font-semibold text-[#004b5c] mb-2">
                {t("content9.detail_title")}
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>{t("content9.detail_item1")}</li>
                <li>{t("content9.detail_item2")}</li>
                <li>{t("content9.detail_item3")}</li>
              </ul>
            </div>

            {/* KPI */}
            <div>
              <h4 className="font-semibold text-[#004b5c] mb-2">
                {t("content9.kpi_title")}
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>
                  <strong>{t("content9.kpi_item1_highlight")}</strong>{" "}
                  {t("content9.kpi_item1_text")}
                </li>
                <li>
                  <strong>{t("content9.kpi_item2_highlight")}</strong>{" "}
                  {t("content9.kpi_item2_text")}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-col gap-6 items-center lg:items-end">
          {[
            "/images/landing/content9.webp",
            "/images/landing/content9-icon1.webp",
          ].map((src, idx) => (
            <div
              key={idx}
              className="relative w-1/2 max-w-sm rounded-lg shadow-md group"
            >
              <img
                src={src}
                alt={t("content9.image_alt_zoomable", { idx: idx + 1 })}
                className="rounded-lg cursor-pointer"
                onClick={() => openModal(src)}
              />
              <div
                onClick={() => openModal(src)}
                className="absolute top-2 right-2 bg-white bg-opacity-80 p-1.5 rounded-full shadow cursor-pointer opacity-0 group-hover:opacity-100 transition"
              >
                <SearchIcon
                  className="w-5 h-5 text-gray-800"
                  aria-label={t("content9.search_icon_alt")}
                />{" "}
                {/* Tambahkan aria-label */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative">
            <img
              src={modalImage}
              alt={t("content9.modal_image_preview")}
              className="max-w-full max-h-[90vh] rounded-lg shadow-xl"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow hover:bg-gray-200 transition"
              aria-label={t("content9.close_modal_button")} // Tambahkan aria-label
            >
              <XIcon className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Content9;
