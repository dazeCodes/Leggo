import React from "react";
import bitcoin from "../../assets/img/bitcoin.png";
import download from "../../assets/img/download.png";
import search from "../../assets/img/search.png";
import tran from "../../assets/img/tran-add.jpg";

export default function BitcoinPage() {
  return (
    <section className="usd-component">
      <div className="b-top">
        <div className="b-top-left">
          <div>
            <img src={bitcoin} alt="" />
            <p>Bitcoin</p>
          </div>
          <p className="b-top-desc">
            Bitcoin (BTC) is the original crypto and the internet's digital currency. <span>Learn More</span>
          </p>
        </div>
        <button>Buy BTC</button>
      </div>
      <div className="b-center">
        <div className="b-center-row">
          <p>BTC Balance</p>
          <p>$0.00</p>
          <p>Request BTC</p>
        </div>

        <div className="b-center-row">
          <p>BTC Price</p>
          <p>$16,911.74</p>
          <p>
            -$1,081.90 (6.01)% <span>this week</span>
          </p>
        </div>
      </div>

      <div className="b-tran-header">
        <div className="slider b-slide">
          <button className="sl-tot active">All</button>
          <button className="sl-wal">Recieved</button>
          <button className="sl-har">Sent</button>
          <button className="sl-har">Transferred</button>
        </div>

        <div className="b-btns-right">
          <button>
            {" "}
            <img src={download} alt="" />
            Download
          </button>
          <button>
            <img src={search} alt="" /> Search
          </button>
        </div>
      </div>

      <div className="b-tran-all">
        <div className="buy-tran">
          <img src={tran} className="add" alt="" />
          <div className="buy-tran-text">
            <p>Buy BTC</p>
            <p>Buy Failed</p>
          </div>
        </div>
        <div className="to-tran-text">
          <p>To: BTC Trading Wallet</p>
          <p>From: Credit/Debit Card</p>
        </div>
        <div className="num-tran-text">
          <p>0.00518915 BTC</p>
          <p>$89.43</p>
        </div>
      </div>
      <div className="b-tran-all">
        <div className="buy-tran">
          <img src={tran} className="add" alt="" />
          <div className="buy-tran-text">
            <p>Buy BTC</p>
            <p>Buy Failed</p>
          </div>
        </div>
        <div className="to-tran-text">
          <p>To: BTC Trading Wallet</p>
          <p>From: Credit/Debit Card</p>
        </div>
        <div className="num-tran-text">
          <p>0.00518915 BTC</p>
          <p>$89.43</p>
        </div>
      </div>
      <div className="b-tran-all">
        <div className="buy-tran">
          <img src={tran} className="add" alt="" />
          <div className="buy-tran-text">
            <p>Buy BTC</p>
            <p>Buy Failed</p>
          </div>
        </div>
        <div className="to-tran-text">
          <p>To: BTC Trading Wallet</p>
          <p>From: Credit/Debit Card</p>
        </div>
        <div className="num-tran-text">
          <p>0.00518915 BTC</p>
          <p>$89.43</p>
        </div>
      </div>
      <div className="b-tran-all">
        <div className="buy-tran">
          <img src={tran} className="add" alt="" />
          <div className="buy-tran-text">
            <p>Buy BTC</p>
            <p>Buy Failed</p>
          </div>
        </div>
        <div className="to-tran-text">
          <p>To: BTC Trading Wallet</p>
          <p>From: Credit/Debit Card</p>
        </div>
        <div className="num-tran-text">
          <p>0.00518915 BTC</p>
          <p>$89.43</p>
        </div>
      </div>
    </section>
  );
}
