"use client";
import Link from "next/link";
import React, { FC, useState } from "react";
import NavItems from "./NavItems";
import ThemeSwitcher from "./ThemeSwitcher";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
};

const Header = (props: Props) => {
  const [active, setActive] = useState(false);
  const [openSlider, setOpenSlider] = useState(false);

  if (typeof window !== "undefined") {
    window.onscroll = function () {
      if (window.scrollY > 80) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
  }

  return (
    <div className="w-full relative">
      <div
        className={`${
          active
            ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-md transition duration-500"
            : "w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow"
        }`}
      >
        <div className="w-[95%] sm:w-[92%] m-auto py-2 h-full ">
          <div className="w-full flex item-center justify-between p-3">
            <div>
              <Link
                href={"/"}
                className="text-[25px] font-Poppins font-[500] text-black dark:text-white "
              >
                E learning
              </Link>
            </div>
            <div className="flex items-center">
              <NavItems activeItem={props.activeItem} isMobile={false} />
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
