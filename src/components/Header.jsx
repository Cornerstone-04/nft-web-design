import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/header.scss";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <h1 className="logo" onClick={() => navigate("/")}>
        The Logo
      </h1>
      <nav className="navigation">
        <div className="links">
          <a className="nav_link" href="#tokenomics">
            Tokenomics
          </a>
          <a className="nav_link" href="/rarity">
            Rarity
          </a>
          <a className="nav_link" href="/roadmap">
            Roadmap
          </a>
          <a className="nav_link" href="#faq">
            FAQ
          </a>
        </div>

        <a className="staking" href="/roadmap">
          Staking
        </a>
      </nav>
    </div>
  );
};

export default Header;
