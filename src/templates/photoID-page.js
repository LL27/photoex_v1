import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PhotoFormats from "../components/PhotoFormats";
import PageTransition from "gatsby-v2-plugin-page-transitions";
import PageContent from "../components/PageContent";


import Content, { HTMLContent } from "../components/Content";

export const PhotoIDPageTemplate = ({
  title,
  description,
  image,
  intro,
  main,
  content,
  contentComponent,
}) => {
    const PageCMSContent = contentComponent || Content;

  return (
    <React.Fragment>


          <PageContent title={title} description={description} image={image} intro={intro.blurbs}/>
          <PhotoFormats title={main.title}  subtitle={main.subtitle} formats={main.formats} />
      <PageCMSContent className="content" content={content} />

    </React.Fragment>
  );
};

PhotoIDPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    formats: PropTypes.array,
  }),
};

const PhotoIDPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <PageTransition>
        <React.Fragment>
          <PhotoIDPageTemplate
            contentComponent={HTMLContent}
            title={post.frontmatter.title}
            description={post.frontmatter.description}
            content={post.html}
            image={post.frontmatter.image}
            main={post.frontmatter.main}
            intro={post.frontmatter.intro}
          />
        </React.Fragment>
      </PageTransition>
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
            fluid(maxWidth: 1024, maxHeight: 600, quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fixed(width: 25, height: 25) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            title
            text
          }
        }
        main {
          title
          subtitle
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
