import React from "react";
import styles from "./gallery.module.css";
import Carousel from "react-bootstrap/Carousel";
import { useStaticQuery, graphql } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import { data } from "../../types/data";

interface galleryDataNode {
  imgAlt: string;
  fluid: FluidObject;
}

const Gallery: React.FC = () => {
  const galleryData: Array<galleryDataNode> = [
    {
      imgAlt: "imageOne",
      fluid: null,
    },
    {
      imgAlt: "imageOne",
      fluid: null,
    },
    {
      imgAlt: "imageOne",
      fluid: null,
    },
    {
      imgAlt: "imageOne",
      fluid: null,
    },
    {
      imgAlt: "imageOne",
      fluid: null,
    },
  ];
  const data: data = useStaticQuery(graphql`
    query GalleryQuery {
      allFile(filter: { relativeDirectory: { eq: "images/gallery" } }) {
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
    galleryData[idx].fluid = edge.node.childImageSharp.fluid;
  });

  return (
    <div id="gallery" className={styles.container}>
      <h1 className={styles.title}>Gallery</h1>
      <hr className={styles.divider} />
      <Carousel className={styles.carousel}>
        {galleryData.map(({ imgAlt, fluid }: galleryDataNode, idx) => (
          <Carousel.Item key={idx} interval={1000}>
            <Img fluid={fluid} alt={imgAlt} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Gallery;
