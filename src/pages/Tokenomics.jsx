import React from "react";
import "../styles/tokenomics.scss";

const Tokenomics = () => {
  const market = [
    {
      id: 0,
      title: "Rank",
      value: "3",
    },
    {
      id: 1,
      title: "Market Cap",
      value: "$? USD",
    },
    {
      id: 2,
      title: "Volume",
      value: "$12.65K USD",
    },
  ];

  const tokenomics = [
    {
      id: 0,
      title: "NFT Holders",
      percent: "70%",
      desc: "NFT Holders will earn $TTN via p2e mechanism.",
    },
    {
      id: 1,
      title: "Liquidity",
      percent: "20%",
      desc: "20% of $TNAT token supply will be used for liquidity in exchanges.",
    },
    {
      id: 2,
      title: "Team",
      percent: "10%",
      desc: "10% of $TNAT token supply is for TTN team.",
    },
  ];
  return (
    <div className="tokenomics" id="tokenomics">
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
            {market &&
              market.map((data) => (
                <div className="market_val" id={data.id}>
                  <p>{data.title}</p>
                  <p>{data.value}</p>
                </div>
              ))}
          </div>
          <div className="power">Powered by CoinMarketCap</div>
        </div>
        <div className="token_details">
          {tokenomics &&
            tokenomics.map((token) => (
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
            {market &&
              market.map((data) => (
                <div className="market_val" id={data.id}>
                  <p>{data.title}</p>
                  <p>{data.value}</p>
                </div>
              ))}
          </div>
          <div className="power">Powered by CoinMarketCap</div>
        </div>
        <div className="token_details">
          {tokenomics &&
            tokenomics.map((token) => (
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
    </div>
  );
};

export default Tokenomics;
