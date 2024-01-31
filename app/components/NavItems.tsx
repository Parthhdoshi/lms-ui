import Link from "next/link";
import React, { FC } from "react";

export const navItemsData = [
  { name: "Home", url: "/" },
  { name: "Course", url: "/course" },
  { name: "About", url: "/about" },
  { name: "Policy", url: "/policy" },
  { name: "FAQ", url: "/faq" },
];

type Props = {
  activeItem: number;
  isMobile: boolean;
};

const NavItems: FC<Props> = ({ activeItem, isMobile }) => {
  return (
    <>
      <div className="hidden md:flex">
        {navItemsData.map((item, index) => (
          <Link href={item.url} key={index}>
            <span
              className={`${
                activeItem === index
                  ? "dark:text-[#37a39a] text-[crimson]"
                  : "dark:text-white text-black"
              } text-[18px] font-Poppins px-6 font-[400] `}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>
      {isMobile && <div className="md:hidden mt-5">
        <div className="w-full text-center py-6">
        {navItemsData.map((item, index) => (
          <Link href={item.url} key={index}>
            <span
              className={`${
                activeItem === index
                  ? "dark:text-[#37a39a] text-[crimson]"
                  : "dark:text-white text-black"
              } block py-5 text-[18px] font-Poppins px-5 font-[400] `}
            >
              {item.name}
            </span>
          </Link>
        ))}
        </div>
        </div>}
    </>
  );
};

export default NavItems;
