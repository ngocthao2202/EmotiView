import React from "react";
import styles from "./news.module.css";
import EachNew from "../EachNew/eachNew";
import bigImage from "./../../assets/image (3).png";
import new1 from "./../../assets/image.png";
import new2 from "./../../assets/image (1).png";
import new3 from "./../../assets/image (2).png";


const News = () => {
  const news = [
    {
      id: 1,
      title: "5-Minute Daily Practices for Better Mental Health",
      content:
        "Discover simple yet effective habits that can help you manage stress and improve overall well-being in just a few minutes a day.",
      image: new1,
    },
    {
      id: 2,
      title: "The Science of Gratitude: Why Being Thankful Improves Your Mental Health",
      content:
        "Recent studies show how practicing gratitude daily can boost your mood and enhance emotional resilience.",
      image: new2,
    },
    {
      id: 3,
      title: "How Nature Therapy is Transforming Lives",
      content:
        "Learn how spending time in green spaces can reduce anxiety and elevate your mental state.",
      image: new3,
    },
  ];
  return (
    <div className={styles.news}>
      <h1>
        <b className="tourney-headings">News</b>
      </h1>
      <div className={styles.listNews}>
        <div className={styles.list}>
          {news.map((item) => (
            <EachNew key={item.id} newsItem={item} />
          ))}
        </div>
        <div className={styles.image}>
          <img style={{ width: "100%" }} src={bigImage} />
          <h2>DISCOVER WHAT YOUR EMOTIONS ARE TRYING TO TELL YOU!</h2>
        </div>
      </div>
    </div>
  );
};

export default News;
