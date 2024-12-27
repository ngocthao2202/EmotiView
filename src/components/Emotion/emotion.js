import React from "react";
import styles from "./emotion.module.css";
import happy from "./../../assets/happy.png";
import cry from "./../../assets/cry.png";
import devil from "./../../assets/devil.png";

const Emotion = () => {
  const eachEmo = [
    {
      id: 1,
      content:
        "The model detects features like a smile, raised cheeks, and crinkling around the eyes.",
      image: happy,
    },
    {
      id: 2,
      content:
        "It looks for downturned mouth corners, drooping eyelids, and frowning.",
      image: cry,
    },
    {
      id: 3,
      content:
        "It recognizes furrowed brows, tightened lips, and glaring eyes.",
      image: devil,
    },
  ];
  return (
    <div className={styles.emotion}>
      <div className={styles.context}>
        <h1>
          <b className="tourney-headings">
            Facial emotion recognition (FER) technology
          </b>
        </h1>
        <span>
          It uses deep learning algorithms to analyze facial expressions and
          accurately identify emotions in real-time. By leveraging neural
          networks, FER models process facial features such as eyes, mouth, and
          expressions to classify emotions like happiness, sadness, or anger.
          Recent advancements in deep learning and computer vision have
          significantly improved the accuracy and speed of these models, making
          them suitable for diverse applications, including healthcare, mental
          health diagnostics, customer experience analysis, and human-computer
          interaction. With web-based deployment, FER technology is becoming
          more accessible, enabling real-time emotion detection for a wide range
          of industries and applications.
        </span>
      </div>
      <div className={styles.status}>
        {eachEmo.map((emotion) => (
          <div className={styles.eachEmotion} key={emotion.id}>
            <div className={styles.image}>
              <img src={emotion.image} />
            </div>
            <span>{emotion.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Emotion;
