import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Blog from "./Blog";
import arrowIcon from "/images/landing/Component 2.png";

// {/* Ini baru Ditambahkan*/}
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// {/* Ini baru Ditambahkan*/}

const Article: React.FC = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  // normalize language code to either 'en' or 'in'
  const lang = i18n.language === "en" ? "en" : "in";

  const blog = Blog.find((blog) => blog.id === id);

  if (!blog) {
    return (
      <div className="text-center mt-32 text-2xl text-red-500">
        {t("article.notFound", "Artikel tidak ditemukan")}
      </div>
    );
  }

  // normalize to safe shape for the chosen language
  const content = blog[lang] as unknown as {
    title: string;
    subtitle?: string;
    desc: string;
  };

  return (
    <>
      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 fade-in max-w-4xl mt-[70px]">
        <div className="mb-8">
          <Link
            to="/blogs"
            className="flex items-center text-subtle-light dark:text-subtle-dark hover:text-primary dark:hover:text-primary transition-colors group"
          >
            <img
              src={arrowIcon}
              alt="Back Arrow"
              className="mr-2 rotate-180 transition-filter duration-300 group-hover:hue-rotate-30"
            />
            {t("article.back", "Back to Blogs")}
          </Link>
        </div>

        <article>
          <header className="mb-12 text-center">
            {(() => {
              const content = blog[lang] as unknown as {
                title: string;
                subtitle?: string;
              };
              return (
                <>
                  <h1 className="font-display font-bold text-4xl md:text-6xl text-text-light dark:text-text-dark mb-4">
                    {content.title}
                  </h1>
                  {content.subtitle && (
                    <p className="text-lg text-subtle-light dark:text-subtle-dark">
                      {content.subtitle}
                    </p>
                  )}
                </>
              );
            })()}
          </header>
          {
            <figure className="mb-12">
              <img
                src={blog.poster}
                alt={content.title}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </figure>
          }
          {/* <figure className="mb-12">
          {blog.images && blog.images.length > 1 ? (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              loop
              className="rounded-lg shadow-lg"
            >
              {blog.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`${content.title} - ${idx + 1}`}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <img
              src={blog.poster}
              alt={content.title}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          )}
        </figure> */}

          <div
            className="prose prose-lg lg:prose-xl max-w-none text-text-light dark:text-text-dark dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-a:text-primary hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: content.desc }}
          />

          <footer className="mt-12 pt-8 border-t border-border-light dark:border-border-dark">
            <div className="flex flex-wrap gap-3">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-400 border border-border-light dark:border-border-dark rounded-full text-sm font-medium text-subtle-light dark:text-subtle-dark hover:bg-green transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </footer>
        </article>
      </main>
    </>
  );
};

export default Article;
