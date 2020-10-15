import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";

import facepaint from "facepaint";
import { Container } from "reactstrap";

const breakpoints = [576, 768, 992, 1200];

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const TextOverlay = styled.div`
display:flex;
width: 100%;
height: 250px;
background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
position: absolute;
z-index: 1000;
justify-content: center;
align-items: center;
color: #FFFFFF;
@media (min-width: 768px) {


 }
`;

const PageHeader = ({ image, title, description, height }) => {
  let t = title || "";
  let d = description || "";

  return (
    <Container fluid style={{padding: 0, position: "reltive"}}>
       <TextOverlay>
              <h2
                css={mq({
                  "font-size": ["2.4em", "3em"],
                  width: "fit-content",
                  textTransform: "uppercase"
                })}
              >
                {t}
              </h2>

          </TextOverlay>
       <PreviewCompatibleImage
            imageInfo={image}
            imageStyle={{height: 250}}
          />

      </Container>
  );
};

PageHeader.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
};

export default PageHeader;
