import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
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
    <section className="content">
      <div className="columns is-vcentered">
        <div className="column is-multiline is-one-third">
          <div className="hero">
            <div className="hero-body">
              <h1 className="is-size-4-tablet is-size-1-desktop is-size-1-widescreen">{title}</h1>
              <p
          className=""
          style={{
            color: "#555C5C",
          }}
        >
          {description}
        </p>
              <button class="button is-small btn">
                NOUS CONTACTER
              </button>
            </div>
          </div>
        </div>

        <div className="column is-two-thirds">
          <Img
            fluid={
              !!image.childImageSharp ? image.childImageSharp.fluid : image
            }
          />
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">



              <Features gridItems={intro.blurbs} />



        </div>

    </section>
     <section className="section section--gradient has-background-grey-darker">
      <div className="container">
        <div className="section">
          <div className="columns is-mobile">


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
