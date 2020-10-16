import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { Container, Row, Col, Button } from "reactstrap";

import Layout from "../components/Layout";
import IndexPageHeader from "../components/IndexPageHeader";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import PageTransition from "gatsby-v2-plugin-page-transitions";
import styled from "@emotion/styled";
import reviewBG from "../img/review-bg.jpg";

const Hero = styled.div`
  margin-bottom: 24px;
  color: #4c4c4a;
  min-width: 230px;
  text-align: center;
  margin: 0 auto;
  max-width: 800px;
  @media (min-width: 768px) {
      text-align: left;

  }
`;

const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: 2.4em;
  @media (min-width: 768px) {
    font-size: 2.4em;
  }
`;
const HeroHeading = styled.p`
  font-weight: 400;
  font-size: 1em;
  @media (min-width: 768px) {
  }
`;

const HeroText = styled.p`
  font-weight: 200;

  @media (min-width: 768px) {
  }
`;
const HeroButtons = styled.div`
  margin: 0 auto;
`;

export const IndexPageTemplate = ({
  title1,
  title2,
  title3,
  heading,
  description,
  image,
  testimonials,
  intro,
}) => (
  <React.Fragment>
    <IndexPageHeader image={image} description={description} />

    <Container fluid style={{
          position: 'relative'

        }} className="pb-5">
        <div id="features" style={{
          position: "absolute",
          top: '-100px',
        }}></div>
        <Container fluid="xl">
        <Row>

          <Col>
          <Hero className="pb-5">
            <HeroTitle>
              <span style={{ color: "#4c4c4a" }}>{title1}</span>{" "}
              <span className="site-red">{title2}</span>{" "}
              <span style={{ color: "#4c4c4a" }}>{title3}</span>
            </HeroTitle>
            <hr/>
            <HeroHeading className="pb-3">{heading}</HeroHeading>
            <HeroButtons>
              <Button color="primary" size="md">
                Contacter
              </Button>{" "}
              <Button color="secondary" size="md">
                Voir La Carte
              </Button>
            </HeroButtons>
          </Hero>
          </Col>
          <Col md="8">
             <Features gridItems={intro.blurbs} />
          </Col>
          </Row>
          </Container>
        </Container>


      <Container fluid style={{
            marginBottom: 0,
            backgroundImage: `url(${reviewBG})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}>

          <Testimonials testimonials={testimonials} />
        </Container>
  </React.Fragment>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  intro: PropTypes.shape({
    heading: PropTypes.string,
    blurbs: PropTypes.array,
  }),
  title1: PropTypes.string,
  title2: PropTypes.string,
  title3: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  testimonials: PropTypes.array,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <PageTransition>
        <React.Fragment>
          <IndexPageTemplate
            image={frontmatter.image}
            title1={frontmatter.title1}
            title2={frontmatter.title2}
            title3={frontmatter.title3}
            heading={frontmatter.heading}
            description={frontmatter.description}
            intro={frontmatter.intro}
            testimonials={frontmatter.testimonials}
          />
        </React.Fragment>
      </PageTransition>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title1
        title2
        title3
        image {
          childImageSharp {
            fluid(maxWidth: 1024, maxHeight: 600, quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
        heading
        description
        intro {
          heading
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            text
            path
          }
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`;
