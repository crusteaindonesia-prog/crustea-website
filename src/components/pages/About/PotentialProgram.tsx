import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const programs = [
  "Eco-Aerator Implementation",
  "Capacity Building in Aquaculture",
  "Women Empowerment",
  "Millenial Shrimp Farming",
  "Technology Based Tilapia Biofloc",
];

export default function PotentialProgram() {
  return (
    <section className="relative w-full overflow-hidden mt-20">
      {/* Background image and gradient overlays */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full relative">
          <img
            src="/images/landing/potentialprogram.png"
            alt="Shrimp background"
            className="w-full h-full object-cover object-center opacity-40"
          />
          {/* Horizontal gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#aed73b]/5 via-white/100 to-white/100" />
          {/* Vertical gradient bawah ke putih bersih */}
          <div className="absolute bottom-0 w-full h-24 bg-gradient-to-b from-transparent via-white/95 to-white" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 md:pb-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Mobile title */}
        <div className="block md:hidden text-center">
          <h2 className="text-3xl font-extrabold text-[#407d31] drop-shadow-md mb-6">
            POTENTIAL <br /> PROGRAM
          </h2>
        </div>

        {/* Program list */}
        <div className="space-y-6">
          {programs.map((program, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-[#005f61] text-white rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <span className="text-base sm:text-lg md:text-xl text-[#005f61] font-semibold">
                {program}
              </span>
            </div>
          ))}

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-6 pt-8">
            <a
              href="https://www.instagram.com/crustea.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:underline"
            >
              <FaInstagram className="w-5 h-5 text-[#E1306C]" />
              <span className="text-gray-800">crustea.id</span>
            </a>
            <a
              href="https://www.linkedin.com/company/crusteaindonesia/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:underline"
            >
              <FaLinkedin className="w-5 h-5 text-[#0077B5]" />
              <span className="text-gray-800">Crustea Indonesia</span>
            </a>
          </div>
        </div>

        {/* Desktop title */}
        <div className="hidden md:block text-right md:pr-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#005f61] drop-shadow-md leading-snug">
            POTENTIAL <br /> PROGRAM
          </h2>
        </div>
      </div>

      {/* White solid block at bottom */}
      <div className="w-full h-10 md:h-6 bg-white" />
    </section>
  );
}
