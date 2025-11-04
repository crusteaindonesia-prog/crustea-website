import React, { Component } from "react";
import Slider from "react-slick";
import { withTranslation, WithTranslationProps } from "react-i18next";

interface Job {
  title: string;
  category: string;
  type: string;
  location: string;
  status: "Open" | "Closed" | "Not Open";
  description: string;
}

interface CareerState {
  activeCategory: string;
}

class Career extends Component<WithTranslationProps, CareerState> {
  constructor(props: WithTranslationProps) {
    super(props);
    this.state = { activeCategory: "All" };
  }

  render() {
    const { t, i18n } = this.props;
    const { activeCategory } = this.state;

    const lang = i18n.language === "en" ? "en" : "id";

    const jobs: Job[] = t("career.jobs", { returnObjects: true });

    const categoriesID = ["All", "Fresh Graduate", "Profesional", "Internship"];
    const categoriesEN = [
      "All",
      "Fresh Graduate",
      "Professional",
      "Internship",
    ];
    const categoryList = lang === "en" ? categoriesEN : categoriesID;

    const filteredJobs =
      activeCategory === "All"
        ? jobs
        : jobs.filter((job) => job.category === activeCategory);

    const sliderSettings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      adaptiveHeight: true,
    };

    const statusColors: { [key: string]: string } = {
      Open: "bg-green-100 text-green-700",
      Closed: "bg-red-100 text-red-700",
      "Not Open": "bg-gray-200 text-gray-700",
    };

    return (
      <>
        {/* Hero Join Section */}
        <section
          id="en"
          className="relative bg-cover bg-center bg-no-repeat min-h-[90vh] flex items-center"
          style={{ backgroundImage: "url('/images/landing/banner_3.webp')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 w-full px-6 max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#ACCB37] drop-shadow-lg leading-tight">
              {t("career.hero_title", "Bergabunglah Bersama Perjalanan Kami")}
            </h1>
            <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed">
              {t(
                "career.hero_desc",
                "Jadilah bagian dari lingkungan modern, inovatif, dan inspiratif di mana ide Anda sangat berarti."
              )}
            </p>
            <a
              href="#career-section"
              className="mt-6 inline-block bg-[#ACCB37] text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-lg md:text-xl hover:bg-green-700 hover:text-white transition shadow-lg"
            >
              {t("career.hero_button", "Lihat Karier")}
            </a>
          </div>
        </section>

        {/* Career Section */}
        <section
          id="career-section"
          className="relative bg-gradient-to-b from-green-50 to-white pt-32 md:pt-40 lg:pt-28 px-5 md:px-14 lg:px-36"
        >
          {/* Pengantar Career */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#ACCB37]">
              {t("career.section_title")}
            </h2>
            <p className="mt-4 text-gray-600">
              {t("career.section_description")}
            </p>
          </div>

          {/* Tabs Kategori */}
          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            {categoryList.map((cat) => (
              <button
                key={cat}
                onClick={() => this.setState({ activeCategory: cat })}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-green-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {filteredJobs.map((job, index) => (
              <div
                key={index}
                className="border-2 border-[#ACCB37] hover:border-[#05546A] transition-all rounded-lg p-6 flex flex-col justify-between min-h-[250px] hover:shadow-lg bg-white"
              >
                <div>
                  <p className="text-lg font-semibold text-black-700">
                    {job.title}
                  </p>
                  <p className="text-sm text-black-500 mt-1">{job.location}</p>
                  <p className="text-sm text-gray-600 mt-2">
                    {job.description}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span
                    className={`px-3 py-1 rounded-full font-medium text-sm ${
                      statusColors[job.status]
                    }`}
                  >
                    {job.status}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 font-medium rounded-full text-sm">
                    {job.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden mt-10">
            <Slider {...sliderSettings}>
              {filteredJobs.map((job, index) => (
                <div key={index} className="px-2">
                  <div className="border-2 border-[#ACCB37] hover:border-[#05546A] transition-all rounded-lg p-6 flex flex-col justify-between min-h-[250px] hover:shadow-lg bg-white">
                    <div>
                      <p className="text-lg font-semibold text-black-700">
                        {job.title}
                      </p>
                      <p className="text-sm text-black-500 mt-1">
                        {job.location}
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        {job.description}
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span
                        className={`px-3 py-1 rounded-full font-medium text-sm ${
                          statusColors[job.status]
                        }`}
                      >
                        {job.status}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 font-medium rounded-full text-sm">
                        {job.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </>
    );
  }
}

export default withTranslation()(Career);
