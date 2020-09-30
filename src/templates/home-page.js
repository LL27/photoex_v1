import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import Img from "gatsby-image";
import { Container, Row, Col } from 'reactstrap';

import Layout from "../components/Layout";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import PageHeader from "../components/PageHeader";

export const HomePageTemplate = ({
  image,
  intro,
  testimonials,
}) => (
  <React.Fragment>
  <PageHeader image={image}/>
    <Container>
 <h3>{intro.heading}</h3>
      <Features gridItems={intro.blurbs} />
      <Testimonials testimonials={testimonials} />



    </Container>
  </React.Fragment>
);

HomePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  intro: PropTypes.shape({
    heading: PropTypes.string,
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,
};

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <HomePageTemplate
        image={frontmatter.image}
        intro={frontmatter.intro}
        testimonials={frontmatter.testimonials}
      />
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default HomePage;

export const pageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 1024, maxHeight: 600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
