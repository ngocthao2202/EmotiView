import React from "react";
import styles from "./footer.module.css";
import logo from "./../../assets/logo.png";
import email from "./../../assets/email.png";
import phone from "./../../assets/phone.png";
import social from "./../../assets/social.png";

const Footer = () => {
  return (
    <footer>
      <div className={styles.content}>
        <div className={styles.image}>
          <img style={{ width: "20%" }} src={logo} />
        </div>
        <span>
          Facial emotion recognition (FER) is crucial in healthcare and
          technology. This research focuses on optimizing deep learning models
          for more accurate and efficient FER in web-based applications,
          enhancing diagnostic precision in areas like mental health and remote
          therapy.
        </span>
      </div>
      <div className={styles.rights}>
        <p style={{ textAlign: "left" }}>
          © 2024. All rights reserved by Jan Uchytil
        </p>
        <div className={styles.social}>
          <img src={email} />
          <img src={phone} />
          <img src={social} />
        </div>
        <p style={{ textAlign: "right" }}>
          Privacy Policy | Terms and Conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
