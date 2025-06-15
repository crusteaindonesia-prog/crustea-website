import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X, Eye } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  {
    title: "Eco-Aerator",
    description: "Aerator without the need of PLN electricity",
    image: "/images/landing/produk.png",
  },
  {
    title: "EBII System",
    description: "Pond monitoring & Controlling system",
    image: "/images/landing/content3-1.png",
  },
  {
    title: "Smart Energy",
    description: "Pond energy utilisation monitoring & controlling",
    image: "/images/landing/detailproducts.png",
  },
  {
    title: "Solar Panels",
    description:
      "Reducing dependency on conventional power sources and reducing operational costs.",
    image: "/images/landing/detailproducts1.jpg",
  },
  {
    title: "Nanobubble",
    description:
      "DO at machine output reaches 20 ppm oxygen gas bubbles in water measuring 80 - 200 nanometers.",
    image: "/images/landing/detailprodudcts2.png",
  },
  {
    title: "Turbo Jet Aerator",
    description:
      "Efficient aerator ensuring optimal oxygen and water circulation for peak pond productivity",
    image: "/images/landing/detailprodudcts3.png",
  },
  {
    title: "Paddle Wheel",
    description:
      "Reliable and energy-efficient paddle aerator to increase dissolved oxygen levels and promote uniform water mixing.",
    image: "/images/landing/detailprodudcts4.png",
  },
  {
    title: "Aerator Brush",
    description:
      "Uses less energy and promotes gentle water circulation, preserving pond health and protecting the bottom",
    image: "/images/landing/detailprodudcts5.png",
  },
  {
    title: "Aerator Blower",
    description:
      "Ensuring consistent oxygen supply and increasing DO by 30 - 40%",
    image: "/images/landing/detailprodudcts6.png",
  },
  {
    title: "Aerator Mini",
    description:
      "Compact and portable aerator perfect for small-scale aquaculture setups, providing efficient oxygenation in limited spaces.",
    image: "/images/landing/detailprodudcts7.png",
  },
];

export default function OurProduct() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16 px-4 md:px-16 bg-gradient-to-br from-green-100 via-green-50 to-white text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-emerald-700">
        Details Products
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
            <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-xl p-6 border border-emerald-200 hover:shadow-2xl transition-shadow duration-300 h-full">
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
                  <Eye className="text-white w-8 h-8" />
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

      <Dialog
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
        <div className="relative bg-white rounded-xl shadow-xl p-4 z-50 max-w-xl w-full">
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Zoomed product"
              className="w-full h-auto rounded-lg"
            />
          )}
        </div>
      </Dialog>
    </section>
  );
}
