import React from "react";

const Content10 = () => {
  return (
    <section className="relative w-full py-12 px-4 lg:px-16 bg-white overflow-hidden">
      {/* Background Image + Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/images/landing/content10-icon1.png')] bg-cover bg-100% opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Image Section - Left */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="/images/landing/content10.png"
            alt="Shrimp in hand"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>

        {/* Text Section - Right */}
        <div>
          <h2 className="text-[#004b5c] text-2xl lg:text-3xl font-bold mb-2">
            Capacity Building in Aquaculture
          </h2>
          <p className="text-[#f6a100] font-semibold text-sm lg:text-base mb-6">
            Aquaculture Workshop for Shrimp and Fish Farmers
          </p>

          <h3 className="text-[#004b5c] text-lg font-bold mb-2">Capacity Building</h3>
          <p className="text-gray-700 text-sm lg:text-base leading-relaxed text-justify mb-6">
            Capacity building in aquaculture is essential for sustainable growth and development in the industry. 
            By enhancing the skills, knowledge, and resources of individuals and organizations involved in aquaculture, 
            we can improve production efficiency, promote innovation, and ensure environmental sustainability. 
            Through targeted training, education, and technology transfer, we empower stakeholders to meet current 
            challenges and seize future opportunities in aquaculture.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {/* Detail */}
            <div>
              <h4 className="font-semibold text-[#004b5c] mb-2">Detail</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>1 location 1 module</li>
                <li>
                  2 Days Training (1<sup>st</sup> day is in class training and 2<sup>nd</sup> day is practical knowledge)
                </li>
                <li>
                  50–75 target participants in each region (Kelompok Petani Tambak tradisional, semi intensif, dan/atau intensif)
                </li>
              </ul>
            </div>

            {/* KPI */}
            <div>
              <h4 className="font-semibold text-[#004b5c] mb-2">KPI</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>
                  <strong>80% of participants</strong> increase in knowledge and preparedness to implement sustainable and renewable energy practices in aquaculture
                </li>
                <li>
                  <strong>50% of participants</strong> initiate changes or improvements in their aquaculture practices
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content10;
