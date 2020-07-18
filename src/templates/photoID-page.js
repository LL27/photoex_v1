import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import PhotoFormats from "../components/PhotoFormats";

import Content, { HTMLContent } from "../components/Content";

export const PhotoIDPageTemplate = ({
  title,
  image,
  description,
  main,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <React.Fragment>
      <PageHeader image={image} title={title} description={description} />
      <PhotoFormats
        heading={main.heading}
        description={main.description}
        formats={main.formats}
      />

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

PhotoIDPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    formats: PropTypes.array,
  }),
};

const PhotoIDPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <PhotoIDPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={post.frontmatter.image}
        description={post.frontmatter.description}
        main={post.frontmatter.main}
      />
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
            fluid(maxWidth: 1024, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        main {
          heading
          description
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
