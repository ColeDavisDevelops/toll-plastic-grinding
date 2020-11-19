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
      <h1>Proven Performance</h1>
      <hr />
      <Img alt="" fluid={fluid} />
      <div>
        <ul>
          <li>Thirty Years of industry experience</li>
          <li>Thirty Years of industry experience</li>
          <li>Thirty Years of industry experience</li>
          <li>Thirty Years of industry experience</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
