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

interface Edge {
  node: {
    childImageSharp: childImageSharp;
  };
}

interface AllFile {
  edges: Array<Edge>;
}

interface data {
  file: file;
  allFile: AllFile;
}

type indexProps = PageProps<data>;

const IndexRoute: React.FC<indexProps> = ({ data }) => {
  const heroFluid = data.file.childImageSharp.fluid;
  const serviceFluids = data.allFile.edges.reduce((hash, edge, counter) => {
    hash[counter] = edge.node.childImageSharp.fluid;
    return hash;
  }, {});

  console.log(serviceFluids);

  return (
    <Layout>
      <HeroBanner fluid={heroFluid} />
      {/* {serviceFluids.map(fluid => (
        <ServiceCard title="t" fluid={fluid} />
      ))} */}
    </Layout>
  );
};

export const query = graphql`
  query IndexQuery {
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
    file(relativePath: { eq: "images/hero.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexRoute;
