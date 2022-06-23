import React from "react";
import "../styles/footer.scss"

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="mobile">
      <div className="links">
          <a className="footer_link" href="#tokenomics">
            Tokenomics
          </a>
          <a className="footer_link" href="/rarity">
            Rarity
          </a>
          <a className="footer_link" href="/roadmap">
            Roadmap
          </a>
          <a className="footer_link" href="#faq">
            FAQ
          </a>
        </div>
        <div className="social">
          <img src={require('../assets/icons/twitter.svg').default} alt="" />
          <img src={require('../assets/icons/discord.svg').default} alt="" />
        </div>
      </div>
      <div className="desktop">
        <div className="links">
          <a className="footer_link" href="#tokenomics">
            Tokenomics
          </a>
          <a className="footer_link" href="/rarity">
            Rarity
          </a>
          <a className="footer_link" href="/roadmap">
            Roadmap
          </a>
          <a className="footer_link" href="#faq">
            FAQ
          </a>
        </div>
        <div className="social">
          <img src={require('../assets/icons/twitter.svg').default} alt="" />
          <img src={require('../assets/icons/discord.svg').default} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
