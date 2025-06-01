import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Content3 = () => {
  return (
    <section className="relative bg-[#ffffff] py-16 px-4 md:px-10 overflow-hidden">
      {/* Background (opsional jika ingin ditambah) */}
      <img
        src="/images/landing/produk.png"
        alt="Eco Background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-5 z-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-screen-xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#9BCB3C] mb-2">
          Crustea Presents Eco-Aerator
        </h2>
        <p className="text-gray-600 text-sm mb-10">
          Market potential can be specified on several available technologies
        </p>

        {/* Main Technology Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Left Card - EBII System */}
          <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/4 text-center">
            <img
              src="/images/landing/content3-1.png"
              alt="EBII System"
              className="mx-auto rounded-lg shadow-md1 h-100 mb-4 object-contain"
            />
            <p className="text-sm text-gray-700">
              <strong>EBII system</strong><br />
              with 4 parameters: <br />pH, DO, salinity, & temperature
            </p>
          </div>

          {/* Middle Image & Text */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <img
              src="/images/landing/content3-2.png"
              alt="Eco Aerator"
              className="mx-auto rounded-lg shadow-md1 mb-4 max-h-90 object-contain"
            />
            <div className="text-sm text-gray-700 space-y-2">
              <p><strong>Solar Panel</strong><br />Renewable Energy</p>
              <p><strong>Eco-Aerator</strong><br />with impeller, smaller bubble, higher oxygen levels</p>
            </div>
          </div>

          {/* Right Card - Smart Energy */}
          <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/4 text-center">
            <img
              src="/images/landing/content3-3.png"
              alt="Smart Energy"
              className="mx-auto rounded-lg shadow-md1 h-100 mb-4 object-contain"
            />
            <p className="text-sm text-gray-700">
              <strong>Smart Energy</strong><br />
              Monitor & control energy used on both eco or overall aerator easily by phone
            </p>
          </div>
        </div>

        {/* Advantage Labels */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
          <div className="bg-[#D1E7AD] text-[#4B6012] font-semibold rounded-md px-4 py-2 text-sm">
            200% bigger & higher quality shrimp
          </div>

          <div className="flex items-center gap-2 text-[#A0A0A0] text-sm font-semibold">
            <ChevronLeft className="w-4 h-4" />
            advantage
            <ChevronRight className="w-4 h-4" />
          </div>

          <div className="bg-[#D1E7AD] text-[#4B6012] font-semibold rounded-md px-4 py-2 text-sm">
            60–80% operational cost savings
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content3;
