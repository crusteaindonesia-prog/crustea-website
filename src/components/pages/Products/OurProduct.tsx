import React, { useState, useMemo } from "react";
import { Dialog } from "@headlessui/react";
import { X, Eye } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

export default function OurProduct() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const products = useMemo(
    () => [
      {
        title: t("productsPage.eco_aerator_title"),
        description: t("productsPage.eco_aerator_description"),
        image: "/images/landing/produk.png",
      },
      {
        title: t("productsPage.ebii_system_title"),
        description: t("productsPage.ebii_system_description"),
        image: "/images/landing/content3-1.png",
      },
      {
        title: t("productsPage.smart_energy_title"),
        description: t("productsPage.smart_energy_description"),
        image: "/images/landing/detailproducts.png",
      },
      {
        title: t("productsPage.solar_panels_title"),
        description: t("productsPage.solar_panels_description"),
        image: "/images/landing/detailproducts1.jpg",
      },
      {
        title: t("productsPage.nanobubble_title"),
        description: t("productsPage.nanobubble_description"),
        image: "/images/landing/detailprodudcts2.png",
      },
      {
        title: t("productsPage.turbo_jet_aerator_title"),
        description: t("productsPage.turbo_jet_aerator_description"),
        image: "/images/landing/detailprodudcts3.png",
      },
      {
        title: t("productsPage.paddle_wheel_title"),
        description: t("productsPage.paddle_wheel_description"),
        image: "/images/landing/detailprodudcts4.png",
      },
      {
        title: t("productsPage.aerator_brush_title"),
        description: t("productsPage.aerator_brush_description"),
        image: "/images/landing/detailprodudcts5.png",
      },
      {
        title: t("productsPage.aerator_blower_title"),
        description: t("productsPage.aerator_blower_description"),
        image: "/images/landing/detailprodudcts6.png",
      },
      {
        title: t("productsPage.aerator_mini_title"),
        description: t("productsPage.aerator_mini_description"),
        image: "/images/landing/detailprodudcts7.png",
      },
    ],
    [t]
  );

  return (
    <section
      id="our-products"
      className="relative bg-gradient-to-br from-green-100 via-green-50 to-white text-gray-800
                 pt-28 sm:pt-32 lg:pt-36 pb-16 px-4 md:px-16 scroll-mt-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-emerald-700">
        {t("productsPage.main_title")}
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        className="pb-12"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-xl p-6 border border-emerald-200 hover:shadow-2xl transition-shadow duration-300 h-full min-h-[350px]">
              <div
                className="relative cursor-pointer group"
                onClick={() => setSelectedImage(product.image)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-32 md:h-40 object-contain mb-4 mx-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <Eye
                    className="text-white w-8 h-8"
                    aria-label={t("productsPage.zoomed_product_alt_text")}
                  />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-emerald-700 mb-2">
                {product.title}
              </h3>
              <p className="text-sm md:text-base text-emerald-600">
                {product.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal Gambar */}
      <Dialog
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        {/* darken + blur backdrop so user fokus ke gambar */}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-200"
          aria-hidden="true"
        />
        <div
          className="relative bg-white rounded-xl shadow-xl p-2 md:p-3 z-50
                      max-w-screen-md w-full max-h-[85vh] h-auto overflow-hidden
                      flex flex-col items-center justify-center"
        >
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-red-500 z-10 p-2 rounded-full bg-white/70 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
            aria-label={t("productsPage.close_modal_aria_label")}
          >
            <X className="w-6 h-6" />
          </button>
          {selectedImage && (
            <img
              src={selectedImage}
              alt={t("productsPage.zoomed_product_alt_text")}
              className="max-w-full max-h-full w-auto h-auto rounded-lg object-contain"
            />
          )}
        </div>
      </Dialog>
    </section>
  );
}
