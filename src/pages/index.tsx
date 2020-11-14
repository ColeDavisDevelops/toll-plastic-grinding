import React from "react";
import { PageProps, graphql } from "gatsby";
// COMPONENTS
import Layout from "../components/layout";
import HeroBanner from "../components/heroBanner";
import Services from "../components/services";

const IndexRoute: React.FC<PageProps> = ({ data }) => {
  const d: any = data;
  return (
    <Layout>
      <HeroBanner fluid={d.file.childImageSharp.fluid} />
      <Services />
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
