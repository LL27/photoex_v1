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
flex-direction: column;
z-index: 1000;
text-align: center;
justify-content: flex-end;
align-items: center;
@media (min-width: 768px) {


 }
`;

const PageHeader = ({ title, description, height }) => {
  let t = title || "";
  let d = description || "";

  return (
    <Container>
       <TextOverlay>
                                   <hr/>

              <h2
                css={mq({
                  "font-size": ["2.4em", "3em"],
                  textTransform: "uppercase",
                })}
              >
                {t}
              </h2>
              <p style={{maxWidth: 600}}>{d}</p>
                            <hr/>

          </TextOverlay>
</Container>

  );
};

PageHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default PageHeader;
