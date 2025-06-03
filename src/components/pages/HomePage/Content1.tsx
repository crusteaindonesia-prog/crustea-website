import React from "react";
import { GaugeCircle, DollarSign } from "lucide-react";

const Content1 = () => {
  return (
    <section className="relative bg-[#F3F8E9] py-16 px-4 md:px-10 overflow-hidden">
      {/* Background Image (transparan) */}
      <img
        src="/images/landing/bg-header.png" // Ganti dengan nama file background-mu
        alt="Background Pattern"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-snug mb-6">
            <span className="text-[#9BCB3C]">90% farmers</span>{" "}
            <span className="text-gray-800">in aquaculture</span>
            <div className="text-base font-normal text-green mt-1">
              that limit their productivity
            </div>
          </h2>

          {/* Item 1 */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-[#CDE7AC] p-3 rounded-full">
              <GaugeCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">70% dead shrimp</h3>
              <p className="text-gray-600 text-sm">uncontrolled dissolved oxygen levels</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-4">
            <div className="bg-[#CDE7AC] p-3 rounded-full">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">High fuel cost</h3>
              <p className="text-gray-600 text-sm">Approx Rp100mio per month</p>
            </div>
          </div>

          
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full">
          <img
            src="/images/landing/content1.jpg"
            alt="Farmer Aerator"
            className="rounded-lg shadow-md w-full object-cover max-h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Content1;
