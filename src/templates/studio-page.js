import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Features from "../components/Features";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";


export const StudioPageTemplate = ({
  title,
  image,
  heading,
  description,
  studioIntro,
}) => (
  <div className="container">
    <PageHeader image={image} title={title} heading={heading} description={description}/>

    <section className="section">
      <div className="columns">
        <div className="column is-one-third">
          <div className="container">
            <div className="content">
              <h2>{heading}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="columns">
            <Features gridItems={studioIntro.blurbs} columnSize="is-half" />

          </div>
        </div>

        </div>

    </section>
  </div>
);

StudioPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  studioIntro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const StudioPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <StudioPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        studioIntro={frontmatter.studioIntro}
      />
    </Layout>
  );
};

StudioPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default StudioPage;

export const StudioPageQuery = graphql`
  query StudioPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        heading
        image {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        studioIntro {
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
      }
    }
  }
`;
