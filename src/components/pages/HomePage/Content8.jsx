import React from "react";

const Content8 = () => {
  return (
    <section className="w-full relative bg-white overflow-hidden py-10 px-4 lg:px-16">
      {/* Desktop Layout */}
      <div className="hidden lg:block relative h-[640px]">
        {/* Judul */}
        <div className="absolute top-[5%] left-1/2 transform -translate-x-1/2 text-center z-10">
          <h2 className="text-[28px] font-bold text-[#004b5c] leading-tight">
            Eco-Aerator Implementation
          </h2>
          <p className="text-[#f6a100] font-semibold text-base">
            Eco Friendly & Smart Aerator for Aquaculture
          </p>
        </div>

        {/* Gambar dan posisi absolut */}
        <img
          src="/images/landing/produk.png"
          alt="Eco Aerator"
          className="absolute left-[4%] top-[25%] w-[38%] h-auto object-contain z-0"
        />
        <div className="absolute top-[30%] left-[3%] w-[110px] text-white text-[20px] font-bold leading-tight text-center z-10">
          200% <br />
          <span className="text-[12px] font-normal">
            Bigger shrimp and fish<br />Higher quality
          </span>
        </div>
        <div className="absolute bottom-[33%] left-[5%] text-[13px] text-[#f6a100] font-bold z-10">
          Eco-Aerator <br />
          <span className="text-[12px] text-black font-normal">
            with impeller, smaller bubble,<br />higher oxygen levels
          </span>
        </div>
        <div className="absolute top-[25%] left-[32%] text-[13px] text-[#036666] font-bold z-10">
          Technology Overview
        </div>
        <div className="absolute top-[29%] left-[32%] text-[#f6a100] text-[13px] font-bold z-10">
          Photovoltaic <br />
          <span className="text-black text-[12px] font-normal">
            Renewable Energy
          </span>
        </div>
        <img
          src="/images/landing/content3-1.png"
          alt="EBII System"
          className="absolute top-[28%] left-[40%] w-[300px] z-10"
        />
        <div className="absolute top-[28%] left-[61%] text-[13px] text-black text-left z-10 w-[150px]">
          <span className="text-[#f6a100] font-semibold">EBII system</span><br />
          with 4 parameters:<br />
          pH, DO, salinity, & temperature
        </div>
        <div className="absolute top-[40%] left-[61%] text-white text-[17px] font-bold leading-tight text-center z-10">
          23.044<br />
          <span className="text-[12px] font-normal">tCO2e GHG Reduction</span>
        </div>
        <img
          src="/images/landing/content3-3.png"
          alt="Smart Energy"
          className="absolute top-[10%] right-[2%] w-[300px] z-10"
        />
        <div className="absolute top-[46%] right-[5%] text-[#f6a100] font-bold text-[14px] text-left z-10 w-[180px]">
          Smart Energy <br />
          <span className="text-black font-normal text-[13px] leading-snug">
            Monitor & control energy used<br />
            on both each or overall aerator<br />
            easily by phone
          </span>
        </div>
        <img
          src="/images/landing/content8-icon1.jpg"
          alt="Arrow"
          className="absolute bottom-[17%] right-[10%] w-[120px] rotate-[-180deg] z-10"
        />
        <div className="absolute bottom-[6%] right-[20%] w-[200px] text-[13px] text-black text-left z-10">
          <span className="text-[#f6a100] font-semibold">Auto-control</span> the aerator on/off<br />
          according to EBII System measurement
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block lg:hidden flex flex-col items-center gap-4 text-center">
        <h2 className="text-[22px] font-bold text-[#004b5c] leading-tight">
          Eco-Aerator Implementation
        </h2>
        <p className="text-[#f6a100] font-semibold text-sm">
          Eco Friendly & Smart Aerator for Aquaculture
        </p>

        <img
          src="/images/landing/produk.png"
          alt="Eco Aerator"
          className="w-[80%] object-contain"
        />
        <div className="bg-[#004b5c] px-4 py-2 rounded font-bold text-[18px] text-[#f1f1f1]">
          200% <br />
          <span className="text-[12px] font-normal block">
            Bigger shrimp and fish<br />Higher quality
          </span>
        </div>

        <div className="text-[#f6a100] font-bold text-[14px]">
          Eco-Aerator <br />
          <span className="text-black font-normal text-[12px]">
            with impeller, smaller bubble,<br />higher oxygen levels
          </span>
        </div>

        <div className="text-[#036666] font-bold text-[14px]">
          Technology Overview
        </div>
        <div className="text-[#f6a100] font-bold text-[14px]">
          Photovoltaic <br />
          <span className="text-black font-normal text-[12px]">
            Renewable Energy
          </span>
        </div>

        <img
          src="/images/landing/content3-1.png"
          alt="EBII System"
          className="w-[70%]"
        />
        <div className="text-black text-[13px]">
          <span className="text-[#f6a100] font-semibold">EBII system</span><br />
          with 4 parameters: pH, DO, salinity, & temperature
        </div>
        <div className="bg-[#004b5c] text-[#f1f1f1] text-[15px] px-3 py-1 rounded font-bold">
          23.044<br />
          <span className="text-[12px] font-normal">tCO2e GHG Reduction</span>
        </div>

        <img
          src="/images/landing/content3-3.png"
          alt="Smart Energy"
          className="w-[80%]"
        />
        <div className="text-[#f6a100] font-bold text-[14px]">
          Smart Energy <br />
          <span className="text-black font-normal text-[13px] leading-snug">
            Monitor & control energy used<br />
            on both each or overall aerator<br />
            easily by phone
          </span>
        </div>

        <img
          src="/images/landing/content8-icon1.jpg"
          alt="Arrow"
          className="w-[100px] rotate-[-180deg]"
        />
        <div className="text-[13px] text-black">
          <span className="text-[#f6a100] font-semibold">Auto-control</span> the aerator on/off<br />
          according to EBII System measurement
        </div>
      </div>
    </section>
  );
};

export default Content8;
