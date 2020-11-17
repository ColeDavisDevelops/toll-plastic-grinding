import React from "react";
import { PageProps, graphql } from "gatsby";
// COMPONENTS
import Layout from "../components/layout";
import HeroBanner from "../components/hero-banner";
import ServiceCard from "../components/service-card";
import { FluidObject } from "gatsby-image";

interface childImageSharp {
  fluid: FluidObject;
}

interface file {
  childImageSharp: childImageSharp;
}

interface data {
  file: file;
}

type indexProps = PageProps<data>;

const IndexRoute: React.FC<indexProps> = ({ data }) => {
  return (
    <Layout>
      <HeroBanner fluid={data.file.childImageSharp.fluid} />
      <ServiceCard title={"Shredding & Grinding"} fluid={} />
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "images/plastic.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexRoute;
