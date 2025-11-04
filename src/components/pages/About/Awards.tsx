import React, { useState } from "react";
import { FaTimes, FaSearchPlus } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // Import useTranslation

export default function Awards() {
  const { t } = useTranslation(); // Dapatkan fungsi 't' (translate)
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Definisikan array awards di dalam komponen dan terjemahkan setiap item
  const awards = [
    {
      title: t("awardsSection.award_1_title"),
      image: "/images/landing/awards1.png",
    },
    {
      title: t("awardsSection.award_2_title"),
      image: "/images/landing/awards2.png",
    },
    {
      title: t("awardsSection.award_3_title"),
      image: "/images/landing/awards3.png",
    },
    {
      title: t("awardsSection.award_4_title"),
      image: "/images/landing/awards4.png",
    },
    {
      title: t("awardsSection.award_5_title"),
      image: "/images/landing/awards5.png",
    },
    {
      title: t("awardsSection.award_6_title"),
      image: "/images/landing/awards6.png",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#eaf4d3] to-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#7c9e3f] mb-2">
          {t("awardsSection.section_title")} {/* Terjemahkan judul */}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          {t("awardsSection.section_subtitle")} {/* Terjemahkan sub-judul */}
        </p>
      </div>

      {/* Grid of awards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {awards.map((award, index) => (
          <div
            key={index}
            className="relative group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <div
              className="relative cursor-pointer"
              onClick={() => setSelectedImage(award.image)}
            >
              <img
                src={award.image}
                alt={t("awardsSection.award_image_alt_generic")}
                className="w-full h-56 object-cover"
              />
              {/* Zoom icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
                <FaSearchPlus className="text-white text-2xl" />
              </div>
            </div>
            <div className="p-4 text-center">
              <p className="text-sm font-semibold text-gray-700">
                {award.title}{" "}
                {/* Title sudah diterjemahkan dari array di atas */}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for selected image */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-white/90 backdrop-blur-md flex items-center justify-center px-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-gray-800 hover:text-red-600 text-2xl z-50"
              aria-label={t("awardsSection.close_button_aria_label")}
            >
              <FaTimes />
            </button>
            <img
              src={selectedImage}
              alt={t("awardsSection.zoomed_award_image_alt")}
              className="w-full h-auto rounded-xl shadow-lg object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
