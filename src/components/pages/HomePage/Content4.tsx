import React from "react";

const Arrow = ({ direction = "right" }) => {
  const rotation =
    direction === "down"
      ? "rotate-[135deg]"
      : direction === "left"
      ? "rotate-[225deg]"
      : direction === "up"
      ? "rotate-[-45deg]"
      : "rotate-45"; // right
  return (
    <div
      className={`w-3 h-3 border-t-2 border-r-2 border-[#70893E] ${rotation}`}
    />
  );
};

const Content4 = () => {
  return (
    <section className="relative bg-white py-16 px-4 md:px-10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/landing/bg_content4.jpg"
          alt="Background"
          className="w-relative h-full object-cover opacity-10"
        />
      </div>

      <div className="max-w-screen-xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-[#08556b] text-center mb-10">
          Business Ecosystem
        </h2>

        {/* Flow Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 relative">

          {/* Step 1 */}
          <div className="flex flex-col gap-6 items-center w-full lg:w-[15%]">
            {[
              {
                icon: "/images/landing/content4-icon1.png",
                label: "Education",
              },
              {
                icon: "/images/landing/content4-icon2.png",
                label: "Open Project",
              },
            ].map(({ icon, label }, i) => (
              <React.Fragment key={label}>
                <div className="bg-[#ffffff] shadow rounded-xl px-4 py-3 text-center text-sm text-gray-600 font-semibold flex flex-col items-center">
                  <img src={icon} alt={label} className="h-24 mb-2" />
                  {label}
                </div>
                {i === 0 && (
                  <div className="lg:hidden">
                    <Arrow direction="down" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Arrow between blocks (horizontal) */}
          <div className="hidden lg:block">
            <Arrow direction="right" />
          </div>

          {/* Step 2 - Shrimp Cultivation */}
          <div className="w-full lg:w-[20%] flex flex-col items-center text-center">
            <div className="bg-[#cedc96] rounded-2xl px-4 py-6 flex flex-col items-center w-full max-w-[200px]">
              <h3 className="font-bold text-[#3C6511] mb-2 text-sm">
                Shrimp Cultivation
              </h3>
              <img
                src="/images/landing/content4-1.png"
                alt="Shrimp Cultivation"
                className="h-32"
              />
            </div>
          </div>

          {/* Arrow */}
          <div className="lg:block hidden">
            <Arrow direction="right" />
          </div>
          <div className="lg:hidden">
            <Arrow direction="down" />
          </div>

          {/* Step 3 - Pre Cultivation */}
          <div className="w-full lg:w-[20%] flex flex-col items-center text-center">
            <div className="bg-[#b7d266] text-white font-semibold px-4 py-1 rounded-t-md text-sm">
              Technology
            </div>
            <div className="bg-[#ffffff] shadow rounded-b-xl px-4 py-5 flex flex-col items-center gap-4 w-full text-sm">
              <div className="flex flex-col items-center">
                <img
                  src="/images/landing/content4-icon3.png"
                  alt="Funding"
                  className="h-50 mb-1"
                />
                <p className="text-[#3C6511] font-semibold text-center">
                  Funding,<br />Aqua Input
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/images/landing/content4-icon4.png"
                  alt="Consultation"
                  className="h-50 mb-1"
                />
                <p className="text-[#3C6511] font-semibold">Consultation</p>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="lg:block hidden">
            <Arrow direction="right" />
          </div>
          <div className="lg:hidden">
            <Arrow direction="down" />
          </div>

          {/* Step 4 - During Cultivation */}
          <div className="w-full lg:w-[25%] flex flex-col items-center text-center">
            <div className="bg-[#b7d266] text-white font-semibold px-4 py-1 rounded-t-md text-sm">
              Technology
            </div>
            <div className="bg-[#ffffff] shadow rounded-b-xl px-4 py-5 w-full flex flex-col items-center text-sm">
              <img
                src="/images/landing/content4-2.png"
                alt="During Cultivation"
                className="h-28 object-contain mb-2"
              />
              <p className="text-[#3C6511] font-semibold">
                Eco Aerator, EBII System, Smart Energy
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="lg:block hidden">
            <Arrow direction="right" />
          </div>
          <div className="lg:hidden">
            <Arrow direction="down" />
          </div>

          {/* Step 5 - Post Cultivation */}
          <div className="w-full lg:w-[20%] flex flex-col items-center text-center">
            <div className="bg-[#b7d266] text-white font-semibold px-4 py-1 rounded-t-md text-sm">
              Technology
            </div>
            <div className="bg-white shadow rounded-b-xl px-4 py-5 w-full flex flex-col items-center gap-4 text-sm">
              <div>
                <img
                  src="/images/landing/content4-icon5.png"
                  alt="Marketplace"
                  className="h-50 mb-1 mx-auto"
                />
                <p className="text-[#3C6511] font-semibold">Marketplace</p>
              </div>
              <div>
                <img
                  src="/images/landing/content4-icon6.png"
                  alt="Global Selling"
                  className="h-50 mb-1 mx-auto"
                />
                <p className="text-[#3C6511] font-semibold">
                  Global Selling / Shipping
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">
          {[
            { icon: "/images/landing/content4-icon7.png", label: "F&B" },
            { icon: "/images/landing/content4-icon8.png", label: "Food Processing" },
            { icon: "/images/landing/content4-icon9.png", label: "Preservation" },
          ].map(({ icon, label }, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-xl px-4 py-4 text-center text-sm text-gray-600 font-semibold flex flex-col items-center w-36"
            >
              <img src={icon} alt={label} className="h-26 mb-2 rounded-xl" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content4;
