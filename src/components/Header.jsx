import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/header.scss";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <h1 className="logo" onClick={()=> navigate('/')}>Yooshiverse</h1>
      <nav className="navigation">
        <Link className="nav_link" to="/">
          Home
        </Link>
        <Link className="nav_link" to="/about">
          About
        </Link>
        <Link className="nav_link" to="/tokenomics">
          Tokenomics
        </Link>
        <Link className="nav_link" to="/roadmap">
          Roadmap
        </Link>
      </nav>
    </div>
  );
};

export default Header;
