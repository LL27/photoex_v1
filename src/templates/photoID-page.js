import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import PhotoFormats from "../components/PhotoFormats";
import PageTransition from "gatsby-v2-plugin-page-transitions";
import PageContent from "../components/PageContent";

import { Container, Row, Col } from "reactstrap";

import Content, { HTMLContent } from "../components/Content";

export const PhotoIDPageTemplate = ({
  title,
  description,
  image,
  intro,
  main,
  content,
  contentComponent,
}) => {
    const PageCMSContent = contentComponent || Content;

  return (
    <React.Fragment>
      <PageHeader title={title} description={description} />
      <Container>
        <PhotoFormats heading={main.heading} formats={main.formats} />
        <Row>
          <Col>
          <PageContent image={image} intro={intro.blurbs}/>
      <PageCMSContent className="content" content={content} />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

PhotoIDPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    formats: PropTypes.array,
  }),
};

const PhotoIDPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <PageTransition>
        <React.Fragment>
          <PhotoIDPageTemplate
            contentComponent={HTMLContent}
            title={post.frontmatter.title}
            description={post.frontmatter.description}
            content={post.html}
            image={post.frontmatter.image}
            main={post.frontmatter.main}
            intro={post.frontmatter.intro}
          />
        </React.Fragment>
      </PageTransition>
    </Layout>
  );
};

PhotoIDPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PhotoIDPage;

export const photoIDPageQuery = graphql`
  query PhotoIDPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
        image {
          childImageSharp {
            fluid(maxWidth: 1024, maxHeight: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        intro {
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
          }
        }
        main {
          heading
          formats {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            heading
            text
          }
        }
      }
    }
  }
`;
