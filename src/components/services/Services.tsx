import React from "react";
import styles from "./services.module.css";

const Services: React.FC = () => {
  return (
    <>
      <h1 className={styles.title}>Our Services</h1>
      <hr />

      <div className={styles.servicesContainer}>
        <div>Shredding & Grinding</div>
        <div>Pelletizing</div>
        <div>Densifying</div>
      </div>
    </>
  );
};

export default Services;
