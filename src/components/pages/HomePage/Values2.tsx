import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation

// --- Comments regarding Framer Motion are retained as per your original code ---
// import { motion } from "framer-motion"; // Comment out motion import
// import getScrollAnimation from "../../../utils/getScrollAnimation"; // Comment out
// import ScrollAnimationWrapper from "../../Layout/ScrollAnimationWrapper"; // Comment out
// --- End Framer Motion Comments ---

import {
  Lightbulb,
  Handshake,
  UserCheck,
  Settings,
  Users,
  ShieldCheck,
  Repeat,
} from "lucide-react";

// The keys in this 'icons' object MUST remain in English,
// as they are used to directly reference the icon components.
const icons = {
  "Creative and Innovative": (
    <Lightbulb size={48} strokeWidth={2} className="text-crustea-green" />
  ),
  Respect: (
    <Handshake size={48} strokeWidth={2} className="text-crustea-green" />
  ),
  Humility: (
    <UserCheck size={48} strokeWidth={2} className="text-crustea-green" />
  ),
  Skillful: (
    <Settings size={48} strokeWidth={2} className="text-crustea-green" />
  ),
  Teamwork: <Users size={48} strokeWidth={2} className="text-crustea-green" />,
  "Ethics and Integrity": (
    <ShieldCheck size={48} strokeWidth={2} className="text-crustea-green" />
  ),
  Adaptive: <Repeat size={48} strokeWidth={2} className="text-crustea-green" />,
};

type ValueItemData = {
  iconKey: keyof typeof icons; // This refers to the actual key in the `icons` object
  titleTranslationKey: string; // This refers to the translation key for the title text
  descriptionTranslationKey: string; // This refers to the translation key for the description text
};

const Values = () => {
  const { t } = useTranslation(); // Get the translate function

  // Define values using translation keys and icon keys
  const valuesData: ValueItemData[] = [
    {
      iconKey: "Creative and Innovative",
      titleTranslationKey: "values.creative_innovative_title",
      descriptionTranslationKey: "values.creative_innovative_description",
    },
    {
      iconKey: "Respect",
      titleTranslationKey: "values.respect_title",
      descriptionTranslationKey: "values.respect_description",
    },
    {
      iconKey: "Humility",
      titleTranslationKey: "values.humility_title",
      descriptionTranslationKey: "values.humility_description",
    },
    {
      iconKey: "Skillful",
      titleTranslationKey: "values.skillful_title",
      descriptionTranslationKey: "values.skillful_description",
    },
    {
      iconKey: "Teamwork",
      titleTranslationKey: "values.teamwork_title",
      descriptionTranslationKey: "values.teamwork_description",
    },
    {
      iconKey: "Ethics and Integrity",
      titleTranslationKey: "values.ethics_integrity_title",
      descriptionTranslationKey: "values.ethics_integrity_description",
    },
    {
      iconKey: "Adaptive",
      titleTranslationKey: "values.adaptive_title",
      descriptionTranslationKey: "values.adaptive_description",
    },
  ];

  return (
    <section className="w-full max-w-screen-xl px-4 md:px-8 mx-auto py-16 sm:py-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12 font-Cabin">
        {t("values.heading")} {/* Translate the main heading */}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 gap-y-10 place-items-center">
        {valuesData.map((item, index) => (
          <div
            key={item.iconKey} // Use iconKey as a stable key
            className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all w-full max-w-sm mx-auto"
          >
            <div className="flex flex-col items-center text-center">
              {/* Use item.iconKey to get the correct icon from the 'icons' object */}
              <div className="mb-4">{icons[item.iconKey]}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {/* Translate the title text */}
                {t(item.titleTranslationKey)}
              </h3>
              <p className="text-gray-600 text-sm">
                {/* Translate the description text */}
                {t(item.descriptionTranslationKey)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
