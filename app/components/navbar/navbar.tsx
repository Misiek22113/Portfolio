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
    <div className="sm:navbar-wrapper bg-background-color">
      <div className="sm:hidden bg-background-color flex w-full h-[10%] fixed justify-between top-0 left-0 z-50 mobile-border px-6">
        <div className="sm:hidden flex justify-center items-center">
          <h1 className="name-text">JAKUB MIŚKO</h1>
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
        className={`mobile-navabr-list duration-700 sm:navbar-list ${
          burgerVisible == true
            ? "translate-y-[-100%] sm:translate-y-0"
            : "translate-y-[0%] sm:translate-y-0"
        }`}
      >
        <div className="hidden items-center sm:flex sm:desktop-border">
          <h1 className="pl-8">JAKUB MIŚKO</h1>
        </div>
        <div className="flex justify-evenly items-center mobile-border sm:desktop-border sm:border-r-0">
          <h1 id="work-text">WORK</h1>
        </div>
        <div className="flex justify-evenly items-center mobile-border sm:desktop-border">
          <h1 id="about-text">ABOUT</h1>
        </div>
        <div className="flex justify-evenly items-center text-center mobile-border sm:desktop-border">
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
          <h1 id="contact-text">CONTACT</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
