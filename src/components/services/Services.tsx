import React from "react";
import styles from "./services.module.css";
import Img, { FluidObject } from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { data } from "../../types/data";

interface serviceData {
  title: string;
  description: string;
  fluid: FluidObject;
}

const Services: React.FC = () => {
  const serviceData: Array<serviceData> = [
    {
      title: "Shredding & Grinding",
      description:
        "Our expertise lies in processing large volume orders. We focus on providing a consistent product at a fast turnaround rate. We are machined to reduce large raw materials into granular forms and will come up with innovative ways to process forms of material that others will not!",
      fluid: null,
    },
    {
      title: "Pelletizing",
      description:
        "With our plant equipped to pelletize, we are able to offer our clients the ability to have their raw materials processed all the way down to a process-able pellet. Whether you have regrind that needs processing or raw materials that need to be shred, ground and pelletized, we are a one stop shop.",
      fluid: null,
    },
  ];

  const data: data = useStaticQuery(graphql`
    query ServiceQuery {
      allFile(filter: { relativeDirectory: { eq: "images/services" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  data.allFile.edges.forEach((edge, idx) => {
    serviceData[idx].fluid = edge.node.childImageSharp.fluid;
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Toll Services</h1>
      <hr />
      {serviceData.map(({ title, description, fluid }) => (
        <div key={title} className={styles.servicesContainer}>
          <Img alt={title} fluid={fluid} />
          <h2>{title}</h2>
          <div className={styles.description}>
            <p>{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
