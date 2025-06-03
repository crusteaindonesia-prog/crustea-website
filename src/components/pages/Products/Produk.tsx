import getScrollAnimation from "../../../utils/getScrollAnimation";
import eco from "/images/landing/produk1.png";
import ebii from "/images/landing/produk2.png";
import smartEnergy from "/images/landing/produk3.png";
import arrowIcon from "/images/landing/Component 2.png";
import ScrollAnimationWrapper from "../../Layout/ScrollAnimationWrapper";
import React, { useMemo } from "react";
import { motion } from "framer-motion";

const ProductCatalog = ({
  ListProducts = [
    {
      name: "Eco-Aerator",
      image: eco,
      desc: `Eco-Aerator uses the best environmentally friendly technological innovations with smart AI/IoT. An environmentally friendly aeration technology that will increase pond productivity while reducing pond operational costs.`,
    },
    {
      name: "EBII System",
      image: ebii,
      desc: `EBII Monitoring & Controlling System is a sensor device that has several outstanding sensor features to help farmers control the condition of their ponds anytime, anywhere. Currently, DO levels are automated, when the DO quality is low, the aerator will turn on automatically and vice versa, The AI ​​system in it certainly affects saving electricity used. No need to operate 24 hours, more economical Operating costs.`,
    },
    {
      name: "Smart Energy",
      image: smartEnergy,
      desc: `Smart Energy System is a technology that aims to determine the level of efficiency and energy savings generated when farmers apply Crustea technologies in their aquaculture processes, including detection of GHG reduction, early warning system, and Multi-parameter with stored data history.`,
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <section id="Product" className="relative bg-gradient-to-b from-white via-white to-transparent py-24 px-4 md:px-8 lg:px-16 xl:px-24 overflow-hidden">
      <ScrollAnimationWrapper>
        <motion.div
          variants={scrollAnimation}
          className="text-center mb-20 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#3A4E3C] leading-tight">
            <span className="text-[#7A9D6F]">Our</span> Product Catalog
          </h2>
          <p className="text-gray-600 mt-4 text-sm md:text-base max-w-xl mx-auto">
            Discover Crustea's innovative aquaculture products — designed for sustainability, energy efficiency, and better yields.
          </p>
        </motion.div>
      </ScrollAnimationWrapper>

      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
        {ListProducts.map((product, index) => (
          <motion.div
            key={index}
            variants={scrollAnimation}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col"
          >
            <div className="overflow-hidden rounded-t-xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col p-6 flex-1 bg-[#F9FAF4]">
              <h3 className="text-xl font-semibold text-[#2D3E2F] mb-3">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1 text-justify">
                {product.desc}
              </p>
              <a
                href={`https://wa.me/6282140773592?text=Hi%20Crustea,%20I'm%20interested%20in%20your%20product:%20${product.name}`}
                className="inline-flex items-center justify-center text-sm md:text-base font-semibold text-[#ACCB37] bg-white border-2 border-[#ACCB37] px-6 py-3 rounded-full shadow-md transition-all duration-300 transform hover:bg-[#ACCB37] hover:text-white hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-200"
              >
                Interested to Order
                <img
                  src={arrowIcon}
                  alt="Arrow"
                  className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductCatalog;
