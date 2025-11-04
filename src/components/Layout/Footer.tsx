import React from "react";
import styles from "./footer.module.css";
// Impor hook useTranslation
import { useTranslation } from "react-i18next"; // Pastikan ini diimpor

import ig from "/images/landing/icon_footer/instagram.svg";
import linkedin from "/images/landing/icon_footer/linkedin.svg";
import fb from "/images/landing/icon_footer/facebook.svg";
import mail from "/images/landing/icon_footer/mail.svg";
import gmail from "/images/landing/icon_footer/gmail.png";
import wa from "/images/landing/icon_footer/wa.png";
import office from "/images/landing/icon_footer/telepon.jpg";
import appstore from "/images/landing/icon_footer/appstore.png";
import playstore from "/images/landing/icon_footer/googleplaystore.png";

const Footer = () => {
  // Panggil useTranslation di dalam komponen fungsional
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.backgroundImage}></div>

      <div className="max-w-7xl mx-auto px-4 py-10 relative z-10 flex flex-col gap-12 md:gap-16">
        {/* Baris 1: Alamat dan kontak */}
        <div className="flex-1 min-w-[220px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Info Alamat & Kontak */}
            <div>
              <a href="/">
                <img
                  src="/assets/Logo.svg"
                  alt="Crustea Logo"
                  className="w-36 mb-4 hover:opacity-80 transition"
                />
              </a>
              {/* Menggunakan terjemahan untuk nama perusahaan */}
              <h4 className="font-semibold text-base mb-2">
                {t("footer.company_name")}
              </h4>
              <p className="text-sm text-[#3E5F78] leading-relaxed">
                {t("footer.address_line1")}
                <br />
                {t("footer.address_line2")}
                <br />
                {t("footer.address_line3")}
              </p>
              {/* Menggunakan terjemahan untuk CS & Sales */}
              <h4 className="mt-4 font-semibold text-base">
                {t("footer.cs_sales")}
              </h4>
              <div className="mt-2 space-y-2 text-sm text-[#3E5F78]">
                <div className="flex items-center gap-2">
                  <img src={gmail} alt="Email" className="w-4 h-4" />
                  crusteaindonesia@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <img src={wa} alt="WhatsApp" className="w-4 h-4" />
                  +6282140773592
                </div>
                <div className="flex items-center gap-2">
                  <img src={office} alt="Office" className="w-4 h-4" />
                  +6282140773592
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <a href="https://www.facebook.com/crustea.id/?locale=id_ID">
                  <img src={fb} alt="Facebook" className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/crusteaindonesia/">
                  <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/crustea.id/">
                  <img src={ig} alt="Instagram" className="w-5 h-5" />
                </a>
                <a href="mailto:crusteaindonesia@gmail.com">
                  <img src={mail} alt="Email" className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-6 flex gap-3">
                <a href="#">
                  <img src={appstore} alt="App Store" className="h-10" />
                </a>
                <a href="#">
                  <img src={playstore} alt="Google Play" className="h-10" />
                </a>
              </div>
            </div>

            {/* Google Maps */}
            <div className="w-full h-64 lg:h-auto">
              <iframe
                title="Crustea Location"
                className="w-full h-full rounded-lg shadow"
                frameBorder="0"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.847182690063!2d110.4265817140861!3d-7.810911779617717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708bc1eabebf8d%3A0xe2cf19bce679cc41!2sJl.%20Sanggung%20Timur%20No.1%2C%20Jatingaleh%2C%20Semarang!5e0!3m2!1sid!2sid!4v1684221850981!5m2!1sid!2sid"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Baris 2: Navigasi produk dan lainnya */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Produk */}
          <div>
            {/* Menggunakan terjemahan untuk Products heading */}
            <h4 className="font-semibold text-base mb-4">
              {t("footer.products_heading")}
            </h4>
            <ul className="space-y-2 text-sm text-[#3E5F78]">
              {/* Menggunakan terjemahan untuk setiap item produk */}
              <li>
                <a href="/Products">{t("footer.products_catalog")}</a>
              </li>
              <li>
                <a href="https://www.tokopedia.com/crustea/smart-energy-system-crustea?extParam=src%3Dshop&aff_unique_id=&channel=others&chain_key=">
                  {t("footer.products_buy_smart_energy")}
                </a>
              </li>
              <li>
                <a href="https://www.tokopedia.com/crustea/ebii-monitoring-controlling-system?extParam=src%3Dshop&aff_unique_id=&channel=others&chain_key=">
                  {t("footer.products_buy_ebii_system")}
                </a>
              </li>
              <li>
                <a href="https://www.tokopedia.com/crustea/panel-surya-1-hp-1-phase-1730780720739550257?extParam=src%3Dshop&aff_unique_id=&channel=others&chain_key=">
                  {t("footer.products_buy_eco_aerator")}
                </a>
              </li>
              <li>
                <a href="https://www.tokopedia.com/crustea/turbo-jet-aerator-crustea-1730780698225771569?extParam=src%3Dshop&aff_unique_id=&channel=others&chain_key=">
                  {t("footer.products_buy_turbo_jet_aerator")}
                </a>
              </li>
              <li>
                <a href="https://www.tokopedia.com/crustea/aerator-mini-300-watt-crutea-murah-1730569636330243121?extParam=src%3Dshop&aff_unique_id=&channel=others&chain_key=">
                  {t("footer.products_buy_mini_aerator")}
                </a>
              </li>
              <li>
                <a href="https://www.tokopedia.com/crustea">
                  {t("footer.products_shrimp_market_tokopedia")}
                </a>
              </li>
              <li>
                <a href="/blogs">{t("footer.products_blog_news_article")}</a>
              </li>
            </ul>
          </div>

          {/* Solusi */}
          <div>
            {/* Menggunakan terjemahan untuk Solutions heading */}
            <h4 className="font-semibold text-base mb-4">
              {t("footer.solutions_heading")}
            </h4>
            <ul className="space-y-2 text-sm text-[#3E5F78]">
              {/* Menggunakan terjemahan untuk setiap item solusi */}
              <li>
                <a href="/blog/38">
                  {t("footer.solutions_challenges_shrimp_farmers")}
                </a>
              </li>
              <li>
                <a href="/blog/40">
                  {t("footer.solutions_success_vaname_cultivation")}
                </a>
              </li>
              <li>
                <a href="/blog/29">{t("footer.solutions_iot_aquaculture")}</a>
              </li>
              <li>
                <a href="/blog/13">{t("footer.solutions_biofloc")}</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            {/* Menggunakan terjemahan untuk Resources heading */}
            <h4 className="font-semibold text-base mb-4">
              {t("footer.resources_heading")}
            </h4>
            <ul className="space-y-2 text-sm text-[#3E5F78]">
              {/* Menggunakan terjemahan untuk setiap item resources */}
              <li>
                <a href="/blogs">{t("footer.resources_blog")}</a>
              </li>
              <li>
                <a href="/Testimoni">{t("footer.resources_testimoni")}</a>
              </li>
              <li>
                <a href="https://youtube.com/@crusteaindonesia?si=YXMCw4NosFIrBgSz">
                  {t("footer.resources_videos")}
                </a>
              </li>
              <li>
                <a href="/Konsultasi">{t("footer.resources_konsultasi")}</a>
              </li>
              <li>
                <a href="/OurProductKrastyFood">
                  {t("footer.resources_food_processing")}
                </a>
              </li>
              <li>
                <a href="/Produk">{t("footer.resources_pesan_produk")}</a>
              </li>
            </ul>
          </div>

          {/* Company & Reports */}
          <div>
            {/* Menggunakan terjemahan untuk Company heading */}
            <h4 className="font-semibold text-base mb-4">
              {t("footer.company_heading")}
            </h4>
            <ul className="space-y-2 text-sm text-[#3E5F78]">
              {/* Menggunakan terjemahan untuk setiap item company */}
              <li>
                <a href="https://www.tokopedia.com/crustea">
                  {t("footer.company_pricing")}
                </a>
              </li>
              <li>
                <a href="/About">{t("footer.company_about_us")}</a>
              </li>
              <li>
                <a href="/Career">{t("footer.company_careers")}</a>
              </li>
              <li>
                <a href="/Partnership">{t("footer.company_partner_with_us")}</a>
              </li>
            </ul>
            {/* Menggunakan terjemahan untuk Reports heading */}
            <h4 className="font-semibold text-base mt-6 mb-2">
              {t("footer.reports_heading")}
            </h4>
            <ul className="space-y-2 text-sm text-[#3E5F78]">
              {/* Menggunakan terjemahan untuk setiap item reports */}
              {/* <li><a href="#">{t('footer.reports_2025')}</a></li>
              <li><a href="#">{t('footer.reports_2024')}</a></li>
              <li><a href="#">{t('footer.reports_2023')}</a></li>
              <li><a href="#">{t('footer.reports_2022')}</a></li> */}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bawah */}
      <div className="text-center text-sm text-[#7D97AD] py-4 relative z-10">
        {/* Menggunakan terjemahan untuk copyright dengan interpolasi tahun */}
        {t("footer.copyright", { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
};

export default Footer;
