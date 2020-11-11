import React from "react"
import { PageProps, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

const IndexRoute: React.FC = (props: PageProps) => {
  const data: any = props.data
  const fluid = data.file.childImageSharp.fluid
  return (
    <Layout>
      <Img fluid={fluid} alt="processed plastic" />
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
