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
const imageStyle = { borderRadius: "10px" };
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));


const IndexPageHeader = ({ children, image, title, description, height }) => {
  return (
    <div>
    <Container  style={{ height: 'calc(100vh - 64px)', display: 'flex', 'flex-direction': 'column'}}>
        <PreviewCompatibleImage imageInfo={image} imageStyle={imageStyle} />
        <h2
          css={mq({
            "font-size": ["24px", "32px", "32px", "48px"],
            color: ["hsl(0, 0%, 96%)"],
          })}
        >
          {title}
        </h2>
        <p style={{ color: "hsl(0, 0%, 79%" }}>{description}</p>

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
