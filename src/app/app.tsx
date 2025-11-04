// src/app/app.tsx
import "../i18n/i18n";
// <== Pastikan ini tetap ada di paling atas
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import ScrollTopButton from "components/Layout/ScrollTopButton";
import ScrollToTop from "components/Layout/ScrollToTop";
import Header from "components/Layout/Header";
import Footer from "components/Layout/Footer";
import HomePage from "components/pages/HomePage/HomePage";
import Products from "components/pages/Products/Products";
import About from "components/pages/About/About";
import Article from "components/pages/HomePage/Article";
import Blogs from "components/pages/HomePage/Blogs";
import Testimoni from "../components/pages/Products/Testimoni";
import Partnership from "../components/pages/Products/Partnership";
import HeaderAbout from "../components/pages/About/HeaderAbout";
import Career from "../components/pages/Careers/Career";
import OurProducts from "../components/pages/Products/OurProduct";
import OurProductKrastyFood from "../components/pages/Products/OurProductKrastyFood";
import Konsultasi from "../components/pages/Products/Konsultasi";
import Produk from "../components/pages/Products/Produk";
import ProdukLayanan from "components/pages/Products/ProdukLayanan";

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // WhatsApp Button
    const whatsappButton = document.createElement("a");
    whatsappButton.href =
      "https://wa.me/6282140773592?text=Halo CRUSTEA, Halo PT Eco Karya Teknologi. Saya berminat dengan produk yang dijual, bisakah diskusi lebih lanjut?";
    whatsappButton.target = "_blank";
    whatsappButton.setAttribute("aria-label", "Chat WhatsApp");

    Object.assign(whatsappButton.style, {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      backgroundColor: "#25d366",
      borderRadius: "50%",
      width: "60px",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      zIndex: "9999",
      cursor: "pointer",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    });

    const whatsappIcon = document.createElement("img");
    whatsappIcon.src = "/images/landing/logowhatsapp.jpg";
    whatsappIcon.alt = "WhatsApp Chat Icon";
    // Prioritize fetching this small UI icon to improve perceived responsiveness
    whatsappIcon.setAttribute("fetchpriority", "high");
    Object.assign(whatsappIcon.style, {
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      objectFit: "cover",
    });

    whatsappButton.appendChild(whatsappIcon);
    document.body.appendChild(whatsappButton);

    const handleHoverIn = () => {
      whatsappButton.style.transform = "scale(1.1)";
      whatsappButton.style.boxShadow = "0 6px 14px rgba(0, 0, 0, 0.3)";
    };
    const handleHoverOut = () => {
      whatsappButton.style.transform = "scale(1)";
      whatsappButton.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
    };

    whatsappButton.addEventListener("mouseenter", handleHoverIn);
    whatsappButton.addEventListener("mouseleave", handleHoverOut);

    return () => {
      whatsappButton.removeEventListener("mouseenter", handleHoverIn);
      whatsappButton.removeEventListener("mouseleave", handleHoverOut);
      whatsappButton.remove();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollTopButton visible={showScrollTop} />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/About" element={<About />} />
        <Route path="/blog/:id" element={<Article />} />
        <Route path="/blogs" element={<Blogs isHomePage={false} />} />
        <Route path="/Testimoni" element={<Testimoni />} />
        <Route path="/Partnership" element={<Partnership />} />
        <Route path="/HeaderAbout" element={<HeaderAbout />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/OurProducts" element={<OurProducts />} />
        <Route
          path="/OurProductKrastyFood"
          element={<OurProductKrastyFood />}
        />
        <Route path="/Konsultasi" element={<Konsultasi />} />
        <Route path="/Produk" element={<Produk />} />
        <Route path="/produk-layanan" element={<ProdukLayanan />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
