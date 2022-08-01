import React from "react";
//import reusable components
import Header from "../components/Header";
import Footer from "../components/Footer";
//import pages
import Tokenomics from "./Tokenomics";
import Rarity from "./Rarity";
import Faq from "./FAQ";
import Roadmap from "./Roadmap";
//import styling
import "../styles/home.css";

const Home = () => {
  return (
    <section>
      <Header />
      <section className="landing">
        <div className="mobile_landing">
          <div className="content">
            <h1 className="title">Lorem Ipsum</h1>
            <div className="sub">
              <p className="description">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="feint_text">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="social_buttons">
              <a
                className="twitter"
                href="https://twitter.com/cornerstone_jsx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../assets/icons/twitter-plain.svg").default}
                  alt=""
                />
                <span>Twitter</span>
              </a>
              <a
                className="discord"
                href="https://discord.com/channels/@Cornerstone9139"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../assets/icons/discord-plain.svg").default}
                  alt=""
                />
                <span>Discord</span>
              </a>
            </div>
          </div>
        </div>
        <div className="desktop_landing">
          <div className="content">
            <h1 className="title">Lorem Ipsum</h1>
            <div className="sub">
              <p className="description">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="feint_text">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="social_buttons">
              <a
                className="twitter"
                href="https://twitter.com/cornerstone_jsx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../assets/icons/twitter-plain.svg")}
                  alt=""
                />
                <span>Twitter</span>
              </a>
              <a
                className="discord"
                href="https://discord.com/channels/@Cornerstone9139"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../assets/icons/discord-plain.svg")}
                  alt=""
                />
                <span>Discord</span>
              </a>
            </div>
          </div>
          <div className="image">
            <img loading="lazy" src={require("../assets/images/nft_bus.png")} alt="" />
          </div>
        </div>
      </section>
      <Tokenomics />
      <Rarity />
      <Roadmap />
      <Faq />
      <Footer />
    </section>
  );
};

export default Home;
