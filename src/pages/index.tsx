import React from "react";

// COMPONENTS
import Layout from "../components/layout";
import HeroBanner from "../components/hero-banner";
import Services from "../components/services";
import About from "../components/about";
import Gallery from "../components/gallery";
import { Container, Card } from "react-bootstrap";

const IndexRoute: React.FC = () => {
  return (
    <Layout>
      <HeroBanner />
      <Services />
      <About />
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>testing</Card.Title>
          </Card.Body>
        </Card>
      </Container>
      <Gallery />
    </Layout>
  );
};

export default IndexRoute;
