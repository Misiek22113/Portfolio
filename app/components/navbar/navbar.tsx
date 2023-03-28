"use client";
import GITHUB from "../../../public/navabr-icons/github.svg";
import LINKEDIN from "../../../public/navabr-icons/linkedin.svg";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [burgerVisible, setburgerVisible] = useState(true);

  const handleBurgerClick = () => {
    setburgerVisible(!burgerVisible);
  };

  return (
    <div className="bg-background-color">
      <div className="mobile-navbar">
        <div className="name-container-mobile">
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
      <div className="navbar-list" data-is-active={`${burgerVisible}`}>
        <div className="name-container">
          <h1 className="name-text">JAKUB MIŚKO</h1>
        </div>
        <div className="work-container">
          <h1 id="work-text">WORK</h1>
        </div>
        <div className="about-container">
          <h1 id="about-text">ABOUT</h1>
        </div>
        <div className="social-media-container">
          <Image
            src={GITHUB}
            className="icon"
            alt="nothing"
            width={2}
            height={3}
          ></Image>
          <Image
            src={LINKEDIN}
            className="icon"
            alt="nothing"
            width={3}
            height={3}
          ></Image>
        </div>
        <div className="contact-container">
          <h1 id="contact-text">CONTACT</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
