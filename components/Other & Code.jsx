import React from "react";

import styles from '../styles/Home.module.scss';

const OtherCode = () => {
  return (
    <div>
      <section>
        <h2>Code</h2>
        <ul className={styles.list}>
          <li>
            <span style={{ marginRight: "10px" }}>⌨️</span>
            <a href="https://github.com/trungdq88" target={"_blank"}>
              GitHub
            </a>
          </li>
          <h2>Other Places</h2>
          <li>
            <div>
              <span style={{ marginRight: "10px" }}>😺</span>
              <a
                href="https://www.producthunt.com/@kshitij_singh"
                target={"_blank"}
              >
                Product Hunt
              </a>
            </div>
            <div className={styles.subtitle}>Products launched: 2</div>
          </li>
          <li>
            <div>
              <span style={{ marginRight: "10px" }}>💰</span>
              <a href="https://paypal.me/ikshitijsingh" target={"_blank"}>
                PayPal
              </a>
            </div>
            <div className={styles.subtitle}>Thanks for your tip!</div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default OtherCode;
