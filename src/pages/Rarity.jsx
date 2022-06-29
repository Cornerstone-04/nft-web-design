import React from "react";
import "../styles/rarity.css";
import NFT from "../_mock/nft";

const Rarity = () => {
  
  return (
    <section className="rarity" id="rarity">
      <div className="mobile">
        <h1 className="title">Rarity</h1>
        <div className="options">
          {" "}
          <select name="rarity" id="">
            <option className="tag">Background</option>
            <option className="tag">Skin</option>
            <option className="tag">Clothes</option>
            <option className="tag">Eyes</option>
            <option className="tag">Hat</option>
          </select>
          <hr />

        </div>
        <div className="random">
          {NFT &&
            NFT.map((nft) => (
              <div className="nft" key={nft.id}>
                <img src={nft.image} alt="nft_image" />
                <p className="nft_title">{nft.title}</p>
                <p className="nft_number">{nft.number}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="desktop">
        <h1 className="title">Rarity</h1>
        <div className="options">
          <div className="option_names">
            <button className="tag">Background</button>
            <button className="tag">Skin</button>
            <button className="tag">Clothes</button>
            <button className="tag">Eyes</button>
            <button className="tag">Hat</button>
          </div>
          <hr />
        </div>
        <div className="random">
          {NFT &&
            NFT.map((nft) => (
              <div className="nft" key={nft.id}>
                <img src={nft.image} alt="nft_image" />
                <p className="nft_title">{nft.title}</p>
                <p className="nft_number">{nft.number}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Rarity;
