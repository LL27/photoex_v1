import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PageContent from "../components/PageContent";
import PageTransition from 'gatsby-v2-plugin-page-transitions'

import Content, { HTMLContent } from "../components/Content";

export const TransfertVideoPageTemplate = ({
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
      <PageContent title={title} description={description} image={image} intro={intro.blurbs}/>
      <PageCMSContent className="content" content={content} />
    </React.Fragment>
  );
};

TransfertVideoPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const TransfertVideoPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
          <PageTransition>
      <React.Fragment>

      <TransfertVideoPageTemplate
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

TransfertVideoPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default TransfertVideoPage;

export const transfertVideoPageQuery = graphql`
  query TransfertVideoPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
        image {
          childImageSharp {
            fluid(maxWidth: 1024, maxHeight: 600, quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fixed(width: 25, height: 25) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            title
          }
        }
      }
    }
  }
`;
