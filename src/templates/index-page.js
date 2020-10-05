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

const IntroText = styled.div`
  padding: 34px;
  padding-top: 16px;
  margin-bottom: 24px;
  color: #66666;
`;
const TestimonialsContainer = styled.div`

`

export const IndexPageTemplate = ({
  title1,
  title2,
  title3,
  description,
  image,
  testimonials,
  intro,
}) => (
  <React.Fragment>
    <IndexPageHeader image={image} description={description} />
    <Container fluid>
      <Row style={{ backgroundColor: "#F8F8F8", paddingTop: "30px" }}>
        <Col sm="12" md="4">
          <IntroText>
            <h1
              style={{ maxWidth: "350px", fontWeight: 600, fontSize: "2.4rem" }}
            >
              <span style={{ color: "#66666" }}>{title1}</span>{" "}
              <span style={{ color: "hsl(3, 83%, 63%)" }}>{title2}</span>{" "}
              <span style={{ color: "#66666" }}>{title3}</span>
            </h1>
            <p>{description}</p>
                          <FontAwesomeIcon icon={faMapMarker} size="lg" />

              <FontAwesomeIcon icon={faClock} size="lg"/>

              <FontAwesomeIcon icon={faPhone} size="lg"/>

          </IntroText>
        </Col>
        <Col sm="12" md="8">
          <Features gridItems={intro.blurbs} />
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
