import React from "react";
// COMPONENTS
import Layout from "../components/layout";
import HeroBanner from "../components/hero-banner";
import ServiceCard from "../components/services";
import About from "../components/about";

const IndexRoute: React.FC = () => {
  return (
    <Layout>
      <HeroBanner />
      <ServiceCard />
      <About />
    </Layout>
  );
};

export default IndexRoute;
