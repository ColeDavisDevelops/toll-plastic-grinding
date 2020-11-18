import React from "react";
import styles from "./serviceCard.module.css";
import Img, { FluidObject } from "gatsby-image";

interface serviceProps {
  title: string;
  fluid: FluidObject;
}

const Services: React.FC<serviceProps> = ({ title, fluid }) => {
  return (
    <>
      <h1 className={styles.title}>Our Services</h1>
      <hr />
      <div className={styles.servicesContainer}>
        <h2>{title}</h2>
        <Img alt="" fluid={fluid} />
      </div>
    </>
  );
};

export default Services;
