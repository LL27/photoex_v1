import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PageHeader from "../components/PageHeader";
import Content, { HTMLContent } from '../components/Content'


export const EncadrementPageTemplate = ({
  title,
  image,
  description,
  content,
  contentComponent


   }) => {
  const PageContent = contentComponent || Content
  return (
     <React.Fragment>
      <PageHeader image={image} title={title} description={description}/>

      <section className="section section--gradient" style={{paddingTop: 0}}>
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
   </React.Fragment>
  )
}

EncadrementPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
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
