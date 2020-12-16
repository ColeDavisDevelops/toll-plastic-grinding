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
          We have delivered and fine-tuned plastic shredding, grinding,
          pelletizing, and densifying services for thirty years.
        </p>
        <h2 className={styles.bulletTitle}>Large processing capacity</h2>
        <p>
          When it comes to manufacturing, we are obsessed. Our plant can process
          large volumes of plastic material in many different ways. We maximize
          efficiency and make sure our machines are happy around the clock! If
          you have a significant amount of material that needs consistent
          processing, our team delivers.
        </p>
        <h2 className={styles.bulletTitle}>Innovative Procedures</h2>
        <p>
          Our engineering team has consistently devised strategies to create
          value for plastic parts manufacturers. We have found ways to process
          materials that others will not!
        </p>
      </div>
    </div>
  );
};

export default About;
