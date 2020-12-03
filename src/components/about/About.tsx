import React from "react";
import styles from "./about.module.css";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { data } from "../../types/data";

const About = () => {
  const data: data = useStaticQuery(graphql`
    query AboutQuery {
      file(relativePath: { eq: "images/about.jpg" }) {
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
      <h1 className={styles.title}>Proven Performance</h1>
      <hr />
      {/* <Img
        className={styles.shreddedImage}
        alt="plastic shredded densified"
        fluid={fluid}
      /> */}
      <div>
        <h4 className={styles.bulletTitle}>
          Thirty years of industry experience
        </h4>
        <p>
          We have thirty years of industry experience. We have thirty years of
          industry experience. We have thirty years of industry experience. We
          have thirty years of industry experience. We have thirty years of
        </p>
      </div>
      <div>
        <h4 className={styles.bulletTitle}>
          Thirty years of industry experience
        </h4>
        <p>
          We have thirty years of industry experience. We have thirty years of
          industry experience. We have thirty years of industry experience. We
          have thirty years of industry experience. We have thirty years of
        </p>
      </div>
      <div>
        <h4 className={styles.bulletTitle}>
          Thirty years of industry experience
        </h4>
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
