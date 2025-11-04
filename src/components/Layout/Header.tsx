import React, { useState, useEffect } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillSetting,
  AiFillInfoCircle,
  AiOutlineDown,
  AiOutlineFileText,
  AiOutlineTeam,
  AiOutlinePlayCircle,
  AiOutlineUsergroupAdd,
  AiOutlineCrown,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LogoVPN = (props) => (
  <div {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      viewBox="0 0 207.76 61.5"
    >
      <defs>
        <style>{".cls-3{fill:#08556b}"}</style>
      </defs>
      <title>{"Asset 2"}</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            d="M35 42.23v-.13c-.83-7.24-8.64-12.34-16.53-8.46a9.39 9.39 0 0 0-4.18 4.18c-3.86 7.75 1 15.44 8.05 16.5l.35.06h19.24v7.12H18.41A18.41 18.41 0 0 1 0 43.09V19.57h23.53A18.4 18.4 0 0 1 41.93 38v14.13h-19a8.9 8.9 0 0 1-6.73-13 7.5 7.5 0 0 1 3.49-3.52 8.91 8.91 0 0 1 13.06 6.84 1.11 1.11 0 0 0 1.1 1A1.14 1.14 0 0 0 35 42.23Z"
            style={{
              fill: "#acc937",
            }}
          />
          <path
            d="M33 0h8.89v8.89a7 7 0 0 1-7 7h-8.8V7a7 7 0 0 1 7-7Z"
            style={{
              fill: "#668c65",
            }}
          />
          <path
            className="cls-3"
            d="M68.85 56.1a16.48 16.48 0 0 1-5.9-1 13.85 13.85 0 0 1-4.72-3 13.7 13.7 0 0 1-3.11-4.5 15 15 0 0 1 0-11.36 13.54 13.54 0 0 1 3.13-4.51A14.1 14.1 0 0 1 63 28.78a17.42 17.42 0 0 1 12.35.22 12.58 12.58 0 0 1 4.86 3.62l-4.11 3.74a9.45 9.45 0 0 0-3.1-2.43 8.71 8.71 0 0 0-3.78-.83 9.34 9.34 0 0 0-3.52.65 8.11 8.11 0 0 0-4.61 4.6 10.25 10.25 0 0 0 0 7.13 8.17 8.17 0 0 0 4.61 4.61 9.34 9.34 0 0 0 3.52.64 8.58 8.58 0 0 0 3.78-.84 9.65 9.65 0 0 0 3.12-2.45l4.11 3.76a12.75 12.75 0 0 1-4.86 3.65 16.31 16.31 0 0 1-6.52 1.25ZM84 55.63V34.55h5.84v6L89 38.78a6.78 6.78 0 0 1 3-3.38 10.25 10.25 0 0 1 5-1.16v5.68l-.68-.12h-.65a5.76 5.76 0 0 0-4.11 1.45 5.9 5.9 0 0 0-1.53 4.47v10ZM109.79 55.94a10.4 10.4 0 0 1-4.71-1 7.2 7.2 0 0 1-3.17-3.13 11.16 11.16 0 0 1-1.13-5.33V34.55h6.11v11a5.71 5.71 0 0 0 1.11 3.9 4.06 4.06 0 0 0 3.16 1.23 4.91 4.91 0 0 0 2.5-.62 4.5 4.5 0 0 0 1.75-1.88 6.83 6.83 0 0 0 .64-3.14V34.55h6.08v21.08h-5.8v-5.84l1.06 1.73a7.57 7.57 0 0 1-3.14 3.31 9.19 9.19 0 0 1-4.46 1.11ZM134.9 55.94a20.42 20.42 0 0 1-5.18-.64 13.46 13.46 0 0 1-4-1.63l2-4.35a15.06 15.06 0 0 0 3.46 1.43 14.05 14.05 0 0 0 3.9.57 6.4 6.4 0 0 0 3-.51 1.56 1.56 0 0 0 .92-1.41 1.2 1.2 0 0 0-.69-1.12 6.17 6.17 0 0 0-1.8-.56c-.74-.13-1.57-.26-2.49-.4a25.64 25.64 0 0 1-2.72-.54 10.87 10.87 0 0 1-2.51-1A4.94 4.94 0 0 1 127 44a5.65 5.65 0 0 1-.68-2.93 5.72 5.72 0 0 1 1.17-3.55 7.74 7.74 0 0 1 3.33-2.41 14.17 14.17 0 0 1 5.21-.86 20.2 20.2 0 0 1 4.41.49 13.94 13.94 0 0 1 3.74 1.35l-2.08 4.35a10.79 10.79 0 0 0-3-1.21 13.07 13.07 0 0 0-3-.36 6.45 6.45 0 0 0-3.06.55 1.64 1.64 0 0 0-.94 1.41 1.33 1.33 0 0 0 .71 1.2 5.6 5.6 0 0 0 1.84.6l2.51.4a24.8 24.8 0 0 1 2.7.54 10.9 10.9 0 0 1 2.49 1 5 5 0 0 1 1.84 1.78 5.61 5.61 0 0 1 .69 2.94 5.45 5.45 0 0 1-1.18 3.43 7.61 7.61 0 0 1-3.39 2.37 15 15 0 0 1-5.41.85ZM146.1 39.72V35h14.61v4.7Zm11.12 16.22a8.23 8.23 0 0 1-5.79-1.9 7.26 7.26 0 0 1-2.08-5.66V29.89h6.15v18.37a3 3 0 0 0 .69 2.08 2.38 2.38 0 0 0 1.86.75 4 4 0 0 0 2.5-.79l1.61 4.31a6.34 6.34 0 0 1-2.21 1 11.21 11.21 0 0 1-2.73.33ZM175.44 55.94a13.47 13.47 0 0 1-6.31-1.41 10.37 10.37 0 0 1-4.19-3.86 10.54 10.54 0 0 1-1.49-5.58 11 11 0 0 1 1.43-5.6 10.11 10.11 0 0 1 4-3.86 11.88 11.88 0 0 1 5.78-1.39 11.62 11.62 0 0 1 5.58 1.33 10 10 0 0 1 3.94 3.76 11.26 11.26 0 0 1 1.44 5.84v.8c0 .3-.06.58-.08.85h-17.15v-3.57h13.91l-2.39 1.06a5.67 5.67 0 0 0-.63-2.86 4.94 4.94 0 0 0-1.84-1.9 5.34 5.34 0 0 0-2.74-.69 5.45 5.45 0 0 0-2.77.69 4.91 4.91 0 0 0-1.86 1.92 6.08 6.08 0 0 0-.66 2.92v.94a5.79 5.79 0 0 0 .78 3.05 5.17 5.17 0 0 0 2.16 2 7.23 7.23 0 0 0 3.29.69 7.75 7.75 0 0 0 2.91-.51 7.28 7.28 0 0 0 2.34-1.56l3.25 3.52a9.47 9.47 0 0 1-3.65 2.53 13.39 13.39 0 0 1-5.05.89ZM195.61 55.94a9.67 9.67 0 0 1-4.19-.84 6.55 6.55 0 0 1-2.72-2.29 5.77 5.77 0 0 1-1-3.25 5.56 5.56 0 0 1 3.84-5.49 14.68 14.68 0 0 1 5.25-.78h5.56v3.53h-4.93a4.59 4.59 0 0 0-3 .7 2.24 2.24 0 0 0-.81 1.76 2.19 2.19 0 0 0 .92 1.86 4.09 4.09 0 0 0 2.49.69 5.52 5.52 0 0 0 2.8-.71 3.81 3.81 0 0 0 1.83-2.12l.94 2.86a5.6 5.6 0 0 1-2.43 3 8.71 8.71 0 0 1-4.55 1.08ZM202.04 55.63v-4.11l-.39-.91v-7.36a4 4 0 0 0-1.2-3.06 5.28 5.28 0 0 0-3.66-1.09 10.42 10.42 0 0 0-3.31.53 9.12 9.12 0 0 0-2.8 1.43l-2.16-4.27a12.36 12.36 0 0 1 4.16-1.9 19.12 19.12 0 0 1 4.93-.65c3.21 0 5.71.76 7.48 2.27s2.67 3.88 2.67 7.09v12Z"
          />
        </g>
      </g>
    </svg>
  </div>
);

const Header = () => {
  const { t, i18n } = useTranslation();

  const [scrollActive, setScrollActive] = useState(false);
  const [sidenav, setSideNav] = useState(false);

  const [productDropdown, setProductDropdown] = useState(false);
  const [resourcesDropdown, setResourcesDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);
  const [languageDropdown, setLanguageDropdown] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  const handleSideNav = () => {
    setSideNav(!sidenav);
  };

  const closeSideNav = () => {
    setSideNav(false);
    setProductDropdown(false);
    setResourcesDropdown(false);
    setCompanyDropdown(false);
    setLanguageDropdown(false);
  };

  const toggleDropdown = (setter, currentState) => {
    setter(!currentState);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    closeSideNav();
  };

  return (
    <>
      <header
        className={
          "fixed top-0 w-full z-30 bg-white-500 transition-all py-4 md:py-0 " +
          (scrollActive ? " shadow-md" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-8 xl:px-16 mx-auto flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" onClick={closeSideNav}>
              <LogoVPN className="h-8 w-auto" />
            </Link>
          </div>

          <div onClick={handleSideNav} className="md:hidden cursor-pointer">
            {sidenav ? (
              <AiOutlineClose size={30} className="text-green" />
            ) : (
              <AiOutlineMenu size={30} className="text-green" />
            )}
          </div>

          {/* MOBILE SIDENAV */}
          <ul
            className={`fixed top-0 left-0 w-[70%] h-full bg-green text-base transform transition-transform duration-500 ease-in-out md:hidden flex flex-col ${
              sidenav ? "translate-x-0" : "-translate-x-full"
            } overflow-y-auto`}
          >
            <div className="flex items-center justify-between p-4 bg-white-500 border-b border-gray-200">
              <LogoVPN className="h-8 w-auto" />
              <AiOutlineClose
                size={30}
                className="text-green cursor-pointer"
                onClick={closeSideNav}
              />
            </div>

            <li className="py-4 px-6 border-b border-b-gray-500 hover:text-main transition-colors">
              <Link to="/" onClick={closeSideNav}>
                {t("header.home")}
              </Link>
            </li>

            {/* Mobile Dropdown - Products */}
            <li className="py-4 px-6 border-b border-b-gray-500 cursor-pointer">
              <div
                className="flex justify-between items-center hover:text-main pr-2"
                onClick={() =>
                  toggleDropdown(setProductDropdown, productDropdown)
                }
              >
                <span>{t("header.products")}</span>
                <AiOutlineDown
                  className={`transform transition-transform duration-300 ${
                    productDropdown ? "rotate-180" : ""
                  }`}
                />
              </div>
              {productDropdown && (
                <ul className="bg-white px-4 py-2 space-y-3 mt-2 rounded-lg shadow-md">
                  <li className="flex items-start gap-3 border-b pb-3 last:border-b-0">
                    <AiFillSetting className="text-xl text-primary mt-1" />
                    <div>
                      <Link
                        to="/Products"
                        className="font-medium text-main hover:text-green transition-colors"
                        onClick={closeSideNav}
                      >
                        {t("productDropdown.allProducts.title")}
                      </Link>
                      <p className="text-sm text-gray-500">
                        {t("productDropdown.allProducts.desc")}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 border-b pb-3 last:border-b-0">
                    <AiFillSetting className="text-xl text-primary mt-1" />
                    <div>
                      <Link
                        to="/OurProducts"
                        className="font-medium text-main hover:text-green transition-colors"
                        onClick={closeSideNav}
                      >
                        {t("productDropdown.iotProduct.title")}
                      </Link>
                      <p className="text-sm text-gray-500">
                        {t("productDropdown.iotProduct.desc")}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 border-b pb-3 last:border-b-0">
                    <AiFillInfoCircle className="text-xl text-primary mt-1" />
                    <div>
                      <Link
                        to="/Produk"
                        className="font-medium text-main hover:text-green transition-colors"
                        onClick={closeSideNav}
                      >
                        {t("productDropdown.pesanProduk.title")}
                      </Link>
                      <p className="text-sm text-gray-500">
                        {t("productDropdown.pesanProduk.desc")}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 border-b pb-3 last:border-b-0">
                    <AiFillSetting className="text-xl text-primary mt-1" />
                    <div>
                      <Link
                        to="/OurProductKrastyFood"
                        className="font-medium text-main hover:text-green transition-colors"
                        onClick={closeSideNav}
                      >
                        {t("productDropdown.krastyFood.title")}
                      </Link>
                      <p className="text-sm text-gray-500">
                        {t("productDropdown.krastyFood.desc")}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AiFillInfoCircle className="text-xl text-primary mt-1" />
                    <div>
                      <Link
                        to="/Konsultasi"
                        className="font-medium text-main hover:text-green transition-colors"
                        onClick={closeSideNav}
                      >
                        {t("productDropdown.consultation.title")}
                      </Link>
                      <p className="text-sm text-gray-500">
                        {t("productDropdown.consultation.desc")}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 border-b pb-3 last:border-b-0">
                    <AiOutlineCrown className="text-xl text-primary mt-1" />
                    <div>
                      <Link
                        to="/produk-layanan"
                        className="font-medium text-main hover:text-green transition-colors"
                        onClick={closeSideNav}
                      >
                        {t("productDropdown.produkLayanan.title")}
                      </Link>
                      <p className="text-sm text-gray-500">
                        {t("productDropdown.produkLayanan.desc")}
                      </p>
                    </div>
                  </li>
                </ul>
              )}
            </li>

            {/* Mobile Dropdown - Resources */}
            <li className="py-4 px-6 border-b border-b-gray-500 cursor-pointer">
              <div
                className="flex justify-between items-center hover:text-main pr-2"
                onClick={() =>
                  toggleDropdown(setResourcesDropdown, resourcesDropdown)
                }
              >
                <span>{t("header.resources")}</span>
                <AiOutlineDown
                  className={`transform transition-transform duration-300 ${
                    resourcesDropdown ? "rotate-180" : ""
                  }`}
                />
              </div>
              {resourcesDropdown && (
                <ul className="pl-8 bg-green-700 text-sm py-3 space-y-2 mt-2 rounded-lg shadow-md">
                  <li className="py-2">
                    <Link
                      to="/blogs"
                      className="text-white-500 hover:text-main transition-colors flex items-center gap-2"
                      onClick={closeSideNav}
                    >
                      <AiOutlineFileText /> {t("resourcesDropdown.blog")}
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      to="/Testimoni"
                      className="text-white-500 hover:text-main transition-colors flex items-center gap-2"
                      onClick={closeSideNav}
                    >
                      <AiOutlineUsergroupAdd />{" "}
                      {t("resourcesDropdown.testimonials")}
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      to="/HeaderAbout"
                      className="text-white-500 hover:text-main transition-colors flex items-center gap-2"
                      onClick={closeSideNav}
                    >
                      <AiOutlinePlayCircle /> {t("resourcesDropdown.videos")}
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Mobile Dropdown - Company */}
            <li className="py-4 px-6 border-b border-b-gray-500 cursor-pointer">
              <div
                className="flex justify-between items-center hover:text-main pr-2"
                onClick={() =>
                  toggleDropdown(setCompanyDropdown, companyDropdown)
                }
              >
                <span>{t("header.company")}</span>
                <AiOutlineDown
                  className={`transform transition-transform duration-300 ${
                    companyDropdown ? "rotate-180" : ""
                  }`}
                />
              </div>
              {companyDropdown && (
                <ul className="pl-8 bg-green-700 text-sm py-3 space-y-2 mt-2 rounded-lg shadow-md">
                  <li className="py-2">
                    <Link
                      to="/About"
                      className="text-white-500 hover:text-main transition-colors flex items-center gap-2"
                      onClick={closeSideNav}
                    >
                      <AiFillInfoCircle /> {t("companyDropdown.aboutUs")}
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      to="/Partnership"
                      className="text-white-500 hover:text-main transition-colors flex items-center gap-2"
                      onClick={closeSideNav}
                    >
                      <AiOutlineTeam /> {t("companyDropdown.partners")}
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="py-4 px-6 border-b border-b-gray-500 hover:text-main transition-colors">
              <Link to="/Career" onClick={closeSideNav}>
                {t("header.careers")}
              </Link>
            </li>

            {/* Mobile Dropdown - Language */}
            <li className="py-4 px-6 border-b border-b-gray-500 cursor-pointer">
              <div
                className="flex justify-between items-center hover:text-main pr-2"
                onClick={() =>
                  toggleDropdown(setLanguageDropdown, languageDropdown)
                }
              >
                <span>{t("header.language")}</span>
                <AiOutlineDown
                  className={`transform transition-transform duration-300 ${
                    languageDropdown ? "rotate-180" : ""
                  }`}
                />
              </div>
              {languageDropdown && (
                <ul className="pl-8 bg-green-700 text-sm py-3 space-y-2 mt-2 rounded-lg shadow-md">
                  <li className="py-2">
                    <button
                      className="text-white-500 hover:text-main transition-colors"
                      onClick={() => changeLanguage("en")}
                    >
                      English
                    </button>
                  </li>
                  <li className="py-2">
                    <button
                      className="text-white-500 hover:text-main transition-colors"
                      onClick={() => changeLanguage("id")}
                    >
                      Bahasa Indonesia
                    </button>
                  </li>
                </ul>
              )}
            </li>

            <li className="mt-auto p-6">
              <div className="border-2 border-main rounded-full w-full py-2 text-center hover:bg-main">
                <a
                  href="http://api.whatsapp.com/send?phone=6282140773592"
                  target="_blank"
                  rel="noreferrer"
                  className="text-main hover:text-white-300 hover:font-bold"
                  onClick={closeSideNav}
                >
                  {t("header.getStarted")}
                </a>
              </div>
            </li>
          </ul>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link
                to="/"
                className={
                  "cursor-pointer inline-block relative px-2 py-6 text-black-500 hover:text-green transition-colors duration-200"
                }
                onMouseEnter={() => {
                  setProductDropdown(false);
                  setResourcesDropdown(false);
                  setCompanyDropdown(false);
                  setLanguageDropdown(false);
                }}
              >
                {t("header.home")}
              </Link>
            </li>

            <li
              className="relative group py-6"
              onMouseEnter={() => {
                setProductDropdown(true);
                setResourcesDropdown(false);
                setCompanyDropdown(false);
                setLanguageDropdown(false);
              }}
              onMouseLeave={() => setProductDropdown(false)}
            >
              <div className="cursor-pointer flex items-center gap-1 text-black-500 hover:text-green transition-colors duration-200">
                {t("header.products")}
                <AiOutlineDown
                  className={`transform transition-transform duration-300 ${
                    productDropdown ? "rotate-180" : ""
                  }`}
                />
              </div>
              {productDropdown && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-0 top-full z-50 grid grid-cols-2 gap-4 bg-[#cfff42] shadow-xl rounded-xl p-6 w-[600px] transition-all duration-300 opacity-100 scale-100 pointer-events-auto">
                  <Link
                    to="/Products"
                    className="flex items-start gap-3 hover:bg-white-500 hover:text-[#08556b] p-3 rounded-lg transition-colors"
                  >
                    <AiFillSetting className="text-xl text-primary mt-1" />
                    <div>
                      <p className="font-medium text-main">
                        {t("productDropdown.allProducts.title")}
                      </p>
                      <p className="text-sm text-[#08556b]">
                        {t("productDropdown.allProducts.desc")}
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/OurProducts"
                    className="flex items-start gap-3 hover:bg-white-500 hover:text-[#08556b] p-3 rounded-lg transition-colors"
                  >
                    <AiFillSetting className="text-xl text-primary mt-1" />
                    <div>
                      <p className="font-medium text-main">
                        {t("productDropdown.iotProduct.title")}
                      </p>
                      <p className="text-sm text-[#08556b]">
                        {t("productDropdown.iotProduct.desc")}
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/Produk"
                    className="flex items-start gap-3 hover:bg-white-500 hover:text-[#08556b] p-3 rounded-lg transition-colors"
                  >
                    <AiFillInfoCircle className="text-xl text-primary mt-1" />
                    <div>
                      <p className="font-medium text-main">
                        {t("productDropdown.pesanProduk.title")}
                      </p>
                      <p className="text-sm text-[#08556b]">
                        {t("productDropdown.pesanProduk.desc")}
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/OurProductKrastyFood"
                    className="flex items-start gap-3 hover:bg-white-500 hover:text-[#08556b] p-3 rounded-lg transition-colors"
                  >
                    <AiFillSetting className="text-xl text-primary mt-1" />
                    <div>
                      <p className="font-medium text-main">
                        {t("productDropdown.krastyFood.title")}
                      </p>
                      <p className="text-sm text-[#08556b]">
                        {t("productDropdown.krastyFood.desc")}
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/Konsultasi"
                    className="flex items-start gap-3 hover:bg-white-500 hover:text-[#08556b] p-3 rounded-lg transition-colors"
                  >
                    <AiFillInfoCircle className="text-xl text-primary mt-1" />
                    <div>
                      <p className="font-medium text-main">
                        {t("productDropdown.consultation.title")}
                      </p>
                      <p className="text-sm text-[#08556b]">
                        {t("productDropdown.consultation.desc")}
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/produk-layanan"
                    className="flex items-start gap-3 hover:bg-white-500 hover:text-[#08556b] p-3 rounded-lg transition-colors"
                  >
                    <AiOutlineCrown className="text-xl text-primary mt-1" />
                    <div>
                      <p className="font-medium text-main">
                        {t("productDropdown.produkLayanan.title")}
                      </p>
                      <p className="text-sm text-[#08556b]">
                        {t("productDropdown.produkLayanan.desc")}
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </li>

            <li
              className="relative group py-6"
              onMouseEnter={() => {
                setResourcesDropdown(true);
                setProductDropdown(false);
                setCompanyDropdown(false);
                setLanguageDropdown(false);
              }}
              onMouseLeave={() => setResourcesDropdown(false)}
            >
              <div className="cursor-pointer flex items-center gap-1 text-black-500 hover:text-green transition-colors duration-200">
                {t("header.resources")}
                <AiOutlineDown
                  className={`transform transition-transform duration-300 ${
                    resourcesDropdown ? "rotate-180" : ""
                  }`}
                />
              </div>
              {resourcesDropdown && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-0 top-full z-50 bg-[#cfff42] shadow-xl p-4 w-48 rounded-xl transition-all duration-300 opacity-100 scale-100 pointer-events-auto">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <Link
                        to="/blogs"
                        className="flex items-center gap-2 text-[#08556b] hover:bg-white-500 hover:text-[#08556b] p-2 rounded-lg transition-colors"
                      >
                        <AiOutlineFileText /> {t("resourcesDropdown.blog")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Testimoni"
                        className="flex items-center gap-2 text-[#08556b] hover:bg-white-500 hover:text-[#08556b] p-2 rounded-lg transition-colors"
                      >
                        <AiOutlineUsergroupAdd />{" "}
                        {t("resourcesDropdown.testimonials")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/HeaderAbout"
                        className="flex items-center gap-2 text-[#08556b] hover:bg-white-500 hover:text-[#08556b] p-2 rounded-lg transition-colors"
                      >
                        <AiOutlinePlayCircle /> {t("resourcesDropdown.videos")}
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li
              className="relative group py-6"
              onMouseEnter={() => {
                setCompanyDropdown(true);
                setProductDropdown(false);
                setResourcesDropdown(false);
                setLanguageDropdown(false);
              }}
              onMouseLeave={() => setCompanyDropdown(false)}
            >
              <div className="cursor-pointer flex items-center gap-1 text-black-500 hover:text-green transition-colors duration-200">
                {t("header.company")}
                <AiOutlineDown
                  className={`transform transition-transform duration-300 ${
                    companyDropdown ? "rotate-180" : ""
                  }`}
                />
              </div>
              {companyDropdown && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-0 top-full z-50 bg-[#cfff42] shadow-xl p-4 w-48 rounded-xl transition-all duration-300 opacity-100 scale-100 pointer-events-auto">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <Link
                        to="/About"
                        className="flex items-center gap-2 text-[#08556b] hover:bg-white-500 hover:text-[#08556b] p-2 rounded-lg transition-colors"
                      >
                        <AiFillInfoCircle /> {t("companyDropdown.aboutUs")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Partnership"
                        className="flex items-center gap-2 text-[#08556b] hover:bg-white-500 hover:text-[#08556b] p-2 rounded-lg transition-colors"
                      >
                        <AiOutlineTeam /> {t("companyDropdown.partners")}
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li>
              <Link
                to="/Career"
                className={
                  "cursor-pointer inline-block relative px-2 py-6 text-black-500 hover:text-green transition-colors duration-200"
                }
                onMouseEnter={() => {
                  setProductDropdown(false);
                  setResourcesDropdown(false);
                  setCompanyDropdown(false);
                  setLanguageDropdown(false);
                }}
              >
                {t("header.careers")}
              </Link>
            </li>

            <li
              className="relative group py-6"
              onMouseEnter={() => {
                setLanguageDropdown(true);
                setProductDropdown(false);
                setResourcesDropdown(false);
                setCompanyDropdown(false);
              }}
              onMouseLeave={() => setLanguageDropdown(false)}
            >
              <div className="cursor-pointer flex items-center gap-1 text-black-500 hover:text-green transition-colors duration-200">
                {t("header.language")}
                <AiOutlineDown
                  className={`transform transition-transform duration-300 ${
                    languageDropdown ? "rotate-180" : ""
                  }`}
                />
              </div>
              {languageDropdown && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-0 top-full z-50 bg-[#cfff42] shadow-xl p-4 w-48 rounded-xl transition-all duration-300 opacity-100 scale-100 pointer-events-auto">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <button
                        className="flex items-center gap-2 text-[#08556b] hover:bg-white-500 hover:text-[#08556b] p-2 rounded-lg transition-colors w-full text-left"
                        onClick={() => changeLanguage("en")}
                      >
                        English
                      </button>
                    </li>
                    <li>
                      <button
                        className="flex items-center gap-2 text-[#08556b] hover:bg-white-500 hover:text-[#08556b] p-2 rounded-lg transition-colors w-full text-left"
                        onClick={() => changeLanguage("id")}
                      >
                        Bahasa Indonesia
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li className="ml-4">
              <div className="border-2 border-green rounded-full px-4 py-2 text-center hover:bg-green">
                <a
                  href="http://api.whatsapp.com/send?phone=6282140773592"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green hover:text-white-300 hover:font-bold"
                >
                  {t("header.getStarted")}
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
