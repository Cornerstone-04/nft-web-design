import React from "react";
import "../styles/tokenomics.css";

import Tokens from "../data/tokens.jsx";
import Market from "../data/market.jsx";

const Tokenomics = () => {
  return (
    <section className="tokenomics" id="tokenomics">
      {/* mobile & tablet view */}

      <div className="mobile">
        <h1 className="title">Tokenomics</h1>
        <div className="table">
          <div className="name">
            <p className="coin">The Token Name(TTN)</p>
            <p className="value">
              <span>0.332627</span>
              <span>(+17.4%)</span>
            </p>
          </div>
          <div className="market">
            {Market &&
              Market.map((data) => (
                <div className="market_val" key={data.id}>
                  <p>{data.title}</p>
                  <p>{data.value}</p>
                </div>
              ))}
          </div>
          <div className="power">Powered by CoinMarketCap</div>
        </div>
        <div className="token_details">
          {Tokens &&
            Tokens.map((token) => (
              <div className="box" key={token.id}>
                <p className="token_head">
                  <span>{token.title}</span>
                  <span>{token.percent}</span>
                </p>
                <p className="token_desc">{token.desc}</p>
              </div>
            ))}
        </div>
      </div>
      {/* desktop view */}

      <div className="desktop">
        <h1 className="title">Tokenomics</h1>
        <div className="table">
          <div className="name">
            <p className="coin">The Token Name(TTN)</p>
            <p className="value">
              <span>0.332627</span>
              <span>(+17.4%)</span>
            </p>
          </div>
          <div className="market">
            {Market &&
              Market.map((data) => (
                <div className="market_val" id={data.id}>
                  <p>{data.title}</p>
                  <p>{data.value}</p>
                </div>
              ))}
          </div>
          <div className="power">Powered by CoinMarketCap</div>
        </div>
        <div className="token_details">
          {Tokens &&
            Tokens.map((token) => (
              <div className="box" id={token.id}>
                <p className="token_head">
                  <span>{token.title}</span>
                  <span>{token.percent}</span>
                </p>
                <p className="token_desc">{token.desc}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
