"use client";
import GITHUB from "../../../public/navabr-icons/github.svg";
import LINKEDIN from "../../../public/navabr-icons/linkedin.svg";
import Image from "next/image";
import { useState } from "react";
// import "./navbar.css";

const Navbar = () => {
  const [burgerVisible, setburgerVisible] = useState(true);

  const handleBurgerClick = () => {
    setburgerVisible(!burgerVisible);
  };

  return (
    <div className="sm:navbar-wrapper bg-background-color">
      <div className="sm:hidden flex justify-between top-0 left-0 z-50 mobile-border h-12">
        <div className="sm:hidden block">
          <h1 className="name-text">JAKUB MIŚKO</h1>
        </div>
        <button
          onClick={handleBurgerClick}
          className={
            burgerVisible == true
              ? "toggle-button-burger"
              : "toggle-button-close"
          }
          id="burger-button"
        ></button>
      </div>
      <div
        className="mobile-navabr-list sm:navbar-list"
        data-is-active={`${burgerVisible}`}
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
        <div className="flex justify-evenly items-center">
          <h1 id="contact-text">CONTACT</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
