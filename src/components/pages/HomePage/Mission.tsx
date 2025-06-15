import React from "react"; // Hapus useMemo untuk debugging
// import { motion } from "framer-motion"; // <-- KOMENKAN INI
// import getScrollAnimation from "../../../utils/getScrollAnimation"; // <-- KOMENKAN INI
// import ScrollAnimationWrapper from "../../Layout/ScrollAnimationWrapper"; // <-- KOMENKAN INI

const icons = {
  Innovation: (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" fill="#ACCB37" />
      <path
        d="M12 4a5 5 0 00-2 9.584V17a1 1 0 001 1h2a1 1 0 001-1v-3.416A5 5 0 0012 4z"
        fill="white"
      />
    </svg>
  ),
  Sustainability: (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" fill="#ACCB37" />
      <path
        d="M12 6C9.243 6 7 8.243 7 11h3l-4 5-4-5h3c0-4.418 3.582-8 8-8s8 3.582 8 8h-2a6 6 0 00-6-6z"
        fill="white"
      />
    </svg>
  ),
  Empowerment: (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" fill="#ACCB37" />
      <path
        d="M12 12a3 3 0 100-6 3 3 0 000 6zm0 2c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z"
        fill="white"
      />
    </svg>
  ),
  Repair: (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" fill="#ACCB37" />
      <path
        d="M22 2l-2 2-2-2-2 2 2 2-6 6-2-2-4 4 2 2-2 2 4 4 2-2 2 2 4-4-2-2 6-6 2 2 2-2-2-2 2-2-2-2z"
        fill="white"
      />
    </svg>
  ),
  Distribution: (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" fill="#ACCB37" />
      <path
        d="M3 3h18v2H3V3zm2 4h14v2H5V7zm-2 4h18v2H3v-2zm2 4h14v2H5v-2zm-2 4h18v2H3v-2z"
        fill="white"
      />
    </svg>
  ),
  Target: (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" fill="#ACCB37" />
      <path
        d="M12 8a4 4 0 100 8 4 4 0 000-8zm0-2a6 6 0 110 12A6 6 0 0112 6zm0-2a8 8 0 100 16A8 8 0 0012 4z"
        fill="white"
      />
    </svg>
  ),
};

// KOMENKAN varian animasi
// const missionItemVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.1,
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   }),
// };

const MissionItem = ({
  title,
  description,
  // index, // Tidak perlu lagi jika tidak ada animasi
}: {
  title: keyof typeof icons;
  description: string;
  // index: number;
}) => (
  // <motion.div // <-- KOMENKAN motion.div
  <div // <-- Kembali ke div biasa
    className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6 h-full"
    // varians={missionItemVariants} // <-- KOMENKAN
    // initial="hidden" // <-- KOMENKAN
    // whileInView="visible" // <-- KOMENKAN
    // viewport={{ once: true, amount: 0.2 }} // <-- KOMENKAN
    // custom={index} // <-- KOMENKAN
  >
    {icons[title]}
    <h3 className="text-xl font-semibold mt-4">{title}</h3>
    <p className="text-sm text-gray-600 mt-2">{description}</p>
  </div>
  // </motion.div>
);

const Mission = () => {
  // KOMENKAN useMemo dan scrollAnimation
  // const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const missions = [
    {
      title: "Innovation",
      description: "Creating Quality Appropriate Technology",
    },
    {
      title: "Sustainability",
      description: "Establish Good Relations with Partners and Customers",
    },
    {
      title: "Empowerment",
      description: "Creating Human Resources with Quality and Integrity",
    },
    {
      title: "Repair",
      description: "Making Continuous Technology Improvements",
    },
    {
      title: "Distribution",
      description:
        "Ensuring the Supply Chain and Productivity of the Aquaculture and Marine Fisheries Sector are in Good and Optimal Condition",
    },
    {
      title: "Target",
      description:
        "Even Distribution of Appropriate Technology according to National Targets",
    },
  ];

  return (
    // <ScrollAnimationWrapper> {/* <-- KOMENKAN INI */}
    // <motion.div // <-- KOMENKAN INI
    <div // <-- Kembali ke div biasa
      // variants={scrollAnimation} // <-- KOMENKAN INI
      className="w-full max-w-screen-xl px-4 sm:px-6 md:px-8 mx-auto py-16"
    >
      <h1 className="font-Cabin text-3xl md:text-5xl font-bold text-center mb-12">
        Our Mission
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {missions.map((mission, index) => (
          <MissionItem
            key={index}
            title={mission.title as keyof typeof icons}
            description={mission.description}
            // index={index} // Tidak perlu lagi
          />
        ))}
      </div>
    </div>
    // </ScrollAnimationWrapper> {/* <-- KOMENKAN INI */}
  );
};

export default Mission;