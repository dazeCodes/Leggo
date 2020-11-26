import React from "react";
import send from "../../assets/img/send.png"
import logo from "../../assets/img/logo.png"
import recieve from "../../assets/img/recieve.png"
import buy from "../../assets/img/buy.png"
import swap from "../../assets/img/swap.png"
import borrow from "../../assets/img/borrow.png"
import earn from "../../assets/img/earn.png"
import security from "../../assets/img/security.png"
import reset from "../../assets/img/reset.png"
import settings from "../../assets/img/settings.png"

export default function Header() {
  return (
    <>
      <header>
        <img className="logo" src={logo} alt="" />
        <p className="title">
          Blockchain<span>.com</span>
        </p>
        <nav>
          <ul>
            <li>
              <img src={send} alt="" /> Send
            </li>
            <li>|</li>
            <li>
              <img src={recieve} alt="" /> Request
            </li>
            <li>|</li>
            <li>
              <img src={swap} className="swap" alt="" /> Swap
            </li>
            <li>|</li>
            <li>
              <img src={buy} className="buy" alt="" /> Buy/Sell Crypto
            </li>
            <li>|</li>
            <li>
              <img src={earn} className="buy" alt="" /> Earn Interest
            </li>
            <li>|</li>
            <li>
              <img src={borrow} alt="" /> Borrow
            </li>
          </ul>

          <ul>
            <li>
              <img src={security} className="buy" alt="" />
              Security
            </li>
            <li>|</li>
            <li>
              <img src={reset} className="buy" alt="" />
            </li>
            <li>|</li>
            <li>
              <img src={settings} className="buy" alt="" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
