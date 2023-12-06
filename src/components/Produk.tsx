import getScrollAnimation from "../utils/getScrollAnimation";
import eco from "../../public/images/landing/produk1.png";
import ebii from "../../public/images/landing/produk2.png";
import arrowIcon from "../../public/images/landing/Component 2.png";
import smartEnergy from "../../public/images/landing/produk3.png";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import React, { useMemo } from "react";
import { motion } from "framer-motion";

const ProductCatalog = ({
  ListProducts = [
    {
      name: "Eco - Aerator",
      image: eco,
      desc: `Eco-Aerator uses the best environmentally friendly 
      technological innovations with smart AI/IoT. An environmentally friendly aeration 
      technology that will increase pond productivity while reducing pond operational costs. `,
    },
    {
      name: "EBII System",
      image: ebii,
      desc: `EBII Monitoring &
      Controlling System is a sensor device that 
      has several outstanding sensor features to 
      help farmers control the condition of their ponds anytime, anywhere. Currently, 
      DO levels are automated, when the DO quality is low, the aerator will 
      turn on automatically and vice versa, The AI ​​system in it 
      certainly affects saving electricity used. No need to operate 24 hours, 
      more economical Operating costs.`,
    },
    {
      name: "Smart Energy",
      image: smartEnergy,
      desc: `Smart Energy System is a technology that aims to determine the level 
      of efficiency and energy savings generated when farmers apply Crustea technologies
       in their aquaculture processes, including detection of GHG reduction, early warning system, 
       and Multi-parameter with stored data history.`,
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
              <div key={index}>
                <div className="mt-5 md:mt-0 md:w-80 2xl:w-96 h-fit md:h-[820px] bg-[#ffff] md:m-4 rounded-3xl drop-shadow-lg flex flex-col">
                  <ScrollAnimationWrapper className={undefined}>
                    <motion.div variants={scrollAnimation}>
                      <img
                        src={product.image}
                        className="rounded-3xl w-full md:w-full"
                      ></img>
                    </motion.div>
                  </ScrollAnimationWrapper>

                  <ScrollAnimationWrapper className={undefined}>
                    <motion.div variants={scrollAnimation}>
                      <h2 className="text-xl md:text-3xl ml-3 mt-3 font-bold text-black-600">
                        {product.name}
                      </h2>
                    </motion.div>
                  </ScrollAnimationWrapper>

                  <ScrollAnimationWrapper className={undefined}>
                    <motion.div variants={scrollAnimation}>
                      <p className="font-medium text-black-600 text-base p-3 md:text-xl">
                        {product.desc}
                      </p>
                    </motion.div>
                  </ScrollAnimationWrapper>

                  <ScrollAnimationWrapper className="mt-auto mb-3">
                    <motion.div variants={scrollAnimation} className="ml-3">
                      <a
                        href="https://bit.ly/InterestedtoOrder-Crustea"
                        className="rounded-md cursor-pointer hover:ring-2 hover:ring-[#ACCB37] flex self-end items-center w-fit p-1"
                      >
                        <h3 className="text-[#ACCB37] md:text-2xl">
                          Interested to Order
                        </h3>
                        <img
                          src={arrowIcon}
                          className="ml-2 hover:hue-rotate-30"
                        ></img>
                      </a>
                    </motion.div>
                  </ScrollAnimationWrapper>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductCatalog;
