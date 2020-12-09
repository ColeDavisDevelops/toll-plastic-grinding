import React from "react";
import styles from "./heroBanner.module.css";
import Img, { FluidObject } from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { data } from "../../types/data";

const HeroBanner: React.FC = () => {
  const data: data = useStaticQuery(graphql`
    query HeroQuery {
      file(relativePath: { eq: "images/hero.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const fluid = data.file.childImageSharp.fluid;

  return (
    <div className={styles.container}>
      <Img className={styles.image} fluid={fluid} alt="processed plastic" />
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Plastic Grinding, Shredding & Pelletizing Services
        </h1>
        <h2 className={styles.subTitle}>
          We have over 20 years of experience shredding, grinding, and
          pelletizing plastic.
        </h2>
        <button className={styles.button}>CONTACT US</button>
      </div>
      <div className={styles.iconScroll}></div>
    </div>
  );
};

export default HeroBanner;
