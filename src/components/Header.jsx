import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/header.css";

const Header = () => {
  const navigate = useNavigate();

  const navRef = React.useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const closeNav = () => {
    navRef.current.classList.remove("responsive_nav");
  };
  return (
    <header className="header" >
      <h1 className="logo" onClick={() => navigate("/")}>
        Logo
      </h1>
      <nav className="navigation" ref={navRef}>
        <div className="links">
          <h1>Name</h1>
          <a onClick={closeNav} className="nav_link" href="#tokenomics">
            Tokenomics
          </a>
          <a onClick={closeNav} className="nav_link" href="#rarity">
            Rarity
          </a>
          <a onClick={closeNav} className="nav_link" href="#roadmap">
            Roadmap
          </a>
          <a onClick={closeNav} className="nav_link" href="#faq">
            FAQ
          </a>
        </div>
        <a onClick={closeNav} className="staking" href="/roadmap">
          Staking
        </a>
        <button className="menu close" onClick={showNavbar}>
          {/* <FontAwesomeIcon icon="fa-solid fa-xmark"/> */}
          <FaTimes />
        </button>
      </nav>
      <button className="menu" onClick={showNavbar}>
        {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
