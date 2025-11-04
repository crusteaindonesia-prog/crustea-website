import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../Layout/ScrollAnimationWrapper";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Import useTranslation

const Users = () => {
  // Hapus prop listUser karena akan diambil dari terjemahan
  const { t } = useTranslation(); // Dapatkan fungsi 't' (translate)

  // Definisikan listUser di sini, menggunakan nilai terjemahan
  const listUser = useMemo(
    () => [
      {
        name: t("usersSection.user_label"),
        number: t("usersSection.user_count"),
        icon: "/assets/Icon/heroicons_sm-user.svg",
      },
      {
        name: t("usersSection.location_label"),
        number: t("usersSection.location_count"),
        icon: "/assets/Icon/gridicons_location.svg",
      },
      {
        name: t("usersSection.ponds_label"),
        number: t("usersSection.ponds_count"),
        icon: "/assets/Icon/bx_bxs-server.svg",
      },
    ],
    [t]
  ); // Pastikan useMemo bereaksi terhadap perubahan bahasa (t)

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
      <div className="relative w-3/4 flex mx-auto pt-5 lg:mb-16 md:pt-14">
        <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-[#05546A] bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center hue-rotate-90 bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <img
                    src={listUsers.icon}
                    className="h-6 w-6 "
                    alt={`${listUsers.name} icon`}
                  />{" "}
                  {/* Tambahkan alt text */}
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </>
  );
};

export default Users;
