import React from "react";
import styles from "./footer.module.css";
import ig from "../../../public/images/landing/icon_footer/instagram.svg";
import linkedin from "../../../public/images/landing/icon_footer/linkedin.svg";
import fb from "../../../public/images/landing/icon_footer/facebook.svg";
import mail from "../../../public/images/landing/icon_footer/mail.svg";
import gmail from "../../../public/images/landing/icon_footer/gmail.png";
import wa from "../../../public/images/landing/icon_footer/wa.png";
import office from "../../../public/images/landing/icon_footer/telepon.jpg";
import appstore from "../../../public/images/landing/icon_footer/appstore.png";
import playstore from "../../../public/images/landing/icon_footer/googleplaystore.png";

const Footer = () => {
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
      <h4 className="font-semibold text-base mb-2">PT Eco Karya Teknologi</h4>
      <p className="text-sm text-[#3E5F78] leading-relaxed">
        Ground Floor Crustea Labs,<br />
        Jl. Sanggung Timur No.1, Jatingaleh, Semarang,<br />
        Jawa Tengah 50254
      </p>
      <h4 className="mt-4 font-semibold text-base">CS & Sales</h4>
      <div className="mt-2 space-y-2 text-sm text-[#3E5F78]">
        <div className="flex items-center gap-2">
          <img src={gmail} alt="Email" className="w-4 h-4" />
          info@crustea.id
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
        <a href="https://www.facebook.com/crustea.id/?locale=id_ID"><img src={fb} alt="Facebook" className="w-5 h-5" /></a>
        <a href="https://www.linkedin.com/company/crusteaindonesia/"><img src={linkedin} alt="LinkedIn" className="w-5 h-5" /></a>
        <a href="https://www.instagram.com/crustea.id/"><img src={ig} alt="Instagram" className="w-5 h-5" /></a>
        <a href="mailto:nusakarya.teknologi@gmail.com"><img src={mail} alt="Email" className="w-5 h-5" /></a>
      </div>
      <div className="mt-6 flex gap-3">
        <a href="#"><img src={appstore} alt="App Store" className="h-10" /></a>
        <a href="#"><img src={playstore} alt="Google Play" className="h-10" /></a>
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
      <h4 className="font-semibold text-base mb-4">Products</h4>
      <ul className="space-y-2 text-sm text-[#3E5F78]">
        <li><a href="/Products">Catalog Product Crustea</a></li>
        <li><a href="https://www.tokopedia.com/crustea/smart-energy-system-crustea?extParam=src%3Dshop&aff_unique_id=&channel=others&chain_key=">Buy Smart Energy</a></li>
        <li><a href="https://www.tokopedia.com/crustea/ebii-monitoring-controlling-system?extParam=src%3Dshop&aff_unique_id=&channel=others&chain_key=">Buy EBII System</a></li>
        <li><a href="https://www.tokopedia.com/crustea/panel-surya-1-hp-1-phase-1730780720739550257?extParam=src%3Dshop&aff_unique_id=&channel=others&chain_key=">Buy Eco Aerator</a></li>
        <li><a href="https://www.tokopedia.com/crustea/turbo-jet-aerator-crustea-1730780698225771569?extParam=src%3Dshop&aff_unique_id=&channel=others&chain_key=">Buy Turbo Jet Aerator</a></li>
        <li><a href="https://www.tokopedia.com/crustea/aerator-mini-300-watt-crutea-murah-1730569636330243121?extParam=src%3Dshop&aff_unique_id=&channel=others&chain_key=">Buy Mini Aerator</a></li>
        <li><a href="https://www.tokopedia.com/crustea">Shrimp Market Toko Pedia</a></li>
        <li><a href="/blogs">Blog News Artikel</a></li>
        <li><a href="https://www.tokopedia.com/crustea">Shrimp Price</a></li>
      </ul>
    </div>

    {/* Solusi */}
    <div>
      <h4 className="font-semibold text-base mb-4">Solutions</h4>
      <ul className="space-y-2 text-sm text-[#3E5F78]">
        <li><a href="/blog/38">Tantangan Petambak</a></li>
        <li><a href="/blog/40">Sukses Budidaya Udang Vaname</a></li>
        <li><a href="/blog/29">IoT Akuakultur</a></li>
        <li><a href="/blog/13">Bioflok</a></li>
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h4 className="font-semibold text-base mb-4">Resources</h4>
      <ul className="space-y-2 text-sm text-[#3E5F78]">
        <li><a href="/blogs">Blog</a></li>
        <li><a href="#">Customers</a></li>
        <li><a href="https://youtube.com/@crusteaindonesia?si=YXMCw4NosFIrBgSz">Videos</a></li>
        <li><a href="#">Shrimp Outlook</a></li>
        <li><a href="#">EBII Terms</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms and Conditions</a></li>
        <li><a href="#">FAQ</a></li>
      </ul>
    </div>

    {/* Company & Reports */}
    <div>
      <h4 className="font-semibold text-base mb-4">Company</h4>
      <ul className="space-y-2 text-sm text-[#3E5F78]">
        <li><a href="https://www.tokopedia.com/crustea">Pricing</a></li>
        <li><a href="/About">About Us</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="/Products">Partner with Us</a></li>
      </ul>
      <h4 className="font-semibold text-base mt-6 mb-2">Reports</h4>
      <ul className="space-y-2 text-sm text-[#3E5F78]">
        <li><a href="#">The 2025 Report</a></li>
        <li><a href="#">The 2024 Report</a></li>
        <li><a href="#">The 2023 Report</a></li>
        <li><a href="#">The 2022 Report</a></li>
      </ul>
    </div>
  </div>
</div>

      {/* Wave */}
      <div className={styles.waveWrapper}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#A5C559"
            fillOpacity="1"
            d="M0,256L48,213.3C96,171,192,85,288,64C384,43,480,171,576,192C672,213,768,107,864,80C960,53,1056,107,1152,160C1248,213,1344,267,1392,293.3L1440,320V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0V256Z"
          ></path>
        </svg>
      </div>

      {/* Footer Bawah */}
      <div className="text-center text-sm text-[#7D97AD] py-4 relative z-10">
        &copy; {new Date().getFullYear()} PT Eco Karya Teknologi CRUSTEA
      </div>
    </footer>
  );
};

export default Footer;
