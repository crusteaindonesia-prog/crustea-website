import React, { useState } from "react";
import { FaTimes, FaSearchPlus } from "react-icons/fa";

const awards = [
  {
    title: "2nd winner APEC, USA",
    image: "/images/landing/awards1.png",
  },
  {
    title: "Gold Medal ASEAN Digital Awards",
    image: "/images/landing/awards2.png",
  },
  {
    title: "Winner Startup World Cup",
    image: "/images/landing/awards3.png",
  },
  {
    title: "Entrepreneur Award",
    image: "/images/landing/awards4.png",
  },
  {
    title: "Archipelagic & Island States Forum",
    image: "/images/landing/awards5.png",
  },
  {
    title: "Winner of Astranauts",
    image: "/images/landing/awards6.png",
  },
];

export default function Awards() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#eaf4d3] to-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#7c9e3f] mb-2">
          Awards
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          National and international (2022 – 2024)
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
                alt={award.title}
                className="w-full h-56 object-cover"
              />
              {/* Zoom icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
                <FaSearchPlus className="text-white text-2xl" />
              </div>
            </div>
            <div className="p-4 text-center">
              <p className="text-sm font-semibold text-gray-700">
                {award.title}
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
              aria-label="Close"
            >
              <FaTimes />
            </button>
            <img
              src={selectedImage}
              alt="Zoomed award"
              className="w-full h-auto rounded-xl shadow-lg object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
