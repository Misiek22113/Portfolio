import "./Navbar.scss";
import GITHUB from "../../../public/navabr-icons/github.svg";
import LINKEDIN from "../../../public/navabr-icons/linkedin.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="name-container">
        <h1 className="name-text">JAKUB MIŚKO</h1>
      </div>
      <div className="options-container">
        <h1 id="work-text">WORK</h1>
        <h1 id="about-text">ABOUT</h1>
      </div>
      <div className="social-media-container">
        <Image src={GITHUB} className="icon" alt="wykurwiaj"></Image>
        <Image src={LINKEDIN} className="icon" alt="wykurwiaj"></Image>
      </div>
      <div className="contact-container">
        <h1 id="contact-text">CONTACT</h1>
      </div>
    </div>
  );
};

export default Navbar;
