import React, { useState } from "react";
import { XIcon, SearchIcon } from "@heroicons/react/solid";

const Content9 = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src) => {
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
            Women Empowerment
          </h2>
          <p className="text-[#f6a100] font-semibold text-sm lg:text-base mb-6">
            Advance Potential Role for Women in Aquaculture
          </p>

          <h3 className="text-[#007b5e] text-lg font-bold mb-2">
            Women in Aquaculture
          </h3>
         <p className="text-gray-700 text-sm lg:text-base mb-6 leading-relaxed text-justify">
            Empowering women in aquaculture is crucial for sustainable development.
            By providing equal access to resources, training, and opportunities,
            we can unlock the full potential of women in this vital sector.
            When women thrive in aquaculture, communities prosper, economies grow,
            and the environment benefits. Let's work together to ensure women have
            the support they need to succeed and lead in aquaculture.
        </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {/* Detail */}
            <div>
              <h4 className="font-semibold text-[#004b5c] mb-2">Detail</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>1 day training</li>
                <li>Kelompok pengolah dan pemasar (poklahsar)</li>
                <li>50 – 75 participants (women) in every location</li>
              </ul>
            </div>

            {/* KPI */}
            <div>
              <h4 className="font-semibold text-[#004b5c] mb-2">KPI</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>
                  <strong>80% of participants</strong> increase in knowledge about possible
                  participation in aquaculture
                </li>
                <li>
                  <strong>Produces 2 products</strong> that ready to market from shrimp and cultivation
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-col gap-6 items-center lg:items-end">
          {["/images/landing/content9.png", "/images/landing/content9-icon1.png"].map((src, idx) => (
            <div key={idx} className="relative w-1/2 max-w-sm rounded-lg shadow-md group">
              <img
                src={src}
                alt={`Zoomable ${idx}`}
                className="rounded-lg cursor-pointer"
                onClick={() => openModal(src)}
              />
              <div
                onClick={() => openModal(src)}
                className="absolute top-2 right-2 bg-white bg-opacity-80 p-1.5 rounded-full shadow cursor-pointer opacity-0 group-hover:opacity-100 transition"
              >
                <SearchIcon className="w-5 h-5 text-gray-800" />
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
              alt="Preview"
              className="max-w-full max-h-[90vh] rounded-lg shadow-xl"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow hover:bg-gray-200 transition"
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
