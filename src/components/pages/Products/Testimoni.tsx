import React, { Component } from "react";
import Slider from "react-slick";

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
  <div {...props}>
    <svg
      className="w-7 h-7 my-4 text-main hover:scale-125 cursor-pointer"
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
  <div {...props}>
    <svg
      className="w-7 h-7 my-4 text-main hover:scale-125 cursor-pointer"
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

export default class Responsive extends Component {
  render() {
    const settings = {
      dots: true,
      dotsClass: "text-center mx-auto slick-dots",
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      nextArrow: <ArrowNextComponent />,
      prevArrow: <ArrowBackComponent />,
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

    const ListTestimoni = [
      {
        name: "Husni",
        image: "/images/landing/husni.png",
        city: "Lamongan",
        country: "East Java",
        rating: "4.5",
        testimoni:
          "Saya ingin menggunakan eco aerator karena mampu meningkatkan produktivitas hasil tambak dan kualitas udang.",
      },
      {
        name: "Saiful Arif",
        image: "/images/landing/saiful.png",
        city: "Surabaya",
        country: "East Java",
        rating: "4.5",
        testimoni:
          "Saya menggunakan panel surya dan merasa sangat terbantu, terutama untuk penggunaan listrik di kolam ikan yang saya miliki.",
      },
      {
        name: "Dwi Putiardi",
        image: "/images/landing/dwi.png",
        city: "Gresik",
        country: "East Java",
        rating: "4.5",
        testimoni:
          "Eco-aerator, sangat menghemat sekali terutama untuk listrik.. ",
      },
    ];

    return (
      <div>
        <h3 className="text-green-600 text-left ml-5 md:ml-14 lg:ml-36 pl-5 lg:pl-10 pt-10 lg:mt-24 lg:mb-12 font-sans font-bold text-2xl md:text-4xl">
          Testimonial
        </h3>
        <Slider {...settings}>
          {ListTestimoni.map((testimoni, index) => {
            return (
              <div className="px-3 flex items-stretch" key={index}>
                <div className="border-2 border-[#ACCB37] hover:border-[#05546A] transition-all rounded-lg p-8 flex flex-col min-h-[280px] md:min-h-[200px]">
                  <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                    <div className="flex order-2 xl:order-1">
                      <img
                        src={testimoni.image}
                        height={50}
                        width={50}
                        alt="Icon People"
                      />
                      <div className="flex flex-col ml-5 text-left">
                        <p className="text-lg text-black-600 capitalize">
                          {testimoni.name}
                        </p>
                        <p className="text-sm text-black-500 capitalize">
                          {testimoni.city},{testimoni.country}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                      <p className="text-sm">{testimoni.rating}</p>
                      <span className="flex ml-4">
                        <StarsComponent className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                  <p className="mt-5 text-left">“{testimoni.testimoni}”.</p>
                </div>
              </div>
            );
          })}
          {/*   */}
        </Slider>
      </div>
    );
  }
}
