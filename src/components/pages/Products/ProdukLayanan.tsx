import { useTranslation } from "react-i18next";
import ScrollAnimationWrapper from "components/Layout/ScrollAnimationWrapper";
import PotentialProgram from "../About/PotentialProgram";
import Consultant from "../About/Consultant";
import React, { useState, useMemo } from "react";

// Pastikan di index.html kamu sudah ada:
// <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />

const ProdukLayanan: React.FC = () => {
  const { t } = useTranslation();

  const cards = useMemo(
    () => [
      {
        title: t("produkLayanan.eco_title"),
        desc: t("produkLayanan.eco_description"),
      },
      {
        title: t("produkLayanan.lightbulb_title"),
        desc: t("produkLayanan.lightbulb_description"),
      },
      {
        title: t("produkLayanan.memory_title"),
        desc: t("produkLayanan.memory_description"),
      },
      {
        title: t("produkLayanan.water_drop_title"),
        desc: t("produkLayanan.water_drop_description"),
      },
      {
        title: t("produkLayanan.science_title"),
        desc: t("produkLayanan.science_description"),
      },
      {
        title: t("produkLayanan.groups_title"),
        desc: t("produkLayanan.groups_description"),
      },
    ],
    [t]
  );

  return (
    <main className="container mx-auto px-4 py-12 font-display bg-gradient-to-r from-green-50 to-blue-50">
      {/* Bagian Atas */}
      <div className="space-y-8 mb-8">
        <PotentialProgram />
        <Consultant />
      </div>

      {/* Judul */}
      <h2 className="text-[#2E8B57] text-2xl sm:text-3xl font-bold text-center leading-tight mb-2">
        {t("produkLayanan.title")}
      </h2>
      <div className="w-24 h-1 bg-[#4682B4] mx-auto my-4 rounded-full"></div>

      {/* Grid Card */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="flex flex-1 flex-col gap-4 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: "linear-gradient(to bottom right, #e0f2f1, #d4edda)",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="text-[#2E8B57]">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "32px" }}
              ></span>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-[#2E8B57] text-lg font-bold leading-tight">
                {card.title}
              </h3>
              <p className="text-[#333333] text-sm font-normal leading-normal">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default ProdukLayanan;
