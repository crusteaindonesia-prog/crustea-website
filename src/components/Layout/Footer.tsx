import React from "react";
import styles from "./footer.module.css";
import ig from "../../../public/images/landing/icon_footer/instagram.svg";
import linkedin from "../../../public/images/landing/icon_footer/linkedin.svg";
import fb from "../../../public/images/landing/icon_footer/facebook.svg";
import mail from "../../../public/images/landing/icon_footer/gmail.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Background footer opacity */}
      <div className={styles.backgroundImage}></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
        {/* Logo & Alamat Crustea*/}
        <div className="flex-1">
          <a href="/" className="inline-block">
            <img
              src="/assets/Logo.svg"
              alt="Crustea Logo"
              className="w-36 mb-4 cursor-pointer hover:opacity-80 transition"
            />
          </a>
          <h4 className="font-semibold text-xl mb-2">PT. Crustea Nusantara Teknologi</h4>
          <p className="text-sm text-[#3E5F78]">
            Jl. Sanggung Tim. No.1, Jatingaleh, Candisari, Semarang, <br />
            Jawa Tengah 50254
          </p>
        </div>

        {/* Follow Us SOSMED */}
        <div className="flex-1">
          <h4 className={`font-semibold text-xl mb-4 ${styles.sectionTitle}`}>Follow Us</h4>
          <ul className="space-y-4 text-sm text-[#3E5F78]">
            <li className={styles.socialItem}>
              <img src={fb} alt="Facebook" className={styles.icon} />
              <a href="#" className={styles.link}>Facebook</a>
            </li>
            <li className={styles.socialItem}>
              <img src={ig} alt="Instagram" className={styles.icon} />
              <a
                href="https://www.instagram.com/crustea.id/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                Instagram
              </a>
            </li>
            <li className={styles.socialItem}>
              <img src={linkedin} alt="LinkedIn" className={styles.icon} />
              <a
                href="https://www.linkedin.com/company/crusteaindonesia/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                LinkedIn
              </a>
            </li>
            <li className={styles.socialItem}>
              <img src={mail} alt="Email" className={`${styles.icon} ${styles.iconGreen}`} />
              <a
                href="mailto:nusakarya.teknologi@gmail.com"
                className={styles.link}
              >
                Email
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Care WhatsApp API*/}
        <div className="flex-1">
          <h4 className={`font-semibold text-xl mb-4 ${styles.sectionTitle}`}>Customer Care</h4>
          &ensp;  <a
            href="http://api.whatsapp.com/send?phone=6282140773592"
            className={styles.contactButton}
          >
            Contact Us
          </a>
          <p className="mt-3 text-sm text-[#3E5F78]">&ensp; &ensp; info@crustea.id</p>
        </div>
      </div>

      <br></br>
      {/* CTA */}
      <div className="text-center mt-10 relative z-10">
        <a
          href="https://linktr.ee/crusteaid"
          className={styles.ctaButton}
        >
          Crustea.id Informasi
        </a>
      </div>

      {/* Wave Animation */}
      <div className={styles.waveWrapper}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#A5C559"
            fillOpacity="1"
            d="M0,256L48,213.3C96,171,192,85,288,64C384,43,480,171,576,192C672,213,768,107,864,80C960,53,1056,107,1152,160C1248,213,1344,267,1392,293.3L1440,320V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0V256Z"
          ></path>
        </svg>
      </div>

      {/* Copyright 2025*/}
      <div className="text-center text-sm text-[#7D97AD] mt-4 z-10 relative">
        &copy; {new Date().getFullYear()} Eco Aerator Crustea Indonesia
      </div>
    </footer>
  );
};

export default Footer;
