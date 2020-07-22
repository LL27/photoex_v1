import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import PageIntro from "../components/PageIntro";
import { Container } from "theme-ui";

import Content, { HTMLContent } from "../components/Content";

export const BoutiquePageTemplate = ({
  title,
  image,
  description,
  content,
  contentComponent,
  intro
}) => {
  const PageContent = contentComponent || Content;
  return (
    <React.Fragment>

      <PageHeader image={image} title={title} description={description} />
       <Container variant="styles.container">
          <PageIntro intro={intro.blurbs}/>
          <PageContent className="content" content={content} />

       </Container>
    </React.Fragment>
  );
};

BoutiquePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const BoutiquePage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <BoutiquePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={post.frontmatter.image}
        description={post.frontmatter.description}
        intro={post.frontmatter.intro}

      />
    </Layout>
  );
};

BoutiquePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default BoutiquePage;

export const boutiquePageQuery = graphql`
  query BoutiquePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
        image {
          childImageSharp {
            fluid(maxWidth: 1024, maxHeight: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, maxHeight: 150, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            text
          }
        }
      }
    }
  }
`;
