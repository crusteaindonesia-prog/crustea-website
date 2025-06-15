import React, { useState } from "react"; // Pastikan useState diimpor

const Content5 = () => {
  // Data untuk setiap kartu layanan
  const servicesData = [
    {
      title: "Farming Projects with Profit-Sharing Schemes and Pond Development",
      description:
        "Crustea conducts farming partnerships with profit-sharing, providing services from pond construction to technology support and market access, in exchange for a share of the harvest, ensuring an efficient and sustainable system.",
    },
    {
      title: "Consultation Services and Operational Support for Shrimp and Fish Farms",
      description:
        "Crustea offers expert guidance in shrimp and fish farming, from planning to implementation, ensuring optimal harvests and sustainability. It also enhances farm performance with on-site and remote tech support, emphasizing water quality, energy efficiency, and disease prevention.",
    },
    {
      title: "Energy Management and Optimization",
      description:
        "A real-time system for monitoring, managing, and optimizing energy use with efficient devices, automation, and renewable energy. This service reduces electricity costs, enhances energy efficiency, and promotes sustainability while maintaining productivity.",
    },
    {
      title: "Sustainability and Empowerment project",
      description:
        "Crustea ensures efficient aquaculture trade with the best quality and value. The company also creates value-added processed shrimp and fish products through women’s empowerment, promoting economic inclusion and sustainability by reducing waste.",
    },
    {
      title: "Access to Funding Partner",
      description:
        "Tailored financial solutions to empower aquaculture projects, ensuring access to resources for scaling and optimizing operations.",
    },
    {
      title: "Access to Markets",
      description:
        "Crustea sells high-quality processed shrimp, fish, and waste-based products in the local market and exports them globally, supporting sustainable aquaculture and market expansion.",
    },
  ];

  // State untuk melacak indeks kartu yang sedang terbuka.
  // null berarti tidak ada yang terbuka, angka adalah indeks kartu yang terbuka.
  // Ini memastikan hanya satu kartu yang bisa terbuka pada satu waktu (perilaku akordeon).
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    // Jika kartu yang sedang terbuka diklik lagi, tutup. Jika tidak, buka kartu yang baru diklik.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative py-8 sm:py-12 px-4 md:px-6 overflow-hidden min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/landing/content5.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(252, 252, 252, 0.69)", // Lapisan putih semi-transparan yang lebih subtle lagi
        backgroundBlendMode: "lighten", // Mencampur latar belakang dengan gambar
      }}
    >
      {/* Lapisan gradien hijau yang lebih lembut di background */}
      {/* Opacity lebih rendah untuk tampilan yang lebih bersih */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#d0e0d2] to-crustea-lightGreen opacity-75"></div>

      <div className="max-w-screen-xl mx-auto relative z-10 w-full">
        {/* Judul Utama dengan Gradien Warna Crustea */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8 md:mb-10 tracking-wide leading-tight"
          style={{
            backgroundImage: `linear-gradient(to right,rgb(25, 46, 76),rgb(35, 115, 146))`, // Hex code langsung untuk gradien teks
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent", // Fallback
          }}
        >
          Our Services
        </h2>

        {/* Grid Layanan dengan Aksi Buka/Tutup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-5 justify-center">
          {servicesData.map((service, index) => {
            const isOpen = openIndex === index;
            const panelId = `service-panel-${index}`; // ID unik untuk konten deskripsi (aksesibilitas)
            const headerId = `service-header-${index}`; // ID unik untuk tombol judul (aksesibilitas)
            const headerManualTextColorTitle = "#465057";
            const headerManualTextColorDescription = "#152e79";

            return (
              <div
                key={index}
                className={`
                  relative
                  rounded-xl p-4 // Padding dan border-radius
                  transition-all duration-300 ease-in-out // Transisi untuk perubahan umum
                  overflow-hidden // Penting untuk efek slide buka/tutup
                  
                  // Gaya dasar kartu saat tertutup
                  bg-white shadow-md border border-gray-200
                  
                  // Gaya kartu saat terbuka
                  ${isOpen ? 'shadow-lg border-crustea-accentPurple bg-crustea-lightGreen' : ''}
                  
                  // Efek glow hanya pada kartu yang terbuka (membuatnya lebih 'keren' dan menonjol)
                  // Pastikan 'animate-powerful-glow' dan warnanya didefinisikan di tailwind.config.js Anda.
                  ${isOpen ? 'animate-powerful-glow' : ''} 
                `}
              >
                {/* Tombol Judul - Area yang bisa diklik */}
                <button
                  id={headerId}
                  aria-expanded={isOpen} // Menginformasikan screen reader status buka/tutup
                  aria-controls={panelId} // Menghubungkan tombol dengan konten yang dikontrolnya
                  className="flex justify-between items-center w-full text-left cursor-pointer focus:outline-none py-1.5" // Tambahkan py untuk area klik yang lebih besar
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-lg sm:text-xl font-semibold leading-snug pr-4" style={{ color: headerManualTextColorTitle }}>
                    {service.title}
                  </h3>
                  {/* Ikon panah yang berputar */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 text-crustea-accentPurple transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0' // Rotasi ikon saat terbuka
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Konten Deskripsi yang bisa dibuka/ditutup */}
                <div
                  id={panelId}
                  role="region" // Mengidentifikasi bagian ini sebagai "region" untuk aksesibilitas
                  aria-labelledby={headerId} // Menghubungkan konten dengan judul yang melabelinya
                  className={`
                    transition-all duration-500 ease-in-out // Transisi untuk efek buka/tutup
                    ${isOpen ? 'max-h-[500px] opacity-100 pt-2' : 'max-h-0 opacity-0 pt-0'}
                    // max-h-[500px] adalah nilai aman. Sesuaikan jika deskripsi sangat panjang agar tidak terpotong.
                  `}
                >
                  <p className="text-sm text-gray-700 leading-relaxed" style={{ color: headerManualTextColorDescription }}>
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Div untuk gradasi di bagian bawah. Dibiarkan tidak berubah. */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/3"
        style={{
          background: 'linear-gradient(to top, white, transparent)',
        }}
      ></div>
    </section>
  );
};

export default Content5;