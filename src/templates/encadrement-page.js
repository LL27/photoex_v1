import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PageHeader from "../components/PageHeader";
import Content, { HTMLContent } from '../components/Content'


export const EncadrementPageTemplate = ({
  title,
  image,
  heading,
  description,
  content,
  contentComponent


   }) => {
  const PageContent = contentComponent || Content
  return (
    <div className="container">
      <PageHeader image={image} title={title} heading={heading} description={description}/>

      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
   </div>
  )
}

EncadrementPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,

}

const EncadrementPage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <EncadrementPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={post.frontmatter.image}
        heading={post.frontmatter.heading}
        description={post.frontmatter.description}
      />
    </Layout>
  )
}

EncadrementPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default EncadrementPage

export const encadrementPageQuery = graphql`
  query EncadrementPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
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
      }
    }
  }
`
