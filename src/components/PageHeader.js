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

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const PageHeader = ({ children, image, title, description, height }) => {
 let t = title || '';
 let d = description || '';

  return (
    <div>

    <div
      css={mq({
        display: ["grid"],
        gridGap: ["4px"],
        gridTemplateColumns: ["1fr", "1fr", "1fr", "1fr 3fr"],
        height: ['auto', 'auto', 'auto', 'auto'],
        backgroundColor: ['#d7d7d7'],
        backgroundImage: ['linear-gradient(15deg, #232526 0%, #414345 74%)'],
        marginBottom: ['32px'],
      })}
    >



       <div css={mq({
        display: ["flex"],
        flexDirection: ["column"],
        justifyContent: ['center', 'center', 'center', 'flex-start'],
        width: ['100%'],
        padding: ['16px 0', '16px 0', '16px 0', '32px 0'],
        textAlign: ['center', 'center', 'center', 'left'],
        order: ['2', '2', '2', '1'],
      })}>
          <Container>
            <h2
              css={mq({
                "font-size": ["24px", "32px", "32px", "48px"],
                "color": ["hsl(0, 0%, 96%)"],
              })}
            >
              {t}
            </h2>
            <p style={{color: 'hsl(0, 0%, 79%'}}>
              {d}
            </p>

            {children}
          </Container>
        </div>
        <div  css={mq({
               order: ['1', '1', '1', '1'],
              })}>
                  <PreviewCompatibleImage imageInfo={image} />

        </div>
    </div>
        </div>

  );
};

PageHeader.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
};

export default PageHeader;
