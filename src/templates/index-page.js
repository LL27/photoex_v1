import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import Img from "gatsby-image";
import Layout from "../components/Layout";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";

export const IndexPageTemplate = ({
  title,
  description,
  image,
  intro,
  testimonials,
}) => (
  <React.Fragment>
    <section
    className="content pb-0 mb-0"
    style={{ borderBottom: "1.5rem solid hsl(0, 0%, 86%)" }}
  >
    <div className="columns is-gapless is-vcentered">
      <div className="column is-one-third">
        <div className="hero ml-2">
          <div className="hero-body content">

                 <div className="container">
                    <h1 className="is-capitalized is-size-3-tablet is-size-1-desktop is-size-1-widescreen">
              {title}
            </h1>
            <p
              className=""
              style={{
                color: "#555C5C",
              }}
            >
              {description}
            </p>

                        <a
                  href="tel:0146286516"
                  className="button btn is-small-tablet is-fullwidth"
                >
                  {" "}
                  NOUS CONTACTER
                </a>
                 </div>


           </div>
        </div>
      </div>

      <div className="column is-two-thirds">
        <PreviewCompatibleImage
            imageInfo={{
              image: image,
              alt: `Le Magasin Photo Expression`,
            }}
          />

      </div>
    </div>
  </section>


    <section
      className="section"
      style={{ backgroundColor: "rgb(74, 74, 74)", color: "hsl(0, 0%, 86%)" }}
    >
      <div className="cont;ainer">
        <div className="columns">
          <div className="column">
            <p
              className="title is-5-mobile is-5-desktop is-3-widescreen"
              style={{ color: "hsl(0, 0%, 86%)" }}
            >
              {intro.heading}
            </p>
            <Features gridItems={intro.blurbs} columnSize="is-4" />
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <Testimonials testimonials={testimonials} />
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
            fluid(maxWidth: 1024, quality: 100) {
              ...GatsbyImageSharpFluid
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
