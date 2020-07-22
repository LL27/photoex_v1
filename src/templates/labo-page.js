import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import PageIntro from "../components/PageIntro";
import { Container } from "theme-ui";

import Content, { HTMLContent } from "../components/Content";

export const LaboPageTemplate = ({
  title,
  image,
  description,
  content,
  contentComponent,
  intro
}) => {
  const PageContent = contentComponent || Content;
  return (
    <React.Fragment>
      <PageHeader image={image} title={title} description={description} />

     <PageIntro intro={intro.blurbs}/>

      <section className="section section--gradient">
        <div className="columns">
          <div className="column is-12 is-10-desktop is-offset-1-desktop">
      <PageContent className="content" content={content} />

          </div>
        </div>
      </section>
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
      <LaboPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={post.frontmatter.image}
        description={post.frontmatter.description}
        intro={post.frontmatter.intro}

      />
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
