import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import Img from "gatsby-image";
import Layout from "../components/Layout";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import PageHeader from "../components/PageHeader";

export const IndexPageTemplate = ({
  title,
  description,
  image,
  intro,
  testimonials,
}) => (
  <React.Fragment>
    <PageHeader
      image={image}
      title={title}
      description={description}
      maxHeight={"480px"}
    >
      {" "}
      <a
        href="tel:0146286516"
        className="button btn is-small is-fullwidth"
        style={{ marginTop: "1.5rem" }}
      >
        {" "}
        NOUS CONTACTER
      </a>
    </PageHeader>

    <section
      className="section section--gradient"
      style={{
        backgroundColor: "rgb(74, 74, 74)",
        color: "hsl(0, 0%, 86%)",
        background: "linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)",
        backgroundBlendMode: "multiply"
      }}
    >
      <div className="columns">
        <div className="column is-12 is-10-desktop is-offset-1-desktop">
          <div className="content">
            <div className="columns">
              <div className="column is-12">
                <h3
                  className="title is-5-mobile is-5-desktop is-3-widescreen"
                  style={{ color: "hsl(0, 0%, 86%)" }}
                >
                  {intro.heading}
                </h3>
              </div>
            </div>

            <Features gridItems={intro.blurbs} columnSize="is-4" />
          </div>
        </div>
      </div>
    </section>
    <section
      className="section section--gradient section-is-medium"
      style={{ borderBottom: "1.5rem solid hsl(0, 0%, 86%)" }}
    >
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <Testimonials testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    heading: PropTypes.string,
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        description={frontmatter.description}
        intro={frontmatter.intro}
        testimonials={frontmatter.testimonials}
      />
    </Layout>
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
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 900, quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
        description
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
