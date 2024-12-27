"use client";
 
import banner1 from './../../assets/Group 1.png';
import banner2 from './../../assets/Group 4.png';
import styles from './aboutus.module.css'

const AboutUs = () => {
  
  return (
    <div className={styles.container}>
        <div className={styles.section1}>
            <h1>
                <b className="tourney-headings">
                    Unlock Your Inner Peace, Today.
                </b>
            </h1>
            <span>
            Upload your photo, uncover your emotions, and embrace personalized self-care.
            </span>
            <div className={styles.image}>
                <img src={banner1}/>
            </div>
        </div>
        <div className={styles.section2}>
            <h1>
                <b className="tourney-headings">
                    We Specialize In
                </b>
            </h1>
            <div className={styles.image}>
                <img src={banner2}/>
            </div>
            <h1>
                <b className="tourney-headings">
                    And much more...
                </b>
            </h1>
        </div>
    </div>
  );
};

export default AboutUs;
