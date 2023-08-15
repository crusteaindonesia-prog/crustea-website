import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// Import react scroll
import { Link as LinkScroll } from "react-scroll";

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
            d="M68.85 56.1a16.48 16.48 0 0 1-5.9-1 13.85 13.85 0 0 1-4.72-3 13.7 13.7 0 0 1-3.11-4.5 15 15 0 0 1 0-11.36 13.54 13.54 0 0 1 3.13-4.51A14.1 14.1 0 0 1 63 28.78a17.42 17.42 0 0 1 12.35.22 12.58 12.58 0 0 1 4.86 3.62l-4.11 3.74a9.45 9.45 0 0 0-3.1-2.43 8.71 8.71 0 0 0-3.78-.83 9.34 9.34 0 0 0-3.52.65 8.11 8.11 0 0 0-4.61 4.6 10.25 10.25 0 0 0 0 7.13 8.17 8.17 0 0 0 4.61 4.61 9.34 9.34 0 0 0 3.52.64 8.58 8.58 0 0 0 3.78-.84 9.65 9.65 0 0 0 3.12-2.45l4.11 3.76a12.75 12.75 0 0 1-4.86 3.65 16.31 16.31 0 0 1-6.52 1.25ZM84 55.63V34.55h5.84v6L89 38.78a6.78 6.78 0 0 1 3-3.38 10.25 10.25 0 0 1 5-1.16v5.68l-.68-.12h-.65a5.76 5.76 0 0 0-4.11 1.45 5.9 5.9 0 0 0-1.53 4.47v10ZM109.79 55.94a10.4 10.4 0 0 1-4.71-1 7.2 7.2 0 0 1-3.17-3.13 11.16 11.16 0 0 1-1.13-5.33V34.55h6.11v11a5.71 5.71 0 0 0 1.11 3.9 4.06 4.06 0 0 0 3.16 1.23 4.91 4.91 0 0 0 2.5-.62 4.5 4.5 0 0 0 1.75-1.88 6.83 6.83 0 0 0 .64-3.14V34.55h6.08v21.08h-5.8v-5.84l1.06 1.73a7.57 7.57 0 0 1-3.14 3.31 9.19 9.19 0 0 1-4.46 1.11ZM134.9 55.94a20.42 20.42 0 0 1-5.18-.64 13.46 13.46 0 0 1-4-1.63l2-4.35a15.06 15.06 0 0 0 3.46 1.43 14.05 14.05 0 0 0 3.9.57 6.4 6.4 0 0 0 3-.51 1.56 1.56 0 0 0 .92-1.41 1.2 1.2 0 0 0-.69-1.12 6.17 6.17 0 0 0-1.8-.56c-.74-.13-1.57-.26-2.49-.4a25.64 25.64 0 0 1-2.72-.54 10.87 10.87 0 0 1-2.51-1A4.94 4.94 0 0 1 127 44a5.65 5.65 0 0 1-.68-2.93 5.72 5.72 0 0 1 1.17-3.55 7.74 7.74 0 0 1 3.33-2.41 14.17 14.17 0 0 1 5.21-.86 20.2 20.2 0 0 1 4.41.49 13.94 13.94 0 0 1 3.74 1.35l-2.08 4.35a10.79 10.79 0 0 0-3-1.21 13.07 13.07 0 0 0-3-.36 6.45 6.45 0 0 0-3.06.55 1.64 1.64 0 0 0-.94 1.41 1.33 1.33 0 0 0 .71 1.2 5.6 5.6 0 0 0 1.84.6l2.51.4a24.8 24.8 0 0 1 2.7.54 10.9 10.9 0 0 1 2.49 1 5 5 0 0 1 1.84 1.78 5.61 5.61 0 0 1 .69 2.94 5.45 5.45 0 0 1-1.18 3.43 7.61 7.61 0 0 1-3.39 2.37 15 15 0 0 1-5.41.85ZM146.1 39.72V35h14.61v4.7Zm11.12 16.22a8.23 8.23 0 0 1-5.79-1.9 7.26 7.26 0 0 1-2.08-5.66V29.89h6.15v18.37a3 3 0 0 0 .69 2.08 2.38 2.38 0 0 0 1.86.75 4 4 0 0 0 2.5-.79l1.61 4.31a6.34 6.34 0 0 1-2.21 1 11.21 11.21 0 0 1-2.73.33ZM175.44 55.94a13.47 13.47 0 0 1-6.31-1.41 10.37 10.37 0 0 1-4.19-3.86 10.54 10.54 0 0 1-1.49-5.58 11 11 0 0 1 1.43-5.6 10.11 10.11 0 0 1 4-3.86 11.88 11.88 0 0 1 5.78-1.39 11.62 11.62 0 0 1 5.58 1.33 10 10 0 0 1 3.94 3.76 11.26 11.26 0 0 1 1.44 5.84v.8c0 .3-.06.58-.08.85h-17.15v-3.57h13.91l-2.39 1.06a5.67 5.67 0 0 0-.63-2.86 4.94 4.94 0 0 0-1.84-1.9 5.34 5.34 0 0 0-2.74-.69 5.45 5.45 0 0 0-2.77.69 4.91 4.91 0 0 0-1.86 1.92 6.08 6.08 0 0 0-.66 2.92v.94a5.79 5.79 0 0 0 .78 3.05 5.17 5.17 0 0 0 2.16 2 7.23 7.23 0 0 0 3.29.69 7.75 7.75 0 0 0 2.91-.51 7.28 7.28 0 0 0 2.34-1.56l3.25 3.52a9.47 9.47 0 0 1-3.65 2.53 13.39 13.39 0 0 1-5.05.89ZM195.61 55.94a9.67 9.67 0 0 1-4.19-.84 6.55 6.55 0 0 1-2.72-2.29 5.77 5.77 0 0 1-1-3.25 5.56 5.56 0 0 1 3.84-5.49 14.68 14.68 0 0 1 5.25-.78h5.56v3.53h-4.93a4.59 4.59 0 0 0-3 .7 2.24 2.24 0 0 0-.81 1.76 2.19 2.19 0 0 0 .92 1.86 4.09 4.09 0 0 0 2.49.69 5.52 5.52 0 0 0 2.8-.71 3.81 3.81 0 0 0 1.83-2.12l.94 2.86a5.6 5.6 0 0 1-2.43 3 8.71 8.71 0 0 1-4.55 1.08Zm6.43-.31v-4.11l-.39-.91v-7.36a4 4 0 0 0-1.2-3.06 5.28 5.28 0 0 0-3.66-1.09 10.42 10.42 0 0 0-3.31.53 9.12 9.12 0 0 0-2.8 1.43l-2.16-4.27a12.36 12.36 0 0 1 4.16-1.9 19.12 19.12 0 0 1 4.93-.65c3.21 0 5.71.76 7.48 2.27s2.67 3.88 2.67 7.09v12Z"
          />
        </g>
      </g>
    </svg>
  </div>
);
const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const [sidenav, setSideNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  function handleSideNav() {
    setSideNav(!sidenav);
  }

  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="w-full max-w-[1240px] px-4 mx-auto flex flex-row justify-between items-center">
          <div className="flex items-center">
            <LogoVPN className="h-8 w-auto" />
          </div>
          <div onClick={handleSideNav} className="md:hidden">
            {sidenav ? (
              <AiOutlineClose size={30} className="text-green" />
            ) : (
              <AiOutlineMenu size={30} className="text-green" />
            )}
          </div>
          <ul
            className={
              sidenav
                ? "text-white-500 fixed top-0 left-0 w-[60%] h-full bg-green text-base border-r-gray-100 ease-in-out duration-500 border-r border-gray-800 md:hidden"
                : "ease-in-out duration-500 fixed left-[-100%]"
            }
          >
            <div className="flex items-center p-4 bg-white-500 ">
              <LogoVPN className="h-8 w-auto" />
            </div>
            <li className="p-4 border-b border-b-gray-500 hover:text-main">
              Home
            </li>
            <li className="p-4 border-b border-b-gray-500 hover:text-main">
              <LinkScroll
                activeClass="active"
                to="testimoni"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("testimoni");
                }}
                className={
                  "cursor-pointer hover:text-main inline-block relative" +
                  (activeLink === "testimoni"
                    ? " text-main animation-active "
                    : " text-white-500 hover:text-main a")
                }
              >
                Testimonial
              </LinkScroll>
            </li>
            <li className="p-4 border-b border-b-gray-500 hover:text-main">
              <LinkScroll
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("about");
                }}
                className={
                  "cursor-pointer hover:text-main inline-block relative" +
                  (activeLink === "about"
                    ? " text-main animation-active "
                    : " text-white-500 hover:text-main a")
                }
              >
                About Us
              </LinkScroll>
            </li>
            <div className="m-4 border-2 border-main rounded-full w-[123px] hover:bg-main">
              <p className="text-main text-center text-base hover:text-white-300 hover:font-bold py-1">
                <a
                  href="https://linktr.ee/crusteaid"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Startted
                </a>
              </p>
            </div>
          </ul>
          <ul className="hidden md:flex w-[456px] flex-row justify-between items-center p-4 ">
            <li>
              <LinkScroll
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("home");
                }}
                className={
                  "cursor-pointer animation-hover inline-block relative" +
                  (activeLink === "home"
                    ? " text-green animation-active "
                    : " text-black-500 hover:text-green a")
                }
              >
                Home
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                activeClass="active"
                to="testimoni"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("testimoni");
                }}
                className={
                  "cursor-pointer animation-hover inline-block relative" +
                  (activeLink === "testimoni"
                    ? " text-green animation-active "
                    : " text-black-500 hover:text-green a")
                }
              >
                Testimonial
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("about");
                }}
                className={
                  "cursor-pointer animation-hover inline-block relative" +
                  (activeLink === "about"
                    ? " text-green animation-active "
                    : " text-black-500 hover:text-green a")
                }
              >
                About Us
              </LinkScroll>
            </li>
            <div className="border-2 border-green rounded-full w-[123px] hover:bg-green">
              <p className="text-green text-center text-base hover:text-white-300 hover:font-bold py-1">
                <a
                  href="https://linktr.ee/crusteaid"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Startted
                </a>
              </p>
            </div>
          </ul>
        </nav>
      </header>
      {/* Mobile Navigation */}

      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
