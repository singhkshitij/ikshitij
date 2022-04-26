import { useEffect, useState } from "react";
import moment from "moment";
import ReactTooltip from "react-tooltip";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Parser from "rss-parser";

import { Intro, About, Products, Writings } from "../components";

export default function Home(props) {
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    setShowTip(true);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Kshitij Singh</title>
        <meta
          name="description"
          content="Software Developer | Traveller | Entrepreneur"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className={styles.main}>
        <Intro />
        <div className={styles.sections}>
          <About />
          <Products />
          {/* <section>
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
          </section> */}
          <Writings />
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
      </main>

      {showTip ? (
        <ReactTooltip
          multiline={true}
          overridePosition={({ left, top }, _e, _t, node) => {
            return {
              top,
              left: typeof node === "string" ? left : Math.max(left, 0),
            };
          }}
        />
      ) : null}
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        @media (prefers-color-scheme: dark) {
          html,
          body {
            color-scheme: dark;
            background: #131418;
            color: #e5e5e5;
          }
        }

        @media (prefers-color-scheme: light) {
          html,
          body {
            color-scheme: light;
            background: white;
            color: #000;
          }
        }
      `}</style>
    </div>
  );
}
