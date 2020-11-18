import React, { CSSProperties } from "react";
import styles from "./heroBanner.module.css";
import Img, { FluidObject } from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

interface childImageSharp {
  fluid: FluidObject;
}

interface file {
  childImageSharp: childImageSharp;
}

interface data {
  file: file;
}

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
        <h1>Plastic Grinding, Shredding & Pelletizing Services</h1>
        <h2>
          We have over 20 years of experience shredding, grinding, and
          pelletizing plastic.
        </h2>
      </div>
    </div>
  );
};

export default HeroBanner;
