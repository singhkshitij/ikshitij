import React from 'react';

import styles from '../styles/Home.module.scss';

const Writing = () => {
  return (
    <div>
      <section>
        <h2>Writings</h2>
        <ul className={styles.list}>
          <li>
            <div>
              <span style={{ marginRight: "10px" }}>📝</span>
              <a href="https://mytrashcode.com" target={"_blank"}>
                Blog
              </a>
            </div>
            <div className={styles.subtitle}>Programming tutorials</div>
          </li>
          <li>
            <div>
              <span style={{ marginRight: "10px" }}>💌</span>
              <a href="http://newsletter.ikshitij.com" target={"_blank"}>
                Newsletter
              </a>
            </div>
            <div className={styles.subtitle}>Building audience</div>
          </li>
          <li>
            <div>
              <span style={{ marginRight: "10px" }}>✏️</span>
              <a href="https://ikshitij.com/notes" target={"_blank"}>
                Public Notes
              </a>
            </div>
            <div className={styles.subtitle}>Notes, tips, and FAQs</div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Writing;
