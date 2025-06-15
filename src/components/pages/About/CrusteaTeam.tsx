import React from "react";

const team = [
  {
    name: "Roikhanatun Nafi’ah",
    role: "Founder & CEO",
    exp: "+7 yr in Mgmt & Innovation",
    image: "/images/landing/nafi.jpg",
    logos: [],
  },
  {
    name: "Riza Alaudin Syah",
    role: "Founder & CTO",
    exp: "+10 yr in AI/IoT Expert, +10 yr in Software Expert",
    image: "/images/landing/riza.jpg",
    logos: [],
  },
  {
    name: "Prisma Riashuda",
    role: "Founder & Head of Tech",
    exp: "+4 yr in Tech & Aquaculture",
    image: "/images/landing/prisma.jpg",
    logos: [],
  },
  {
    name: "Cak Andi",
    role: "Advisor",
    exp: "Farm Owner & Aquaculture Practitioners",
    image: "/images/landing/andi.png",
    logos: [],
  },
  {
    name: "Rahmadita Filaili",
    role: "CFO",
    exp: "+4 yr in Cost Planning & Control",
    image: "/images/landing/rahmadita.jpg",
    logos: [],
  },
  {
    name: "Dian Martha Nurrul Amanah",
    role: "CMO",
    exp: "+5 yr in asset management credit verification, +2 yr digital business lecturer",
    image: "/images/landing/dian.png",
    logos: [],
  },
  {
    name: "Cak Lucky",
    role: "Advisor",
    exp: "Start-up Coach",
    image: "/images/landing/lucky.png",
    logos: [],
  },
  {
    name: "Ardiansyah",
    role: "Head of Operational Excellence",
    exp: "+9 yr in Engineering, Project Management & Government Policies",
    image: "/images/landing/ardiansyah.png",
    logos: [],
  },
  {
    name: "Muhammad Azril",
    role: "Head of Aquaculture",
    exp: "+10 yr in aquaculture",
    image: "/images/landing/azril.jpg",
    logos: [],
  },
];

export default function CrusteaTeam() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-[#eaf4d3] to-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-[#005f61] text-center font-Cabin justify-center mx-auto md:px-0 text-3xl md:text-5xl font-bold">
              Crustea <span className="text-[#000000]">Team</span>
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
              alt={person.name}
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
                    alt="logo"
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
