import React from "react";
import { ArrowRight } from "lucide-react";

const Content2 = () => {
  return (
    <section className="relative bg-[#F3F8E9] py-16 px-4 md:px-10 overflow-hidden">
      {/* Background Transparent Image */}
      <img
        src="/images/landing/bg-header.png" // Ganti dengan nama file gambar latar
        alt="Background Shrimp"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-screen-xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#08556b] mb-2">
          Aquaculture is one of Indonesia's economy backbones
        </h2>
        <p className="text-gray-600 text-sm mb-10">70% Commodity Global Trade</p>

        {/* Card Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* 2020 Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-6 w-full md:w-1/3">
            <h3 className="text-3xl font-bold text-[#9BCB3C] mb-4">2020</h3>
            <ul className="text-left text-[#08556b] text-sm space-y-2">
              <li>• 3rd largest frozen shrimp exporter</li>
              <li>• 881.3K shrimp production</li>
            </ul>
          </div>

          {/* Arrow */}
          <ArrowRight className="w-8 h-8 text-[#9BCB3C] hidden md:block" />

          {/* 2025 Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-6 w-full md:w-1/3">
            <h3 className="text-3xl font-bold text-[#9BCB3C] mb-4">2025</h3>
            <ul className="text-left text-[#08556b] text-sm space-y-2">
              <li>• <strong>2M tons</strong> shrimp production</li>
              <li>• <strong>8.5%/y</strong> CAGR</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content2;
