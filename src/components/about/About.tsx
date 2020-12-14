import React from "react";
import styles from "./about.module.css";

const About: React.FC = () => {
  return (
    <div id="about" className={styles.container}>
      <h1 className={styles.title}>Proven Performance</h1>
      <hr className={styles.divider} />
      <div className={styles.textContainer}>
        <h2 className={styles.bulletTitle}>
          Thirty years of plastic processing experience
        </h2>
        <p>
          We have thirty years of industry experience. We have thirty years of
          industry experience. We have thirty years of industry experience. We
          have thirty years of industry experience. We have thirty years of
        </p>
        <h2 className={styles.bulletTitle}>Large processing capacity</h2>
        <p>
          We have thirty years of industry experience. We have thirty years of
          industry experience. We have thirty years of industry experience. We
          have thirty years of industry experience. We have thirty years of
        </p>
        <h2 className={styles.bulletTitle}>Consistent Procedures</h2>
        <p>
          We have thirty years of industry experience. We have thirty years of
          industry experience. We have thirty years of industry experience. We
          have thirty years of industry experience. We have thirty years of
        </p>
      </div>
    </div>
  );
};

export default About;
