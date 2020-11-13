import React from "react"
import { PageProps, graphql } from "gatsby"
import Layout from "../components/layout"
import HeroBanner from "../components/heroBanner"

const IndexRoute: React.FC<PageProps> = ({ data }) => {
  const d: any = data
  return (
    <Layout>
      <HeroBanner fluid={d.file.childImageSharp.fluid} />
    </Layout>
  )
}

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
`

export default IndexRoute
