import React from "react";
import { FaInstagram, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import bg from "../../../public/images/landing/bg_footer.png";
import arr from "../../../public/images/landing/arr_footer.png";
import ig from "../../../public/images/landing/ig.png";
import linkedin from "../../../public/images/landing/linked.png";
import fb from "../../../public/images/landing/fb.png";
import mail from "../../../public/images/landing/mail.png";

const Footer = () => {
  return (
    <>
      <div
        className="bg-center bg-cover relative h-screen lg:h-[528px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-wrap justify-between md:mx-48 h-fit md:h-full">
          <div className="bg-[#05546A] md:max-w-3xl lg:max-h-[308px] mx-5 mt-14 lg:mt-40 md:pt-10">
            <div className="flex flex-wrap">
              <section className="md:max-w-sm mx-10 lg:mr-16 lg:ml-0">
                <h2 className="text-white-300 mt-10 md:mt-0 font-bold text-2xl md:text-4xl">
                  GET IN TOUCH
                </h2>
                <p className="text-[#CFCDCD] mt -1 md:mt-2">
                  Let's Upgrade Your Pond with Crustea!
                </p>
                <div className="md:pt-7 mt-6 md:mt-7">
                  <p className="text-white-300 font-bold md:text-xl">
                    info@crustea.id
                  </p>
                  <p className="text-white-300 text-lg mt-1">
                    Jl. Sanggung Tim. No.1, Jatingaleh, 
                    Kec. Candisari, Kota Semarang, Jawa Tengah 50254
                  </p>
                </div>
              </section>
              <section className="md:order-first ml-10 w-48 my-10 md:my-0 self-end md:ml-12">
                <a href="https://linktr.ee/crusteaid">
                  <img
                    src={arr}
                    alt="alternative"
                    className="hover:scale-125"
                  />
                </a>
              </section>
            </div>
          </div>
          <div className=" w-64 md:max-h-[308px] lg:mr-4 mt-20 lg:mt-40 lg:pt-32 justify-center text-center mx-auto">
            <h3 className="font-bold text-white-300 text-xl md:text-2xl text-center">
              Contact Us
            </h3>
            <div className="flex justify-between mt-4 md:mt-8">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/crustea.id/"
              >
                <img src={ig} alt="ig" className="w-12 hover:scale-110" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/crusteaindonesia/"
              >
                <img src={linkedin} alt="" className="w-12 hover:scale-110" />
              </a>
              <a target="_blank" rel="noreferrer" href="">
                <img src={fb} alt="ig" className="w-12 hover:scale-110" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:nusakarya.teknologi@gmail.com"
              >
                <img src={mail} alt="" className="w-12 hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-500 flex justify-center py-4 h-16 items-center">
        <h2 className="text-semibold text-md text-white">
          &copy;ECO AERATOR 2023
        </h2>
      </div>
    </>
  );
};

export default Footer;
