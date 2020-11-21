import React from "react";
// COMPONENTS
import Layout from "../components/layout";
import HeroBanner from "../components/hero-banner";
import Services from "../components/services";
import About from "../components/about";
import Gallery from "../components/gallery";
import Contact from "../components/contact";

const IndexRoute: React.FC = () => {
  return (
    <Layout>
      <HeroBanner />
      <Services />
      <About />
      <Gallery />
      <Contact />
    </Layout>
  );
};

export default IndexRoute;
