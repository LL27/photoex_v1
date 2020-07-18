import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Content, { HTMLContent } from "../components/Content";

export const LaboPageTemplate = ({
  title,
  image,
  description,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <React.Fragment>
      <PageHeader image={image} title={title} description={description} />

      <section className="section section--gradient">
        <div className="columns">
          <div className="column is-12 is-10-desktop is-offset-1-desktop">
            <div className="columns">
              <div className="column is-12">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
              </div>
            </div>
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
      />
    </Layout>
  );
};

LaboPage.propTypes = {
  data: PropTypes.object.isRequired,
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
            fluid(maxWidth: 1024, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
