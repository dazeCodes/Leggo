import React from "react";
import dollar from "../../assets/img/dollar.png";
import arrow from "../../assets/img/arrow-border.png";
import euro from "../../assets/img/euro.png";
import pound from "../../assets/img/pound.png";
import bitcoin from "../../assets/img/bitcoin.png";
import stellar from "../../assets/img/stellar.png";
import ether from "../../assets/img/ether.png";
import algorand from "../../assets/img/algorand.png";
import usdigital from "../../assets/img/usdigital.png";
import tether from "../../assets/img/tether.png";
import bitcoinCash from "../../assets/img/bitcoin-cash.png";
import Total from "./components/Total";

export default function Home() {
  return (
    <section className="dashboard-component">
      <div className="left-side">
        <div className="top-left-side">
          <p>Total Balance</p>
          <p>$0.00</p>
        </div>

        <div className="slider">
          <button className="sl-tot active">Total</button>
          <button className="sl-wal">Wallet</button>
          <button className="sl-har">Hardware</button>
        </div>

        <Total
          image={{
            dollar,
            arrow,
            euro,
            pound,
            bitcoin,
            stellar,
            ether,
            algorand,
            usdigital,
            tether,
            bitcoinCash,
          }}
        />
      </div>

      <div className="right-side">
        <div className="top-right-side">
          <p>
            <img src={bitcoin} className="top-img" alt="" /> Bitcoin (BTC) <img src={arrow} alt="" />
          </p>

          <p>Current Price</p>
          <p>$19,268.39</p>
          <p>
            $4,883.89 (37.32)% <span> &nbsp; this month</span>
          </p>
        </div>

        <div className="middle-right-side"></div>
        <div className="bottom-right-side">
          <button>Day</button>
          <button>Week</button>
          <button className="active">Month</button>
          <button>Year</button>
          <button>All</button>
        </div>
        <div className="bottom-right-side-end">
          <button>Buy Bitcoin</button>
          <button>Swap Bitcoin</button>
        </div>
      </div>
    </section>
  );
}
