import { FluidObject } from "gatsby-image";

interface childImageSharp {
  fluid: FluidObject;
}

interface file {
  childImageSharp: childImageSharp;
}

interface node {
  node: { childImageSharp: childImageSharp };
}

interface allFile {
  edges: Array<node>;
}

export interface data {
  file: file;
  allFile: allFile;
}
