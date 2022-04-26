import React from 'react';

import styles from "../styles/Home.module.scss";

const Intro = () => {
  return (
    <div>
      <section className={styles.intro}>
        <img className={styles.avatar} src="/kshitijsingh.png" />
        <h1 className={styles.title}>Kshitij Singh</h1>
        <p>Software Developer ⁃ Traveller ⁃ Generalist</p>
      </section>
    </div>
  );
}

export default Intro;
