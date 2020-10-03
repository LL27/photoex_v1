import React from "react";
import { Helmet } from "react-helmet";
import SiteNavigation from "../Navbar";
import { Container, Row, Col } from 'reactstrap';
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

import useSiteMetadata from "../SiteMetadata";
import { withPrefix } from "gatsby";
import './index.scss'

const Wrapper = styled.div `
  background-color: #EDEDE9
`
const TemplateWrapper = ({ children }) => {
  const { title, description, keywords } = useSiteMetadata();
  return (
      <Wrapper>
      <Helmet>
        <html lang="fr" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>

<Container fluid="xl">
  <SiteNavigation />
                       {children}

</Container>




      </Wrapper>
  );
};

export default TemplateWrapper;
