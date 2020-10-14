import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";

import facepaint from "facepaint";
import { Container, Col, Row, Jumbotron } from "reactstrap";

const breakpoints = [576, 768, 992, 1200];

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const Jumbo = styled.div`
background-color: #b2b2ae;
`;
const TextOverlay = styled.div`
height: 100%;
display: flex;
text-align:center;
flex-direction: column;
justify-content: center;
padding-left: 25px;
padding-top: 25px;
padding-bottom: 25px;
align-items: center;

color: rgb(250, 250, 250);
@media (min-width: 768px) {
  text-align: left;
  align-items: flex-start;


 }
`;

const PageHeader = ({ children, image, title, description, height }) => {
  let t = title || "";
  let d = description || "";

  return (
    <Jumbo>
      <Row>
        <Col md="4">
          <TextOverlay>
              <h2
                css={mq({
                  "font-size": ["2em", "2.2em", "2.4em"],
                  width: "fit-content",
                  "padding-bottom": [".5em"],
                  "text-align": ["left", "center"],
                  "border-bottom": "3px solid #4c4c4a",
                })}
              >
                {t}
              </h2>
              <p
                css={mq({
                  "font-size": ["1em"],
                  width: "fit-content",
                  "padding-top": [".5em"],
                  "max-width": "600px",
                })}
              >
                {d}
              </p>
          </TextOverlay>
        </Col>

        <Col md="8">
          <PreviewCompatibleImage
            imageInfo={image}
          />
        </Col>
      </Row>
      {children}
    </Jumbo>
  );
};

PageHeader.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
};

export default PageHeader;
