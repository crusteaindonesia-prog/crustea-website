import React, { Component } from "react";
import Slider from "react-slick";
import { withTranslation, WithTranslationProps } from "react-i18next"; // Import withTranslation dan tipenya

// Komponen ikon bintang, tidak perlu diubah
const StarsComponent = (props) => (
  <div {...props}>
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.1891 6.41802L10.2219 5.84146L8.44844 2.24615C8.4 2.14771 8.32031 2.06802 8.22187 2.01959C7.975 1.89771 7.675 1.99927 7.55156 2.24615L5.77812 5.84146L1.81094 6.41802C1.70156 6.43365 1.60156 6.48521 1.525 6.56334C1.43244 6.65847 1.38143 6.78646 1.38319 6.91918C1.38495 7.0519 1.43933 7.1785 1.53437 7.27115L4.40469 10.0696L3.72656 14.0211C3.71066 14.1131 3.72083 14.2076 3.75592 14.294C3.79102 14.3805 3.84963 14.4554 3.92511 14.5102C4.00059 14.565 4.08992 14.5976 4.18297 14.6042C4.27602 14.6108 4.36907 14.5913 4.45156 14.5477L8 12.6821L11.5484 14.5477C11.6453 14.5993 11.7578 14.6165 11.8656 14.5977C12.1375 14.5508 12.3203 14.293 12.2734 14.0211L11.5953 10.0696L14.4656 7.27115C14.5437 7.19459 14.5953 7.09459 14.6109 6.98521C14.6531 6.71177 14.4625 6.45865 14.1891 6.41802Z"
        fill="#FEA250"
      />
    </svg>
  </div>
);

const ArrowBackComponent = (props) => (
  <div
    {...props}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
    style={{ left: "-30px" }} // Bisa diatur sesuai kebutuhan
  >
    <svg
      className="w-7 h-7 text-main hover:scale-125 cursor-pointer"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      ></path>
    </svg>
  </div>
);

const ArrowNextComponent = (props) => (
  <div
    {...props}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
    style={{ right: "-30px" }} // Bisa diatur sesuai kebutuhan
  >
    <svg
      className="w-7 h-7 text-main hover:scale-125 cursor-pointer"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      ></path>
    </svg>
  </div>
);

// Definisikan tipe props untuk komponen
type TestimoniProps = WithTranslationProps;

class Testimoni extends Component<TestimoniProps> {
  render() {
    const { t } = this.props; // Dapatkan fungsi 't' dari props

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      nextArrow: <ArrowNextComponent />,
      prevArrow: <ArrowBackComponent />,
      appendDots: (dots) => (
        <div
          style={{
            pointerEvents: "none",
            padding: "10px",
            textAlign: "center",
          }}
          className="slick-dots"
        >
          <ul
            style={{
              margin: 0,
              padding: 0,
              display: "flex",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            {dots}
          </ul>
          <style>{`
        .slick-dots li {
          list-style: none;
        }
      `}</style>
        </div>
      ),
      customPaging: (i) => <div />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    // Definisikan ListTestimoni di dalam render, menggunakan fungsi t()
    // Ini akan memastikan array diperbarui saat bahasa berubah.
    const ListTestimoni = [
      {
        name: t("testimonials.husni_name"),
        image: "/images/landing/husni.png",
        city: t("testimonials.husni_city"),
        country: t("testimonials.husni_country"),
        rating: "4.5",
        testimoni: t("testimonials.husni_testimoni"),
      },
      {
        name: t("testimonials.husni_name"),
        image: "/images/landing/husni.png",
        city: t("testimonials.husni_city"),
        country: t("testimonials.husni_country"),
        rating: "4.5",
        testimoni: t("testimonials.husni_testimoni"),
      },
      {
        name: t("testimonials.husni_name"),
        image: "/images/landing/husni.png",
        city: t("testimonials.husni_city"),
        country: t("testimonials.husni_country"),
        rating: "4.5",
        testimoni: t("testimonials.husni_testimoni"),
      },
      {
        name: t("testimonials.saiful_arif_name"),
        image: "/images/landing/saiful.png",
        city: t("testimonials.saiful_arif_city"),
        country: t("testimonials.saiful_arif_country"),
        rating: "4.5",
        testimoni: t("testimonials.saiful_arif_testimoni"),
      },
      {
        name: t("testimonials.dwi_putiardi_name"),
        image: "/images/landing/dwi.png",
        city: t("testimonials.dwi_putiardi_city"),
        country: t("testimonials.dwi_putiardi_country"),
        rating: "4.5",
        testimoni: t("testimonials.dwi_putiardi_testimoni"),
      },
    ];

    return (
      <div className="pt-32 md:pt-36 lg:pt-44 px-5 md:px-14 lg:px-36">
        {/* Judul Section Center */}
        <h3 className="text-green-600 text-center font-sans font-bold text-2xl md:text-4xl scroll-mt-36">
          {t("testimonials.section_title")}
        </h3>

        {/* Slider */}
        <Slider {...settings} className="mt-10 relative">
          {ListTestimoni.map((testimoni, index) => (
            <div className="px-2 md:px-3 flex items-stretch" key={index}>
              <div className="border-2 border-[#ACCB37] hover:border-[#05546A] transition-all rounded-lg p-6 md:p-8 flex flex-col min-h-[280px] md:min-h-[200px]">
                <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                  {/* Info User */}
                  <div className="flex order-2 xl:order-1 mb-4 xl:mb-0">
                    <img
                      src={testimoni.image}
                      height={50}
                      width={50}
                      alt={t("testimonials.icon_people_alt_text")}
                      className="rounded-full"
                    />
                    <div className="flex flex-col ml-4 md:ml-5 text-left">
                      <p className="text-lg text-black-600 capitalize">
                        {testimoni.name}
                      </p>
                      <p className="text-sm text-black-500 capitalize">
                        {testimoni.city}, {testimoni.country}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center ml-auto order-1 xl:order-2">
                    <p className="text-sm">{testimoni.rating}</p>
                    <span className="flex ml-2 md:ml-4">
                      <StarsComponent className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                {/* Testimoni Text */}
                <p className="mt-4 md:mt-5 text-left">
                  “{testimoni.testimoni}”.
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

// Gunakan Higher-Order Component withTranslation untuk membungkus komponen
export default withTranslation()(Testimoni);
