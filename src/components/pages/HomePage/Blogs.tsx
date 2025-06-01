import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../Layout/ScrollAnimationWrapper";
import arrowIcon from "/images/landing/Component 2.png";
import Blog from "./Blog";

// Tambahan: Carousel Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const categories = [
  "All",
  "Renewable Energi",
  "Tambak Udang",
  "Smart Teknologi",
  "Project Crustea",
  "Pameran Crustea",
  "Pemberdayaan Perempuan",
];

const Blogs = ({ isHomePage = false }) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const postsPerPage = 6;

  const filteredBlogs = useMemo(() => {
    const result = Blog.filter((item) =>
      activeCategory === "All" ? true : item.category === activeCategory
    );
    return isHomePage ? result.slice(0, 3) : result;
  }, [activeCategory, isHomePage]);

  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);

  const paginatedBlogs = useMemo(() => {
    if (isHomePage) return filteredBlogs;
    const start = (currentPage - 1) * postsPerPage;
    return filteredBlogs.slice(start, start + postsPerPage);
  }, [filteredBlogs, currentPage, isHomePage]);

  return (
    <div className="mx-4 md:mx-16 lg:mx-24 mt-20 md:mt-20">
      {/* Title */}
      <ScrollAnimationWrapper>
        <motion.div
          variants={scrollAnimation}
          className="text-center font-Cabin font-semibold text-2xl md:text-4xl"
        >
          <h2>
            <span className="text-[#ACCB37]">CRUSTEA</span>
            <span className="text-[#08556b]">'s </span>
            <span className="text-[#08556b]">Blog</span>
          </h2>
        </motion.div>
      </ScrollAnimationWrapper>

      {/* Carousel */}
      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-xl px-6 relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            loop
            className="rounded-xl overflow-hidden shadow-xl custom-swiper"
          >
            {Blog.slice(0, 3).map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-80 md:h-36">
                  <img
                    src={item.img}
                    alt={item.in.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <style>{`
            .custom-swiper .swiper-button-prev,
            .custom-swiper .swiper-button-next {
              color: white;
            }
            .custom-swiper .swiper-pagination-bullet {
              background: rgba(255, 255, 255, 0.5);
            }
            .custom-swiper .swiper-pagination-bullet-active {
              background: white;
            }
          `}</style>
        </div>
      </div>

      {/* Kategori + Tombol Read Blogs (home only) */}
      {isHomePage && (
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 rounded-full border text-sm md:text-base ${
                  activeCategory === category
                    ? "bg-[#ACCB37] text-white"
                    : "border-[#ACCB37] text-[#08556b] hover:bg-[#ACCB37]/10"
                } transition duration-200`}
              >
                {category}
              </button>
            ))}
          </div>

          <ScrollAnimationWrapper>
            <motion.div
              variants={scrollAnimation}
              className="flex justify-center md:justify-end"
            >
              <Link to="/blogs">
                <button className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-white border border-[#ACCB37] font-semibold text-base shadow-sm transition-all duration-300 hover:bg-white hover:text-[#ACCB37] hover:shadow-lg hover:scale-[1.03]">
                  <span className="z-10 group-hover:text-[#ACCB37]">Read | Blogs</span>
                  <svg
                    className="w-5 h-5 stroke-white group-hover:stroke-[#ACCB37] group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      )}

      {/* Kategori khusus halaman /blogs */}
      {!isHomePage && (
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-full border ${
                activeCategory === category
                  ? "bg-[#ACCB37] text-white"
                  : "border-[#ACCB37] text-[#08556b] hover:bg-[#ACCB37]/10"
              } transition duration-200`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Blog Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedBlogs.map((product, index) => (
          <ScrollAnimationWrapper key={index}>
            <motion.div
              variants={scrollAnimation}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              <img
                src={product.img}
                alt={product.in.title}
                className="rounded-t-2xl w-full h-64 object-cover object-center"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-lg md:text-xl font-semibold text-black mb-3">
                  {product.in.title}
                </h2>
                <p className="text-sm md:text-base text-gray-700 font-DMSans flex-grow mb-4">
                  {product.in.desc.slice(0, 180)}...
                </p>
                <div className="mt-auto">
                  <Link to={`/blog/${product.id}`}>
                    <div className="flex items-center text-[#ACCB37] hover:text-[#91b12e] transition-colors">
                      <span className="text-sm md:text-base font-medium">Read more...</span>
                      <img src={arrowIcon} className="ml-2 w-4 h-4 md:w-5 md:h-5" alt="Arrow Icon" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        ))}
      </div>

      {/* Pagination */}
      {!isHomePage && totalPages > 1 && (
        <div className="flex justify-center mt-10 items-center flex-wrap gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-3 py-2 rounded border ${
              currentPage === 1
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "text-[#ACCB37] border-[#ACCB37] hover:bg-[#ACCB37]/10"
            } transition`}
          >
            ⟨ Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-full border text-sm font-medium ${
                currentPage === i + 1
                  ? "bg-[#ACCB37] text-white"
                  : "border-[#ACCB37] text-[#ACCB37] hover:bg-[#ACCB37]/10"
              } transition`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 rounded border ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "text-[#ACCB37] border-[#ACCB37] hover:bg-[#ACCB37]/10"
            } transition`}
          >
            Next ⟩
          </button>
        </div>
      )}

      {/* Tombol Back khusus halaman /blogs */}
      {!isHomePage && (
        <div className="flex justify-center mt-8 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#08556b] border border-[#ACCB37] font-semibold text-base shadow-md transition-all duration-300 ease-in-out hover:bg-[#ACCB37] hover:text-white hover:shadow-lg hover:scale-[1.03] focus:outline-none"
          >
            <svg
              className="w-5 h-5 stroke-current group-hover:stroke-white transform group-hover:-translate-x-1 transition-all duration-300"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Blogs;
