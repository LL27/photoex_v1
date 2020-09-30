import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import Img from "gatsby-image";
import { Container, Row, Col } from 'reactstrap';

import IndexLayout from "../components/IndexLayout";
import IndexPageHeader from "../components/IndexPageHeader";

export const IndexPageTemplate = ({
  title,
  description,
  image
}) => (
  <React.Fragment>
    <IndexPageHeader image={image} title={title} description={description}>
      {" "}
      <a
        href="tel:0146286516"
        className="button btn is-small is-fullwidth"
        style={{ marginTop: "1.5rem" }}
      >
        {" "}
        NOUS CONTACTER
      </a>
    </IndexPageHeader>
  </React.Fragment>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,

};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <IndexLayout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        description={frontmatter.description}
      />
    </IndexLayout>
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
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1024, maxHeight: 600, quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize

            }
          }
        }
        description
      }
    }
  }
`;
