import React from "react";
import styles from "./predict.module.css";
import number1 from "./../../assets/number-1.png";
import number2 from "./../../assets/number-2.png";
import number3 from "./../../assets/number-3.png";
import ButtonColor from "../ButtonColor/buttonColor";

const Predict = () => {
  const steps = [
    {
      id: 1,
      title: "Image Capture",
      content:
        "The system captures an image or video frame of the subject's face, typically through a camera or an uploaded image, initiating the emotion detection process.",
      image: number1,
    },
    {
      id: 2,
      title: "IFace Detection",
      content:
        "The captured image is processed to detect and isolate the face from the background, enabling focused analysis. Deep learning algorithms, like ResNet 50, MobileNet, .., are used to achieve this.",
      image: number2,
    },
    {
      id: 3,
      title: "Emotion Classification",
      content:
        "Once the facial features are extracted, the model compares them to learned patterns and classifies the emotion, providing an output such as happy, sad, or angry with a confidence score.",
      image: number3,
    },
  ];
  return (
    <div className={styles.predict}>
      <div className={styles.container}>
        <div className={styles.context}>
          <h4>TECHNOLOGY</h4>
          <h1>
            Emotion Prediction Process in Facial Emotion Recognition Technology
          </h1>
          <span>
            Emotion prediction through facial emotion recognition technology
            involves a series of steps where deep learning models analyze facial
            features to classify emotions such as happy, sad, and angry.
          </span>

          <ButtonColor text={'Explore this!!!'}/>
        </div>
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div key={step.id} className={styles.eachStep}>
              <div className={styles.imageLine}>
                <div
                  style={{ display: "flex", gap: "16px", textAlign: "center" }}
                >
                  <img src={step.image} />
                </div>
                {index !== steps.length - 1 && (
                  <div className={styles.line}></div>
                )}
              </div>
              <div className={styles.content}>
                <h4>{step.title}</h4>
                <span>{step.content}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Predict;
