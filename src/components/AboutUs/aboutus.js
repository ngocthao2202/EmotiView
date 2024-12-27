import React from "react";
import styles from "./aboutus.module.css";
import rocket from "./../../assets/rocket.png";

const AboutUs = () => {
  return (
    <div className={styles.aboutus}>
      <div className={styles.image}>
        <div className={styles.background}>
          <img src={rocket} />
        </div>
      </div>
      <div className={styles.context}>
        <h4>REVOLUTIONIZED BY TECHNOLOGY</h4>
        <h1>
          Optimizing Deep Learning Techniques for Accurate Facial Emotion
          Recognition:{" "}
          <b className="tourney-headings">
            {" "}
            Web-Based Deployment and Enhanced Diagnostic Precision
          </b>
        </h1>
        <span>
          Facial emotion recognition (FER) is vital in fields like healthcare
          and human-computer interaction. While deep learning has improved FER
          accuracy, optimizing these models for real-time web deployment remains
          a challenge. This research aims to enhance model precision and
          diagnostic accuracy in FER, focusing on efficient web-based deployment
          for applications such as mental health assessment and remote therapy.
          By refining deep learning techniques, this work bridges the gap
          between theoretical advances and practical use.
        </span>
      </div>
    </div>
  );
};

export default AboutUs;
