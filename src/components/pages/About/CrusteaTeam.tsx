import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation

export default function CrusteaTeam() {
  const { t } = useTranslation(); // Dapatkan fungsi 't' (translate)

  // Definisikan data tim di dalam komponen agar bisa menggunakan fungsi t()
  // Setiap objek 'person' kini mengambil nilai dari terjemahan
  const team = [
    {
      name: t("crusteaTeam.member_1.name"),
      role: t("crusteaTeam.member_1.role"),
      exp: t("crusteaTeam.member_1.exp_part1"),
      image: "/images/landing/nafi.jpg",
      logos: [],
    },
    {
      name: t("crusteaTeam.member_2.name"),
      role: t("crusteaTeam.member_2.role"),
      exp: `${t("crusteaTeam.member_2.exp_part1")}, ${t(
        "crusteaTeam.member_2.exp_part2"
      )}`,
      image: "/images/landing/riza.jpg",
      logos: [],
    },
    {
      name: t("crusteaTeam.member_3.name"),
      role: t("crusteaTeam.member_3.role"),
      exp: t("crusteaTeam.member_3.exp_part1"),
      image: "/images/landing/prisma.jpg",
      logos: [],
    },
    {
      name: t("crusteaTeam.member_4.name"),
      role: t("crusteaTeam.member_4.role"),
      exp: t("crusteaTeam.member_4.exp_part1"),
      image: "/images/landing/andi.png",
      logos: [],
    },
    {
      name: t("crusteaTeam.member_5.name"),
      role: t("crusteaTeam.member_5.role"),
      exp: t("crusteaTeam.member_5.exp_part1"),
      image: "/images/landing/rahmadita.jpg",
      logos: [],
    },
    {
      name: t("crusteaTeam.member_6.name"),
      role: t("crusteaTeam.member_6.role"),
      exp: `${t("crusteaTeam.member_6.exp_part1")}, ${t(
        "crusteaTeam.member_6.exp_part2"
      )}`,
      image: "/images/landing/dian.png",
      logos: [],
    },
    {
      name: t("crusteaTeam.member_7.name"),
      role: t("crusteaTeam.member_7.role"),
      exp: t("crusteaTeam.member_7.exp_part1"),
      image: "/images/landing/lucky.png",
      logos: [],
    },
    {
      name: t("crusteaTeam.member_8.name"),
      role: t("crusteaTeam.member_8.role"),
      exp: t("crusteaTeam.member_8.exp_part1"),
      image: "/images/landing/ardiansyah.png",
      logos: [],
    },
    {
      name: t("crusteaTeam.member_9.name"),
      role: t("crusteaTeam.member_9.role"),
      exp: t("crusteaTeam.member_9.exp_part1"),
      image: "/images/landing/azril.jpg",
      logos: [],
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-[#eaf4d3] to-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-[#005f61] text-center font-Cabin justify-center mx-auto md:px-0 text-3xl md:text-5xl font-bold">
          {t("crusteaTeam.section_title_part1")}{" "}
          <span className="text-[#000000]">
            {t("crusteaTeam.section_title_part2")}
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {team.map((person, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-6 text-center flex flex-col items-center"
          >
            <img
              src={person.image}
              alt={t("crusteaTeam.profile_picture_alt", { name: person.name })}
              className="w-28 h-28 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-bold text-[#005f61]">{person.name}</h3>
            <p className="text-sm text-[#103971] font-medium">{person.role}</p>
            <p className="text-sm text-gray-600 mt-2">{person.exp}</p>
            {person.logos.length > 0 && (
              <div className="flex gap-2 justify-center mt-3 flex-wrap">
                {person.logos.map((logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt={t("crusteaTeam.company_logo_alt")}
                    className="h-6 object-contain"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
