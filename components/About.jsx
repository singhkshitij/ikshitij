import React from 'react';

import styles from "../styles/Home.module.scss";

const About = () => {
  return (
    <div>
      <section>
        <h2>About Me</h2>
        <ul className={styles.list}>
          <li>
            <span style={{ marginRight: "10px" }}>🧑</span>
            26 years old
          </li>
          <li>
            <span style={{ marginRight: "10px" }}>🇮🇳</span>
            From India
          </li>
          <li>
            <span style={{ marginRight: "10px" }}>👨‍💻</span>
            Software Developer
          </li>

          <li>
            <span style={{ marginRight: "10px" }}>🔨</span>
            Part-time Indie Hacker
          </li>
          <li>
            <span style={{ marginRight: "10px" }}>😌</span>
            Loves Bike️ trips
          </li>
          <li>
            <span style={{ marginRight: "10px" }}>✨</span>
            <a href={"/kshitijs-resume.pdf"} target={"_blank"}>
              Resume
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;
