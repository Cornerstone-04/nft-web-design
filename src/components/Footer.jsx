import React from "react";
import "../styles/footer.css";
import Twitter from "../assets/icons/twitter.svg"
import Discord from "../assets/icons/discord.svg"

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="mobile">
        <div className="links">
          <a className="footer_link" href="#tokenomics">
            Tokenomics
          </a>
          <a className="footer_link" href="#rarity">
            Rarity
          </a>
          <a className="footer_link" href="#roadmap">
            Roadmap
          </a>
          <a className="footer_link" href="#faq">
            FAQ
          </a>
        </div>
        <div className="social">
          <a
            href="https://twitter.com/cornerstone_jsx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Twitter} alt="" />
          </a>
          <a
            href="https://discord.com/channels/@Cornerstone9139"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Discord} alt="" />
          </a>
        </div>
      </div>
      <div className="desktop">
        <div className="links">
          <a className="footer_link" href="#tokenomics">
            Tokenomics
          </a>
          <a className="footer_link" href="#rarity">
            Rarity
          </a>
          <a className="footer_link" href="#roadmap">
            Roadmap
          </a>
          <a className="footer_link" href="#faq">
            FAQ
          </a>
        </div>
        <div className="social">
          <a
            href="https://twitter.com/cornerstone_jsx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Twitter} alt="" />
          </a>
          <a
            href="https://discord.com/channels/@Cornerstone9139"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Discord} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
