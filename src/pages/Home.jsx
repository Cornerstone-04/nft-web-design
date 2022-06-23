import React from "react";
import Header from "../components/Header";
import "../styles/home.scss";
import Tokenomics from "./Tokenomics";
import Faq from './FAQ';
import Footer from "../components/Footer";

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
              <button className="twitter">Twitter</button>
              <button className="discord">Discord</button>
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
              <button className="twitter">Twitter</button>
              <button className="discord">Discord</button>
            </div>
          </div>
          <div className="image">
            <img src={require("../assets/images/nft_bus.png")} alt="" />
          </div>
        </div>
      </section>
      <Tokenomics />
      <Faq />
      <Footer />
    </section>
  );
};

export default Home;
