import React from "react";
import styles from "./header.module.css";
import logo from "./../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  return (
    <header className="header">
      <div className={styles.image}>
        <img style={{ width: "100%" }} src={logo} alt="" />
      </div>
      <ul className={styles.menu}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="" onClick={() => navigate('/aboutus')}>About Us</a>
        </li>
        <li>
          <a href="" onClick={() => navigate('/predict')}>Prediction</a>
        </li>
        <li>
          <a href="">Emotion</a>
        </li>
        <li>
          <a href="">News</a>
        </li>
        <div className={styles.buttons}>
          <button className={styles.signBut}>
            <p className={styles.text}>Sign In</p>
          </button>
          <button className={styles.startBut}>
            <p className={styles.text}>Get Started</p>
          </button>
        </div>
      </ul>
    </header>
  );
};

export default Header;
