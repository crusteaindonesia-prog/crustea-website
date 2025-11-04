import React from "react";
import { useTranslation } from "react-i18next";

// --- Komentar terkait Framer Motion tetap dipertahankan seperti kode asli Anda ---
// import { motion } from "framer-motion";
// import getScrollAnimation from "../../../utils/getScrollAnimation";
// import ScrollAnimationWrapper from "../../Layout/ScrollAnimationWrapper";
// --- Akhir Komentar Framer Motion ---

const icons = {
  // Kunci di sini HARUS berupa string literal bahasa Inggris
  Innovation: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="12" fill="#ACCB37" />
      <path
        d="M12 4a5 5 0 00-2 9.584V17a1 1 0 001 1h2a1 1 0 001-1v-3.416A5 5 0 0012 4z"
        fill="white"
      />
    </svg>
  ),
  Sustainability: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="12" fill="#ACCB37" />
      <path
        d="M12 6C9.243 6 7 8.243 7 11h3l-4 5-4-5h3c0-4.418 3.582-8 8-8s8 3.582 8 8h-2a6 6 0 00-6-6z"
        fill="white"
      />
    </svg>
  ),
  Empowerment: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="12" fill="#ACCB37" />
      <path
        d="M12 12a3 3 0 100-6 3 3 0 000 6zm0 2c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z"
        fill="white"
      />
    </svg>
  ),
  Repair: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="12" fill="#ACCB37" />
      <path
        d="M22 2l-2 2-2-2-2 2 2 2-6 6-2-2-4 4 2 2-2 2 4 4 2-2 2 2 4-4-2-2 6-6 2 2 2-2-2-2 2-2-2-2z"
        fill="white"
      />
    </svg>
  ),
  Distribution: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="12" fill="#ACCB37" />
      <path
        d="M3 3h18v2H3V3zm2 4h14v2H5V7zm-2 4h18v2H3v-2zm2 4h14v2H5v-2zm-2 4h18v2H3v-2z"
        fill="white"
      />
    </svg>
  ),
  Target: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="12" fill="#ACCB37" />
      <path
        d="M12 8a4 4 0 100 8 4 4 0 000-8zm0-2a6 6 0 110 12A6 6 0 0112 6zm0-2a8 8 0 100 16A8 8 0 0012 4z"
        fill="white"
      />
    </svg>
  ),
};

const MissionItem = ({
  iconName, // <-- Ini adalah kunci literal (e.g., "Innovation") untuk mencari di objek 'icons'
  title, // <-- Ini adalah teks judul yang SUDAH DITERJEMAHKAN (e.g., "Inovasi")
  description,
}: {
  iconName: keyof typeof icons; // Memastikan 'iconName' adalah salah satu kunci yang valid dari objek 'icons'
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6 h-full">
    {/* Di sini, kita menggunakan 'iconName' untuk memilih SVG.
        'iconName' akan selalu berupa string literal bahasa Inggris seperti "Innovation",
        sehingga cocok dengan kunci objek `icons`. */}
    {icons[iconName]}
    {/* Di sini, kita menampilkan 'title' yang sudah diterjemahkan. */}
    <h3 className="text-xl font-semibold mt-4">{title}</h3>
    <p className="text-sm text-gray-600 mt-2">{description}</p>
  </div>
);

const Mission = () => {
  const { t } = useTranslation();

  const missions = [
    {
      // iconName: Ini adalah kunci yang akan digunakan untuk mencari di objek `icons`.
      // Kunci ini harus sama persis dengan kunci di objek `icons` (misalnya, "Innovation").
      iconName: "Innovation",
      // titleKey: Ini adalah kunci yang akan diterjemahkan oleh `i18next`
      // menjadi teks judul yang ditampilkan (misalnya, "Innovation" atau "Inovasi").
      titleKey: "mission.innovation_title",
      descriptionKey: "mission.innovation_description",
    },
    {
      iconName: "Sustainability",
      titleKey: "mission.sustainability_title",
      descriptionKey: "mission.sustainability_description",
    },
    {
      iconName: "Empowerment",
      titleKey: "mission.empowerment_title",
      descriptionKey: "mission.empowerment_description",
    },
    {
      iconName: "Repair",
      titleKey: "mission.repair_title",
      descriptionKey: "mission.repair_description",
    },
    {
      iconName: "Distribution",
      titleKey: "mission.distribution_title",
      descriptionKey: "mission.distribution_description",
    },
    {
      iconName: "Target",
      titleKey: "mission.target_title",
      descriptionKey: "mission.target_description",
    },
  ];

  return (
    <div
      className="w-full max-w-screen-xl px-4 sm:px-6 md:px-8 mx-auto py-16"
      style={{ backgroundColor: "#eff9fcff" }}
    >
      <h1 className="font-Cabin text-3xl md:text-5xl font-bold text-center mb-12">
        {t("mission.heading")}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {missions.map((mission, index) => (
          <MissionItem
            key={index}
            iconName={mission.iconName} // Meneruskan kunci literal ke MissionItem untuk pemilihan icon
            title={t(mission.titleKey)} // Meneruskan teks judul yang sudah diterjemahkan
            description={t(mission.descriptionKey)} // Meneruskan teks deskripsi yang sudah diterjemahkan
          />
        ))}
      </div>
    </div>
  );
};

export default Mission;
