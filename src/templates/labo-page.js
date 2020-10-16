import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import PageContent from "../components/PageContent";
import PageTransition from 'gatsby-v2-plugin-page-transitions'

import Content, { HTMLContent } from "../components/Content";

export const LaboPageTemplate = ({
  title,
  image,
  description,
  content,
  contentComponent,
  intro
}) => {
  const PageCMSContent = contentComponent || Content;
  return (
    <React.Fragment>
      <PageHeader title={title} description={description} />

     <PageContent image={image} intro={intro.blurbs}/>

      <PageCMSContent className="content" content={content} />



    </React.Fragment>
  );
};

LaboPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const LaboPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
              <PageTransition>
      <React.Fragment>
      <LaboPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={post.frontmatter.image}
        description={post.frontmatter.description}
        intro={post.frontmatter.intro}

      />
      </React.Fragment>
      </PageTransition>
    </Layout>
  );
};

LaboPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default LaboPage;

export const laboPageQuery = graphql`
  query LaboPage($id: String!) {
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
      }
    }
  }
`;
