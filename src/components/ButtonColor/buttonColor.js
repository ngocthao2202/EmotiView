import React from "react";
import styles from "./buttonColor.module.css";

const ButtonColor = ({text}) => {
  return (
    <button className={styles.button}>
      <p>{text}</p>
    </button>
  );
};

export default ButtonColor;
