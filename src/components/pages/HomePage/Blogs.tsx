import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../Layout/ScrollAnimationWrapper";
import arrowIcon from "/images/landing/Component 2.png";
import Blog from "./Blog";

// Tambahan: Carousel Swiper (jika nanti mau diaktifkan)
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
  // "Pemberdayaan Perempuan",
];

const getBlogImage = (blogNumber: number, fileName: string) =>
  `/crustea-website/images/blog/blog${blogNumber}/${fileName}`;

const stripHTML = (html: string) => {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, ""); // hapus semua tag HTML
};

const Blogs = ({ isHomePage = false }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "in";

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const postsPerPage = 6;

  // Filter blog berdasarkan kategori
  const filteredBlogs = useMemo(() => {
    const result = Blog.filter((item) =>
      activeCategory === "All" ? true : item.category === activeCategory
    );
    return isHomePage ? result.slice(0, 3) : result;
  }, [activeCategory, isHomePage]);

  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);

  // Pagination
  const paginatedBlogs = useMemo(() => {
    if (isHomePage) return filteredBlogs;
    const start = (currentPage - 1) * postsPerPage;
    return filteredBlogs.slice(start, start + postsPerPage);
  }, [filteredBlogs, currentPage, isHomePage]);

  return (
    <div className="mx-4 md:mx-16 lg:mx-24 mt-32 md:mt-36">
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

      {/* Kategori + Tombol Read Blogs (hanya di homepage) */}
      {isHomePage && (
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Kategori */}
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

          {/* Tombol Read Blogs */}
          <ScrollAnimationWrapper>
            <motion.div
              variants={scrollAnimation}
              className="flex justify-center md:justify-end"
            >
              <Link to="/blogs">
                <button className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#08556b] border border-[#ACCB37] font-semibold text-base shadow-sm transition-all duration-300 hover:bg-[#ACCB37] hover:text-white hover:shadow-lg hover:scale-[1.03]">
                  <span className="z-10">
                    {lang === "en" ? "Read | Blogs" : "Baca | Blog"}
                  </span>
                  <svg
                    className="w-5 h-5 stroke-[#08556b] group-hover:stroke-white group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </Link>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      )}

      {/* Kategori di halaman /blogs */}
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
        {paginatedBlogs.map((product, index) => {
          const content = product[lang] || product.in;
          return (
            <ScrollAnimationWrapper key={index}>
              <motion.div
                variants={scrollAnimation}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              >
                <img
                  src={product.img}
                  alt={content.title}
                  className="rounded-t-2xl w-full h-64 object-cover object-center"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-lg md:text-xl font-semibold text-black mb-3">
                    {content.title}
                  </h2>
                  <p className="text-sm md:text-base text-gray-700 font-DMSans flex-grow mb-4">
                    {stripHTML(content.desc).slice(0, 180)}...
                  </p>
                  <div className="mt-auto">
                    <Link to={`/blog/${product.id}`}>
                      <div className="flex items-center text-[#ACCB37] hover:text-[#91b12e] transition-colors">
                        <span className="text-sm md:text-base font-medium">
                          {lang === "en"
                            ? "Read more..."
                            : "Baca selengkapnya..."}
                        </span>
                        <img
                          src={arrowIcon}
                          className="ml-2 w-4 h-4 md:w-5 md:h-5"
                          alt="Arrow Icon"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          );
        })}
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
            ⟨ {lang === "en" ? "Prev" : "Sebelumnya"}
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
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-3 py-2 rounded border ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "text-[#ACCB37] border-[#ACCB37] hover:bg-[#ACCB37]/10"
            } transition`}
          >
            {lang === "en" ? "Next" : "Berikutnya"} ⟩
          </button>
        </div>
      )}

      {/* Tombol Back (khusus halaman /blogs) */}
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {lang === "en" ? "Back" : "Kembali"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Blogs;
