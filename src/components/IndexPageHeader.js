import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import theme from "../theme.js";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import facepaint from "facepaint";
import styled from "@emotion/styled";
import { Container } from "reactstrap";

const breakpoints = [576, 768, 992, 1200];
const imageStyle = { borderRadius: "10px", margin: '0 auto', height: 'calc(100vh - 128px)', paddingBottom: '64px' };
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));


const IndexPageHeader = ({ children, image, title, description, height }) => {
  return (
    <div>
    <Container style={{padding: '0' }} fluid="xl">
        <PreviewCompatibleImage imageInfo={image} imageStyle={imageStyle} />

        {children}
      </Container>
    </div>
  );
};

IndexPageHeader.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
};

export default IndexPageHeader;
