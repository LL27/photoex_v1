import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import scrollTo from "gatsby-plugin-smoothscroll";
import styled from '@emotion/styled'
/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/core";
import facepaint from "facepaint";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { Container } from "reactstrap";
import downArrow from "../img/down-arrow.svg";

const breakpoints = [576, 768, 992, 1200];
const imageStyle = {
  borderRadius: "10px",
  margin: "0 auto",
  height: "calc(100vh - 128px)",
  paddingBottom: "64px",
  boxShadow: "0px 2px 2px rgba(0,0,0,0.1)",
};
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const HeaderContainer = styled.div`
  position: relative;
  padding: 0;
  width: 100%;
  height: calc(100vh - 64px);

`;

const MapLink = styled.a`
    width: 150px;
    height: 80px;
    background: rgb(250, 250, 250);
    color: #7f7f7c;
    position: absolute;
    top: 80px;
    right: 0;
    border-radius: 10px 0 0 10px;
    background-size: cover;
    cursor: pointer;
    &:hover {
      color: #e86f58;
    }
}
`;
const MapText = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  width: 90px;
  height: 80px;
  font-size: 14px;
  margin: 0;
  line-height: 16px;
  text-align: center;
  padding: 25px 10px 0 10px;
  cursor: pointer;
  border-radius: 3px 0 0 3px;
  text-transform: uppercase;
  &:hover {
    color: #e86f58;
  }
`;
const MapIcon = styled.span`
  width: 36px;
  height: 36px;
  position: absolute;
  top: 28px;
  left: 110px;
  cursor: pointer;
  &:hover {
    color: #e86f58;
  }
`;

const bounce = keyframes`
  0%   { transform: translateY(0); }
        50%  { transform: translateY(-5px); }
        100% { transform: translateY(0); }
`;

const IndexPageHeader = ({ image }) => {
  return (
    <div>
      <HeaderContainer>
        <PreviewCompatibleImage imageInfo={image} imageStyle={imageStyle} />

        <MapLink
          href="https://www.google.fr/maps/place/Photo+Expression/@48.8462198,2.3773179,17z/data=!3m1!4b1!4m5!3m4!1s0x47e6720fcffb1acd:0x875bd3af8586dc20!8m2!3d48.8462163!4d2.3795119"
          target="_blank"
        >
          <MapText>Voir sur la carte</MapText>
          <MapIcon>
            <FontAwesomeIcon icon={faMap} />
          </MapIcon>
        </MapLink>
        <div
          onClick={() => scrollTo("#features")}
          css={css`
            animation: ${bounce} 3s infinite;
            position: relative;
  bottom: 10%;
  left: 50%;
  margin-left:-20px;
  width: 46px;
  height: 46px;
  border-radius: 50px;
   background-image: url(${downArrow});
  background-size: contain;
          `}
        >

        </div>
      </HeaderContainer>
    </div>
  );
};

IndexPageHeader.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default IndexPageHeader;
