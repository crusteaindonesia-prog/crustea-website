import getScrollAnimation from "../../../utils/getScrollAnimation";
import eco from "/images/landing/produk1.png";
import ebii from "/images/landing/produk2.png";
import smartEnergy from "/images/landing/produk3.png";
import solarpanel from "/images/landing/detailproducts1.jpg";
import aerator from "/images/landing/detailprodudcts7.png";
import arrowIcon from "/images/landing/Component 2.png";
import ScrollAnimationWrapper from "../../Layout/ScrollAnimationWrapper";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ProductCatalog = () => {
  const { t } = useTranslation();

  const ListProducts = useMemo(
    () => [
      {
        name: t("productCatalog.eco_aerator_name"),
        image: eco,
        desc: t("productCatalog.eco_aerator_desc"),
        tokopediaUrl:
          "https://www.tokopedia.com/crustea/turbo-jet-aerator-crustea-1730780698225771569",
      },
      {
        name: t("productCatalog.ebii_system_name"),
        image: ebii,
        desc: t("productCatalog.ebii_system_desc"),
        tokopediaUrl:
          "https://www.tokopedia.com/crustea/ebii-monitoring-controlling-system?extParam=src%3Dshop&aff_unique_id=&channel=others&chain_key=",
      },
      {
        name: t("productCatalog.smart_energy_name"),
        image: smartEnergy,
        desc: t("productCatalog.smart_energy_desc"),
        tokopediaUrl:
          "https://www.tokopedia.com/crustea/smart-energy-system-crustea?extParam=src%3Dshop&aff_unique_id=&channel=others&chain_key=",
      },
      {
        name: t("productCatalog.solar_panel_name"),
        image: solarpanel,
        desc: t("productCatalog.solar_panel_desc"),
        tokopediaUrl:
          "https://www.tokopedia.com/crustea/panel-surya-1-hp-1-phase-1730780720739550257?extParam=src%3Dshop&aff_unique_id=&channel=others&chain_key=",
      },
      {
        name: t("productCatalog.aerator_name"),
        image: aerator,
        desc: t("productCatalog.aerator_desc"),
        tokopediaUrl:
          "https://www.tokopedia.com/crustea/aerator-mini-300-watt-crutea-murah-1730569636330243121?extParam=src%3Dshop&aff_unique_id=&channel=others&chain_key=",
      },
    ],
    [t]
  );

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [modalProduct, setModalProduct] = useState<any | null>(null);

  const closeModal = () => setModalProduct(null);

  return (
    <section
      id="Product"
      className="relative 
                 bg-gradient-to-b from-white via-white to-transparent
                 py-16 sm:py-20 md:py-24
                 px-4 md:px-8 lg:px-16 xl:px-24 
                 overflow-hidden
                 mt-12 sm:mt-16 md:mt-0"
    >
      <ScrollAnimationWrapper className="ProductCard">
        <motion.div
          variants={scrollAnimation}
          className="text-center mb-14 sm:mb-16 md:mb-10 relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#3A4E3C] leading-snug md:leading-tight">
            <span className="text-[#7A9D6F]">
              {t("productCatalog.section_title_part1")}
            </span>{" "}
            {t("productCatalog.section_title_part2")}
          </h2>
          <p className="text-gray-600 mt-3 sm:mt-4 text-sm md:text-base max-w-xl mx-auto">
            {t("productCatalog.section_description")}
          </p>
        </motion.div>
      </ScrollAnimationWrapper>

      <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
        {ListProducts.map((product, index) => (
          <motion.div
            key={index}
            variants={scrollAnimation}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col"
          >
            <div className="overflow-hidden rounded-t-xl">
              <img
                src={product.image}
                alt={t("productCatalog.product_image_alt", {
                  productName: product.name,
                })}
                className="w-full h-48 sm:h-56 md:h-60 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col p-5 sm:p-6 flex-1 bg-[#F9FAF4]">
              <h3 className="text-lg sm:text-xl font-semibold text-[#2D3E2F] mb-3">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 flex-1 text-justify">
                {product.desc}
              </p>
              <button
                onClick={() => setModalProduct(product)}
                className="inline-flex items-center justify-center text-sm md:text-base font-semibold text-[#ACCB37] bg-white border-2 border-[#ACCB37] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md transition-all duration-300 transform hover:bg-[#ACCB37] hover:text-[#fff] hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-200"
              >
                {t("productCatalog.order_button_text")}
                <img
                  src={arrowIcon}
                  alt={t("productCatalog.arrow_icon_alt")}
                  className="ml-2 w-4 h-4 transition duration-300 group-hover:translate-x-1 group-hover:brightness-0 group-hover:invert"
                />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Modal */}
      {modalProduct && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            onClick={closeModal}
            aria-hidden="true"
          />
          <div className="relative z-[10000] w-full max-w-xl mx-auto px-2 sm:px-4">
            <div
              className="bg-white rounded-2xl shadow-2xl p-4 sm:p-5 md:p-6 overflow-hidden"
              style={{ backgroundColor: "#ffffff" }}
            >
              {/* Close button: placed in document flow so it stays inside the card */}
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  aria-label="Close dialog"
                  className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-gray-600 hover:text-gray-800 text-sm"
                >
                  ×
                </button>
              </div>

              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-xl md:text-2xl font-semibold text-[#0f172a]">
                  {t("productCatalog.order_modal_title", {
                    product: modalProduct?.name,
                  })}
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  {t("productCatalog.order_modal_description")}
                </p>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 items-stretch">
                {/* WhatsApp card (compact) */}
                <div
                  className="flex flex-col items-center text-center gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <div className="flex items-center justify-center mb-0">
                    <div className="bg-[#e6f8ef] p-2 rounded-md">
                      <img
                        src="/images/landing/icon_footer/wa.png"
                        alt="WhatsApp"
                        className="w-8 h-8 mx-auto"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    {t("productCatalog.order_via_whatsapp_desc")}
                  </p>
                  <div className="mt-auto w-full text-white-300">
                    <a
                      href={`https://wa.me/6282140773592?text=${encodeURIComponent(
                        t("productCatalog.order_whatsapp_message") +
                          " " +
                          modalProduct?.name
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-[#10b981] hover:bg-[#0ea166] text-white px-4 py-2 text-sm font-medium shadow"
                    >
                      {t("productCatalog.chat_on_whatsapp")}
                    </a>
                  </div>
                </div>

                {/* Tokopedia card (compact) */}
                <div
                  className="flex flex-col items-center text-center gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <div className="flex items-center justify-center mb-0">
                    <div className="bg-[#e6f8ef] p-2 rounded-md">
                      <img
                        src="data:image/png;base64,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"
                        alt="Tokopedia"
                        className="w-8 h-8 mx-auto"
                      />
                    </div>
                  </div>
                  {/* <h4 className="text-sm font-semibold text-center mb-1 w-full">
                    {t("productCatalog.order_on_tokopedia")}
                  </h4> */}
                  <p className="text-sm text-gray-600 text-center mb-2">
                    {t("productCatalog.order_on_tokopedia_desc")}
                  </p>
                  <div className="mt-auto w-full text-white-300">
                    <a
                      href={
                        modalProduct?.tokopediaUrl
                          ? modalProduct.tokopediaUrl
                          : `https://www.tokopedia.com/crustea?search=${encodeURIComponent(
                              modalProduct?.name || ""
                            )}`
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-[#10b981] hover:bg-[#0ea166] text-white px-4 py-2 text-sm font-medium shadow"
                    >
                      {t("productCatalog.buy_on_tokopedia")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductCatalog;
