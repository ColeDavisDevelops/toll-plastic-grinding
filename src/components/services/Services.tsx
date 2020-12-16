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
        "Our business specializes in fulfilling large volume grinding orders. We focus on producing a consistent plastic granular at a fast turnaround rate. Furthermore, all orders get handled carefully to prevent contamination. We have millions of pounds of experience shredding and grinding plastic and have developed ways to process forms of material others will not!",
      fluid: null,
    },
    {
      title: "Pelletizing",
      description:
        "In addition to shredding and grinding services, we also offer our clients the ability to pelletize their material. We have twin screw and single screw extruders working 24/7, producing re-processable plastic pellets. Our lab ensures the properties of your plastic are within specified ranges.",
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
    <div id="services" className={styles.container}>
      <h1 className={styles.title}>Toll Services</h1>
      <hr className={styles.divider} />
      <div className={styles.servicesContainer}>
        {serviceData.map(({ title, description, fluid }) => (
          <div key={title} className={styles.servicesCard}>
            <Img alt={title} fluid={fluid} />
            <h2>{title}</h2>
            <div className={styles.description}>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
