import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { Container, Row, Col } from "reactstrap";

import Layout from "../components/Layout";
import IndexPageHeader from "../components/IndexPageHeader";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import PageTransition from "gatsby-v2-plugin-page-transitions";
import styled from "@emotion/styled";
import reviewBG from "../img/review-bg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faClock,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";

const Hero = styled.div`
  margin-bottom: 24px;
  color: #fff;
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
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 25px;
  @media (min-width: 768px) {

  font-size: 2.4em;

  }

`
const HeroHeading = styled.p`
  font-weight: 600;
  font-size: 1em;
  margin-bottom: 25px;
  @media (min-width: 768px) {


  }

`

const HeroText = styled.p`
  @media (min-width: 768px) {


  }

`
const TestimonialsContainer = styled.div`
  padding-top: 10%;
  padding-bottom: 10%;
`

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
    <Container fluid>

      <Row style={{ backgroundColor: "#1d2528", backgroundImage: "linear-gradient(15deg,#232526 0%,#414345 74%)", paddingTop: "10%", paddingBottom: "10%" }}>
        <Col>
       <Container>

          <Hero>
            <HeroTitle

            >
              <span style={{ color: "#fffff0" }}>{title1}</span>{" "}
              <span style={{ color: "hsl(3, 83%, 63%)" }}>{title2}</span>{" "}
              <span style={{ color: "#fffff0" }}>{title3}</span>
            </HeroTitle>
            <HeroHeading>{heading}</HeroHeading>
            <HeroText>{description}</HeroText>


          </Hero>
              </Container>

        </Col>

        <Col md={{ size: 7}}>
                             <Container>

          <Features gridItems={intro.blurbs} />
                             </Container>

        </Col>

      </Row>
      <TestimonialsContainer>

              <Testimonials testimonials={testimonials} />


      </TestimonialsContainer>
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
