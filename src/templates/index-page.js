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
  @media (min-width: 992px) {
    text-align: left;
  }
`;

const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: 2.4em;
  line-height: 1.1;
  letter-spacing: -1.5px;

  @media (min-width: 992px) {
    font-size: 3.2em;
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
const DividerTop = styled.div`
  width: 100%;
  height: 5em;
  margin: 0 0 1em 0;
`;
const DividerBottom = styled.div`
  width: 100%;
  height: 5em;
  margin: 1em 0 0 0;
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
    <DividerTop className="bg-grey-lightest" />
    <Container
      fluid
      className="pb-5"
      style={{
        position: "relative",
      }}
    >
      <div
        id="features"
        style={{
          position: "absolute",
          top: "-100px",
        }}
      ></div>
      <Container fluid="xl" className="pt-5 pb-5">
        <Row>
          <Col>
            <Hero>
              <HeroTitle>
                <span className="body-color">{title1}</span>{" "}
                <span className="site-red">{title2}</span>{" "}
                <span className="body-color">{title3}</span>
              </HeroTitle>
              <HeroHeading className="pt-3 pb-3 text-grey-dark">
                {heading}
              </HeroHeading>
              <HeroButtons className="pb-5">
                <a href="tel:0146286516" className="action-button-primary mr-2">
                  Contacter
                </a>{" "}
                <a className="action-button-secondary" href="https://www.google.fr/maps/place/Photo+Expression/@48.8462198,2.3773179,17z/data=!3m1!4b1!4m5!3m4!1s0x47e6720fcffb1acd:0x875bd3af8586dc20!8m2!3d48.8462163!4d2.3795119" color="secondary" size="md">
                  Voir La Carte
                </a>
              </HeroButtons>
            </Hero>
          </Col>
          <Col lg="7">
            <Features gridItems={intro.blurbs} />
          </Col>
        </Row>
      </Container>
    </Container>

    <Container
      fluid
      style={{
        marginBottom: 0,
        backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url(${reviewBG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
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
            fluid(maxWidth: 1024, maxHeight: 700, quality: 100) {
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
