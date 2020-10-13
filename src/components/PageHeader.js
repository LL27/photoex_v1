import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";

import facepaint from "facepaint";
import { Container, Jumbotron } from "reactstrap";

const breakpoints = [576, 768, 992, 1200];

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const PageHeader = ({ children, image, title, description, height }) => {
  let t = title || "";
  let d = description || "";

  return (
    <Jumbotron>
      <h2
        css={mq({
          "font-size": ["2em", "2.2em", "2.4em"],
          "text-align": ["center"],
          width: "fit-content",
          "margin": "0 auto",
          "padding-bottom": [".5em"],
          "border-bottom": "3px solid #4c4c4a"
        })}
      >
        {t}
      </h2>
      <p css={mq({
          "font-size": ["1em", "1.2em"],
          "text-align": ["center"],
          width: "fit-content",
          "margin": "0 auto",
          "padding-top": ["1em"],
          "max-width": "600px"

        })}>{d}</p>
      {children}
    </Jumbotron>
  );
};

PageHeader.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
};

export default PageHeader;
