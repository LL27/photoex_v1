import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'


export const IndexPageTemplate = ({
  title,
  description,
  image,
  intro,
  testimonials,
}) => (
  <div className="content">
   <div className="container">
    <div className="columns" style={{marginTop: '0.25rem'}}>
      <div className="column is-one-third">
        <h1
        className="has-text-weight-bold is-size-1 is-size-3-mobile"
        style={{
          boxShadow: '0.5rem 0 0 grey, -0.5rem 0 0 grey',
          backgroundColor: 'grey',
          color: 'white',
          padding: '1rem',
          marginBottom: '0rem',
        }}
        >
          {title}
        </h1>
        <p style={{
          boxShadow: '0.5rem 0 0 grey, -0.5rem 0 0 grey',
          backgroundColor: 'grey',
          marginTop: '.75rem',
          color: 'white',
          padding: '1rem',
        }}>{description}</p>
      </div>
      <div className="column" >
            <div
              style={{
                backgroundImage: `url(${
                  !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                })`, height: 480, backgroundSize: "cover", backgroundPosition: "center center"
      }}
    >

    </div>
      </div>
    </div>
</div>

    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-12">
              <Features gridItems={intro.blurbs} />

              <Testimonials testimonials={testimonials} />



            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

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
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
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
            text
          }
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`

