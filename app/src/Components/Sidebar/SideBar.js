import React from "react";
import arrow from "../../assets/img/arrow-border.png";
import home from "../../assets/img/home.png";
import dollar from "../../assets/img/dollar.png";
import euro from "../../assets/img/euro.png";
import pound from "../../assets/img/pound.png";
import bitcoin from "../../assets/img/bitcoin.png";
import bitcoinCash from "../../assets/img/bitcoin-cash.png";
import stellar from "../../assets/img/stellar.png";
import ether from "../../assets/img/ether.png";
import algorand from "../../assets/img/algorand.png";
import usdigital from "../../assets/img/usdigital.png";
import tether from "../../assets/img/tether.png";
import airdrop from "../../assets/img/airdrop.png";
import image6 from "../../assets/img/image6.png";


function SideBar() {

  return (
    <section className="navigation">
      <div className="total">
        <div>
          <p>Total Balance</p>
          <p>$ 0.00</p>
        </div>

        <div className="cursor-div">
          <img src={arrow} alt="" />
        </div>
      </div>

      <div className="others">
        <button className="dashboard">
          <img src={home} className="img-dash" alt="" />
          Dashboard
        </button>
        <button className="us">
          <img src={dollar} className="img-dollar" alt="" />
          U.S. Dollars
        </button>
        <button className="euros">
          <img src={euro} className="img-euro" alt="" />
          Euros
        </button>
        <button className="pounds">
          <img src={pound} className="img-dollar" alt="" />
          Pounds
        </button>
        <button className="bitcoin">
          <img src={bitcoin} className="img-btc" alt="" />
          Bitcoin
        </button>
        <button className="ether">
          <img src={ether} className="img-btc" alt="" />
          Ether
        </button>
        <button className="bitcoin-cash">
          <img src={bitcoinCash} className="img-btc" alt="" />
          Bitcoin Cash
        </button>
        <button className="stellar">
          <img src={stellar} className="img-btc" alt="" />
          Stellar
        </button>
        <button className="algorand">
          <img src={algorand} className="img-btc" alt="" />
          Algorand
        </button>
        <button className="usdigital">
          <img src={usdigital} className="img-btc" alt="" />
          USD Digital
        </button>
        <button className="tether">
          <img src={tether} className="img-btc" alt="" />
          Tether
        </button>
      </div>

      <div className="final">
        <button className="airdrops">
          <img src={airdrop} className="img-btc" alt="" />
          Airdrops
        </button>
        <button className="airdrops">
          <img src={image6} className="img-btc" alt="" />
          Exchange
        </button>
      </div>
    </section>
  );
}

export default SideBar;
