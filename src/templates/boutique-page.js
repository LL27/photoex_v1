import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import PageContent from "../components/PageContent";
import PageTransition from 'gatsby-v2-plugin-page-transitions'

import Content, { HTMLContent } from "../components/Content";

export const BoutiquePageTemplate = ({
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

      <PageHeader image={image} title={title} description={description} />
          <PageContent intro={intro.blurbs}/>
          <PageCMSContent className="content" content={content} />

    </React.Fragment>
  );
};

BoutiquePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const BoutiquePage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
              <PageTransition>
      <React.Fragment>
      <BoutiquePageTemplate
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

BoutiquePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default BoutiquePage;

export const boutiquePageQuery = graphql`
  query BoutiquePage($id: String!) {
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
                fluid(maxWidth: 240, maxHeight: 150, quality: 64) {
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
