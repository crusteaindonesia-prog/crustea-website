import React from "react"; // Removed useMemo temporarily for simplicity in debugging
// import { motion } from "framer-motion"; // Comment out motion import
// import getScrollAnimation from "../../../utils/getScrollAnimation"; // Comment out
// import ScrollAnimationWrapper from "../../Layout/ScrollAnimationWrapper"; // Comment out

import {
  Lightbulb,
  Handshake,
  UserCheck,
  Settings,
  Users,
  ShieldCheck,
  Repeat,
} from "lucide-react";

const icons = {
  "Creative and Innovative": <Lightbulb size={48} strokeWidth={2} className="text-crustea-green" />,
  Respect: <Handshake size={48} strokeWidth={2} className="text-crustea-green" />,
  Humility: <UserCheck size={48} strokeWidth={2} className="text-crustea-green" />,
  Skillful: <Settings size={48} strokeWidth={2} className="text-crustea-green" />,
  Teamwork: <Users size={48} strokeWidth={2} className="text-crustea-green" />,
  "Ethics and Integrity": <ShieldCheck size={48} strokeWidth={2} className="text-crustea-green" />,
  Adaptive: <Repeat size={48} strokeWidth={2} className="text-crustea-green" />,
};

type ValueItem = {
  title: keyof typeof icons;
  description: string;
};

const values: ValueItem[] = [
  { title: "Creative and Innovative", description: "" },
  { title: "Respect", description: "" },
  { title: "Humility", description: "" },
  { title: "Skillful", description: "" },
  { title: "Teamwork", description: "" },
  { title: "Ethics and Integrity", description: "" },
  { title: "Adaptive", description: "" },
];

// const cardVariants = { // Comment out
//   hidden: { opacity: 0, y: 20 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.1, duration: 0.4 },
//   }),
// };

const Values = () => {
  // const scrollAnimation = useMemo(() => getScrollAnimation(), []); // Comment out

  return (
    // <ScrollAnimationWrapper> // Comment out this wrapper
    <section
      // variants={scrollAnimation} // Comment out
      className="w-full max-w-screen-xl px-4 md:px-8 mx-auto py-16 sm:py-20"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12 font-Cabin">
        Values of Crustea
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 gap-y-10 place-items-center">
        {values.map((item, index) => (
          // <motion.div // Comment out motion.div
          <div
            key={item.title}
            className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all w-full max-w-sm mx-auto"
            // variants={cardVariants} // Comment out
            // initial="hidden" // Comment out
            // whileInView="visible" // Comment out
            // viewport={{ once: true }} // Comment out
            // custom={index} // Comment out
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">{icons[item.title]}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
          // </motion.div> // Comment out
        ))}
      </div>
    </section>
    // </ScrollAnimationWrapper> // Comment out this wrapper
  );
};

export default Values;