import React from "react";
import { FaInstagram, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const Footer = () => {
  return (
    <>
      <div className="bg-transparent flex flex-col justify-center py-4 h-32 items-center text-green-600">
        <p className="text-black">Contact Us</p>
        <div className="flex space-x-4 pb-8 pt-6">
          <FaInstagram size={30} /> <FaLinkedin size={30} />
          <FaFacebookSquare size={30} />
          <HiOutlineMail size={30} />
        </div>
      </div>
      <div className="bg-green-500 flex justify-center py-4 h-16 items-center">
        <h2 className="text-semibold text-md text-white">
          &copy;ECO AERATOR 2022
        </h2>
      </div>
    </>
  );
};

export default Footer;
