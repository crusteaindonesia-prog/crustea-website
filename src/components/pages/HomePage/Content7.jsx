import React from "react";

const Content7 = () => {
  return (
    <section
      className="relative py-16 px-6 sm:px-10 bg-gradient-to-r from-[#e4f4e5] via-[#f7fdf7] to-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Text */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#11445f]">
            Eco-Aerator Implementation
          </h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-[#f6a100]">
            Eco Friendly & Smart Aerator for Aquaculture
          </h3>
          <p className="text-gray-700 text-base leading-relaxed text-justify">
            Crustea’s sustainable technology solutions (Eco Aerator, EBII, and Smart Energy systems){" "}
            <span className="text-[#f6a100] font-semibold">
              enable precise oxygen control in shrimp and fish ponds, boosting productivity and reducing electricity costs by up to 80%.
            </span>
            <br />
            Let’s achieve more sustainable aquaculture cultivation and increase farmer production through funding support for technology implementation as part of your CSR.
          </p>

          <div className="bg-white shadow-md p-6 rounded-xl w-full max-w-md">
            <h4 className="text-lg font-semibold text-[#11445f] mb-3">
              Potential Impact
            </h4>
            <ul className="list-disc list-inside text-gray-800 space-y-1 text-sm sm:text-base">
              <li>150% bigger shrimp and fish</li>
              <li>30–50% saving in electrical fee</li>
              <li>100 tCO2e GHG reduction</li>
            </ul>
          </div>
        </div>

        {/* Right Image */}
        {/* Right Image */}
        <div className="w-full lg:w-1/2 relative z-10 px-0">
          <img
            src="/images/landing/content7.png"
            alt="Eco Aerator Devices"
            className="w-full max-w-[600px] mx-auto relative z-10"
          />
           {/* Background Image Behind Devices */}
      <img
        src="/images/landing/content7-icon1.png"
        alt="Pond Background"
        className="absolute top-1 lg:top-0 right-0 w-full max-w-[450px] opacity-70 z-0"
        style={{ transform: "translateY(-30%)" }}
      />
        </div>
      </div>

     
    </section>
  );
};

export default Content7;
