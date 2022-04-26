import React from 'react';

import styles from '../styles/Home.module.scss'

const Products = () => {
  return (
    <div>
      <section>
        <h2>My Products</h2>
        <ul className={styles.list}>
          <li>
            <div>
              <span style={{ marginRight: "10px" }}>🐦</span>
              <a href="https://superdms.app" target={"_blank"}>
                SuperDMs.app
              </a>
            </div>
            <div className={styles.subtitle}>Twitter DMs management tool</div>
          </li>
          <li>
            <div>
              <span style={{ marginRight: "10px" }}>💬</span>
              <a href="https://namelss.ikshitij.com/" target={"_blank"}>
                Namelss
              </a>
            </div>
            <div className={styles.subtitle}>An anonymous chat messenger</div>
          </li>
          <li>
            <div>
              <span style={{ marginRight: "10px" }}>📝</span>
              <a href="https://kanbang-d1e70.web.app/" target={"_blank"}>
                Kanbang
              </a>
            </div>
            <div className={styles.subtitle}>
              Minimalist but stylish Kanban board
            </div>
          </li>
          <li>
            <div>
              <span style={{ marginRight: "10px" }}>💡</span>
              <a href="https://ideator.ikshitij.com/" target={"_blank"}>
                Ideator
              </a>
            </div>
            <div className={styles.subtitle}>Use it for tweet ideas</div>
          </li>
          <li>
            <div>
              <span style={{ marginRight: "10px" }}>🔗</span>
              <a href="https://chootu.ikshitij.com/" target={"_blank"}>
                Chootu
              </a>
            </div>
            <div className={styles.subtitle}>Minimal url shortener</div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Products;
