import React from 'react';

import styles from '../styles/Home.module.scss';

const Socials = () => {
  return (
    <div>
      <section>
        <h2>Social Media</h2>
        <ul className={styles.list}>
          <li>
            <div>
              <span style={{ marginRight: "10px" }}>🐦</span>
              <a href="https://twitter.com/ikshitijsingh" target={"_blank"}>
                Twitter
              </a>
            </div>
            <div className={styles.subtitle}>Tweets everyday</div>
          </li>
          <li>
            <div>
              <span style={{ marginRight: "10px" }}>📸</span>
              <a
                href="https://www.instagram.com/singh_kshitij/"
                target={"_blank"}
              >
                Instagram
              </a>
            </div>
            <div className={styles.subtitle}>Somewhat active</div>
          </li>
          <li>
            <div>
              <span style={{ marginRight: "10px" }}>🎥</span>
              <a
                href="https://www.youtube.com/channel/UC1sLIdmn2AzkPhR9-ThvixQ"
                target={"_blank"}
              >
                YouTube
              </a>
            </div>
            <div className={styles.subtitle}>Hoping to get active</div>
          </li>
          <li>
            <div>
              <span style={{ marginRight: "10px" }}>💼</span>
              <a
                href="https://www.linkedin.com/in/ikshitijsingh/"
                target={"_blank"}
              >
                LinkedIn
              </a>
            </div>
            <div className={styles.subtitle}>Still trying to be active</div>
          </li>
          <li>
            <div>
              <span style={{ marginRight: "10px" }}>📧</span>
              <a href="mailto:singh_kshitij@yahoo.com" target={"_blank"}>
                Email
              </a>
            </div>
            <div className={styles.subtitle}>Immediate responses</div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Socials;
