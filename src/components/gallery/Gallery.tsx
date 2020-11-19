import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useStaticQuery, graphql } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import { data } from "../../types/data";

interface galleryDataNode {
  label: string;
  description: string;
  imgAlt: string;
  fluid: FluidObject;
}

const Gallery: React.FC = () => {
  const galleryData: Array<galleryDataNode> = [
    {
      label: "imageOne",
      description: "imageOneDescription",
      imgAlt: "imageOne",
      fluid: null,
    },
    {
      label: "imageOne",
      description: "imageOneDescription",
      imgAlt: "imageOne",
      fluid: null,
    },
    {
      label: "imageOne",
      description: "imageOneDescription",
      imgAlt: "imageOne",
      fluid: null,
    },
    {
      label: "imageOne",
      description: "imageOneDescription",
      imgAlt: "imageOne",
      fluid: null,
    },
    {
      label: "imageOne",
      description: "imageOneDescription",
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
  console.log(galleryData);

  return (
    <Carousel>
      {galleryData.map(
        ({ label, description, imgAlt, fluid }: galleryDataNode) => (
          <Carousel.Item interval={1000}>
            <Img fluid={fluid} alt={imgAlt} />
            <Carousel.Caption>
              <h3>{label}</h3>
              <p>{description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      )}
    </Carousel>
  );
};

export default Gallery;
