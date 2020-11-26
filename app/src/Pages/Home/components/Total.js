import React from "react";

export default function Total({ image }) {
  return (
    <>
      <div className="total-others">
        <div className="each-total">
          <div>
            <p className="each-us">
              <img src={image.dollar} className="each-btc" alt="" />
              U.S. Dollars
            </p>
          </div>
          <div className="each-cur">
            <p>$0.00</p>
            <p>$0.00</p>
          </div>
        </div>
      </div>
      <div className="total-others">
        <div className="each-total">
          <div>
            <p className="each-us">
              <img src={image.euro} className="each-btc" alt="" />
              Euros
            </p>
          </div>
          <div className="each-cur">
            <p>$0.00</p>
            <p>$0.00</p>
          </div>
        </div>
      </div>
      <div className="total-others">
        <div className="each-total">
          <div>
            <p className="each-us">
              <img src={image.pound} className="each-btc" alt="" />
              Pounds
            </p>
          </div>
          <div className="each-cur">
            <p>$0.00</p>
            <p>$0.00</p>
          </div>
        </div>
      </div>
      <div className="total-others">
        <div className="each-total">
          <div>
            <p className="each-us">
              <img src={image.bitcoin} className="each-btc" alt="" />
              Bitcoin
            </p>
          </div>
          <div className="each-cur">
            <p>$0.00</p>
            <p>$0.00</p>
          </div>
        </div>
      </div>
      <div className="total-others">
        <div className="each-total">
          <div>
            <p className="each-us">
              <img src={image.ether} className="each-btc" alt="" />
              Ether
            </p>
          </div>
          <div className="each-cur">
            <p>$0.00</p>
            <p>$0.00</p>
          </div>
        </div>
      </div>
      <div className="total-others">
        <div className="each-total">
          <div>
            <p className="each-us">
              <img src={image.bitcoinCash} className="each-btc" alt="" />
              Bitcoin Cash
            </p>
          </div>
          <div className="each-cur">
            <p>$0.00</p>
            <p>$0.00</p>
          </div>
        </div>
      </div>
      <div className="total-others">
        <div className="each-total">
          <div>
            <p className="each-us">
              <img src={image.stellar} className="each-btc" alt="" />
              Stellar
            </p>
          </div>
          <div className="each-cur">
            <p>$0.00</p>
            <p>$0.00</p>
          </div>
        </div>
      </div>
      <div className="total-others">
        <div className="each-total">
          <div>
            <p className="each-us">
              <img src={image.algorand} className="each-btc" alt="" />
              Algorand
            </p>
          </div>
          <div className="each-cur">
            <p>$0.00</p>
            <p>$0.00</p>
          </div>
        </div>
      </div>
      <div className="total-others">
        <div className="each-total">
          <div>
            <p className="each-us">
              <img src={image.usdigital} className="each-btc" alt="" />
              USD Digital
            </p>
          </div>
          <div className="each-cur">
            <p>$0.00</p>
            <p>$0.00</p>
          </div>
        </div>
      </div>
      <div className="total-others">
        <div className="each-total">
          <div>
            <p className="each-us">
              <img src={image.tether} className="each-btc" alt="" />
              Tether
            </p>
          </div>
          <div className="each-cur">
            <p>$0.00</p>
            <p>$0.00</p>
          </div>
        </div>
      </div>
    </>
  );
}
