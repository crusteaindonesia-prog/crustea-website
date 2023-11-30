import getScrollAnimation from "../utils/getScrollAnimation";
import eco from "../../public/images/landing/produk1.png";
import ebii from "../../public/images/landing/produk2.png";
import smartEnergy from "../../public/images/landing/produk3.png";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import React, { useMemo } from "react";
import { motion } from "framer-motion";

const ProductCatalog = ({
  ListProducts = [
    {
      name: "Eco - Aerator",
      image: eco,
      desc: `Eco-Aerator uses the best environmentally friendly technological innovations. 
      An environmentally friendly aeration technology that will increase pond productivity 
      while reducing pond operational costs`,
    },
    {
      name: "EBII System",
      image: ebii,
      desc: `EBII Monitoring &
      Controlling System is a sensor device that 
      has several outstanding sensor features 
      to help pond farmers control the condition of their 
      ponds anytime, anywhere.`,
    },
    {
      name: "Smart Energy",
      image: smartEnergy,
      desc: `Smart Energy System is a technology that aims to
       determine the level of efficiency and energy savings 
       generated when pond farmers apply Crustea technologies in their aquaculture processes.`,
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
      <div className="mx-8 md:mx-32 md:mt-6">
        <ScrollAnimationWrapper className={undefined}>
          <motion.div
            variants={scrollAnimation}
            className="mx-auto font-bold text-center text-3xl md:text-5xl"
          >
            <h2 className="text-[#ACCB37]">
              <span className="text-black-600">Our</span> Product Catalog
            </h2>
          </motion.div>
        </ScrollAnimationWrapper>
        <div className="md:mt-20 justify-center mx-auto flex flex-wrap">
          {ListProducts.map((product, index) => {
            return (
              <ScrollAnimationWrapper key={index} className={undefined}>
                <motion.div className="mt-5 md:mt-0 md:w-96 md:h-[620px] bg-[#ffff] md:m-4 rounded-3xl drop-shadow-lg">
                  <img
                    src={product.image}
                    className="rounded-3xl md:w-full"
                  ></img>
                  <h2 className="text-xl md:text-3xl ml-3 mt-3 font-bold text-[#ACCB37]">
                    {product.name}
                  </h2>
                  <p className="font-medium text-black-600 text-base p-3 md:text-xl">
                    {product.desc}
                  </p>
                </motion.div>
              </ScrollAnimationWrapper>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductCatalog;
