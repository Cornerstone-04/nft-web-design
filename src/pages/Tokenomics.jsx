import React from "react";
import "../styles/tokenomics.scss";

const Tokenomics = () => {
  return (
    <div className="tokenomics" id="tokenomics">
      <div className="mobile"></div>
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
            <div className="market_val">
              <p>Rank</p>
              <p>3</p>
            </div>
            <div className="market_val">
              <p>Market Cap</p>
              <p>
                $? <span className="usd">USD</span>
              </p>
            </div>
            <div className="market_val">
              <p>Volume</p>
              <p>
                $12.65K <span className="usd">USD</span>
              </p>
            </div>
          </div>
          <div className="power">Powered by CoinMarketCap</div>
        </div>
        <div className="token_details">
          <div className="box">
            <p className="token_head">
              <span>NFT Holders</span>
              <span>70%</span>
            </p>
            <p className="token_desc">
              NFT Holders will earn $TTN via p2e mechanism.
            </p>
          </div>
          <div className="box">
            <p className="token_head">
              <span>Liquidity</span>
              <span>20%</span>
            </p>
            <p className="token_desc">
              20% of $TNAT token supply will be used for liquidity in exchanges.
            </p>
          </div>
          <div className="box">
            <p className="token_head">
              <span>Team</span>
              <span>10%</span>
            </p>
            <p className="token_desc">
              10% of $TNAT token supply is for TNAT team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
