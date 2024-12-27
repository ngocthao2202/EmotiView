import React from "react";
import styles from "./eachNew.module.css";

const EachNew = ({ newsItem }) => {
  return (
    <div className={styles.eachNew}>
      <div className={styles.image}>
        <img
          style={{ width: "100%", borderRadius: "6px" }}
          src={newsItem.image}
          alt="News"
        />
      </div>
      <div
        className={styles.content}
        style={{ borderTop: newsItem.id === 1 ? 0 : "1px solid #b8c2ce" }}
      >
        <h4>{newsItem.title}</h4>
        <p>{newsItem.content}</p>
      </div>
    </div>
  );
};

export default EachNew;
