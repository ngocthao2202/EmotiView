import React from "react";
import styles from "./hero.module.css";
import bg from "./../../assets/bg.png";
import studying from "./../../assets/studying.png";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.context}>
        <h4>ONE STOP SHOP NFT PROTOCOL</h4>
        <h1>
          <b className="tourney-headings">
            RECOGNIZE THE EMOTION REACT WITH PRECISION
          </b>
        </h1>
        <span>
          Facial emotion recognition (FER) is crucial in healthcare and
          technology. This research focuses on optimizing deep learning models
          for more accurate and efficient FER in web-based applications,
          enhancing diagnostic precision in areas like mental health and remote
          therapy.
        </span>
      </div>
      <div className={styles.image}>
        <div className={styles.background}>
          <img src={bg} />
          <div className={styles.img}>
            <img src={studying} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
