"use client";
import GITHUB from "../../../public/navabr-icons/github.svg";
import LINKEDIN from "../../../public/navabr-icons/linkedin.svg";
import Image from "next/image";
import { useState } from "react";
import MENU from "../../../public/navabr-icons/burger.svg";
import CLOSE from "../../../public/navabr-icons/close.svg";

const Navbar = () => {
  const [burgerVisible, setburgerVisible] = useState(true);

  const handleBurgerClick = () => {
    setburgerVisible(!burgerVisible);
  };

  return (
    <div className="md:navbar-wrapper bg-background-color text-font-color">
      <div className="md:hidden bg-background-color flex w-full h-[10%] fixed justify-between top-0 left-0 z-50 mobile-border px-6">
        <div className="md:hidden flex justify-center items-center">
          <h1 className="text-2xl">JAKUB MIŚKO</h1>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={burgerVisible == true ? MENU : CLOSE}
            alt={"can`t load"}
            width={2}
            height={2}
            className="w-6 h-6 mx-auto block"
            onClick={handleBurgerClick}
          ></Image>
        </div>
      </div>
      <div
        className={`mobile-navabr-list duration-700 md:navbar-list md:opacity-100 ${
          burgerVisible == true
            ? "translate-y-[-100%] md:translate-y-0 opacity-20"
            : "translate-y-[0%] md:translate-y-0 opacity-100"
        }`}
      >
        <div className="hidden items-center md:flex md:desktop-border">
          <h1 className="pl-8 text-3xl">JAKUB MIŚKO</h1>
        </div>
        <div className="flex justify-evenly items-center mobile-border md:desktop-border md:border-r-0">
          <h1 className="text-2xl">WORK</h1>
        </div>
        <div className="flex justify-evenly items-center mobile-border md:desktop-border">
          <h1 className="text-2xl">ABOUT</h1>
        </div>
        <div className="flex justify-evenly items-center text-center mobile-border md:desktop-border">
          <Image
            src={GITHUB}
            className="w-8 h-8 items-center"
            alt="nothing"
            width={2}
            height={3}
          ></Image>
          <Image
            src={LINKEDIN}
            className="w-8 h-8 items-center"
            alt="nothing"
            width={3}
            height={3}
          ></Image>
        </div>
        <div className="flex justify-evenly items-center text-center">
          <h1 className="text-2xl">CONTACT</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
