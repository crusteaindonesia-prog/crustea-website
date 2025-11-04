import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X, Eye, ShoppingCart, Instagram, MessageCircle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

// Data Produk dengan 3 gambar per item
const productData = [
  {
    id: "ricebowl1",
    images: [
      "/images/landing/food1.jpg",
      "/images/landing/food.jpg",
      "/images/landing/food.jpg",
    ],
    titleKey: "krastyProducts.ricebowl1.title",
    descriptionKey: "krastyProducts.ricebowl1.description",
  },
  {
    id: "wrap1",
    images: [
      "/images/landing/food1.jpg",
      "/images/landing/food.jpg",
      "/images/landing/food.jpg",
    ],
    titleKey: "krastyProducts.wrap1.title",
    descriptionKey: "krastyProducts.wrap1.description",
  },
  {
    id: "snack1",
    images: [
      "/images/landing/food1.jpg",
      "/images/landing/food.jpg",
      "/images/landing/food.jpg",
    ],
    titleKey: "krastyProducts.snack1.title",
    descriptionKey: "krastyProducts.snack1.description",
  },
  {
    id: "drink1",
    images: [
      "/images/landing/food1.jpg",
      "/images/landing/food.jpg",
      "/images/landing/food.jpg",
    ],
    titleKey: "krastyProducts.drink1.title",
    descriptionKey: "krastyProducts.drink1.description",
  },
  {
    id: "breakfast1",
    images: [
      "/images/landing/food1.jpg",
      "/images/landing/food.jpg",
      "/images/landing/food.jpg",
    ],
    titleKey: "krastyProducts.breakfast1.title",
    descriptionKey: "krastyProducts.breakfast1.description",
  },
];

export default function OurProductKrastyFood() {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="relative py-20 px-4 md:px-20 text-gray-800 overflow-hidden mt-24 md:mt-0">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-[#fefefe]/40 to-white/70 backdrop-blur-md" />
        <img
          src="/images/landing/bg-food.png"
          alt="background"
          className="w-full h-full object-cover opacity-10 mix-blend-multiply"
        />
        <div className="absolute top-0 w-full h-40 bg-gradient-to-b from-white via-white/70 to-transparent" />
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-white via-white/70 to-transparent" />
      </div>

      {/* Hero */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between mb-16 gap-10 md:gap-20">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00A38C] mb-4 leading-snug">
            {t("krastyProducts.intro_title")}
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            {t("krastyProducts.intro_desc")}
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/landing/food.jpg"
            alt={t("krastyProducts.heroImageAlt")}
            className="w-full max-w-md md:max-w-lg object-contain drop-shadow-xl rounded-2xl"
          />
        </div>
      </div>

      {/* Title */}
      {/* <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14 text-[#FF6A00] tracking-tight">
        {t("krastyProducts.main_title")}
      </h2> */}

      {/* Product Cards */}
      {/* <Swiper
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
        className="pb-16"
      >
        {productData.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="flex flex-col items-center text-center bg-white border border-white/30 rounded-3xl shadow-md p-6 hover:shadow-2xl hover:scale-[1.025] transition-all duration-300 h-full">
              <div
                className="relative cursor-pointer group w-full"
                onClick={() => setSelectedProduct(product)}
              >
                <img
                  src={product.images[0]}
                  alt={t(product.titleKey)}
                  className="h-44 md:h-52 object-contain mb-4 mx-auto rounded-xl transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                  <Eye className="text-white w-7 h-7" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#FF6A00] mb-2">
                {t(product.titleKey)}
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 flex-1">
                {t(product.descriptionKey)}
              </p>
              <a
                href="https://wa.me/6285293322475"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white bg-[#00A38C] hover:bg-[#007e6d] transition mb-3"
              >
                <ShoppingCart className="w-4 h-4" />
                {t("krastyProducts.order_now")}
              </a>
              <div className="flex items-center gap-4 justify-center">
                <a
                  href="https://wa.me/6285293322475"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:text-green-600"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/krasty.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E1306C] hover:text-pink-600"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}

      {/* Modal Detail Produk */}
      <Dialog
        open={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          aria-hidden="true"
        />
        <div className="relative bg-[#faf2ef]/90 rounded-3xl shadow-2xl p-6 z-50 w-[95%] max-w-6xl max-h-[90vh] overflow-y-auto animate-fadeIn">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-red-600 transition"
            onClick={() => setSelectedProduct(null)}
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          {selectedProduct && (
            <div className="grid md:grid-cols-2 gap-6 mt-6 items-start">
              {/* Swiper Gambar */}
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="w-full"
              >
                {selectedProduct.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`Preview ${idx + 1}`}
                      className="w-full max-h-[70vh] object-contain rounded-xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Informasi Produk */}
              <div className="text-gray-800">
                <h3 className="text-2xl font-bold text-[#FF6A00] mb-4">
                  {t(selectedProduct.titleKey)}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed mb-6">
                  {t(selectedProduct.descriptionKey)}
                </p>
                <a
                  href="https://wa.me/6285293322475"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white bg-[#00A38C] hover:bg-[#007e6d] transition mb-4"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {t("krastyProducts.order_now")}
                </a>
              </div>
            </div>
          )}
        </div>
      </Dialog>
    </section>
  );
}
