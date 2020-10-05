import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import StyledLink from "../components/StyledLink";

import theme from "../theme.js";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import facepaint from "facepaint";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMap,
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "reactstrap";


const breakpoints = [576, 768, 992, 1200];
const imageStyle = { borderRadius: "10px", margin: '0 auto', height: 'calc(100vh - 128px)', paddingBottom: '64px',  boxShadow: '0px 2px 2px rgba(0,0,0,0.1)' };
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
const MapLink = styled.a `
    width: 150px;
    height: 80px;
    background: #EDEDE9;
    position: absolute;
    top: 80px;
    right: 0;
    border-radius: 10px 0 0 10px;
    background-size: cover;
    cursor: pointer;
}
`
const MapText = styled.p `
  position: absolute;
    top: 0;
    left: 0;
    width: 90px;
    height: 80px;
    font-size: 14px;
    color: #535353;
    margin: 0;
    line-height: 16px;
    text-align: center;
    padding: 25px 10px 0 10px;
    cursor: pointer;
    border-radius: 3px 0 0 3px;
    text-transform: uppercase;
`
const MapIcon = styled.span `
    width: 36px;
    height: 36px;
    position: absolute;
    top: 28px;
    left: 110px;
    cursor: pointer;
`
const spacer = styled.span `
    display: block;
    width: 10px;
    height: 80px;
    float: right;
    background-image: linear-gradient(to right,rgba(0,0,0,0),rgba(0,0,0,.1));
`

const animatedButton = styled.span `

`

const IndexPageHeader = ({ children, image }) => {
  return (
    <div>
    <Container style={{position: 'relative', padding: '0', height: 'calc(100vh - 64px)' }} fluid="xl">
        <PreviewCompatibleImage imageInfo={image} imageStyle={imageStyle} />

        <MapLink target="_blank">
          <MapText>Voir sur la carte</MapText>
          <MapIcon><FontAwesomeIcon icon={faMap} /></MapIcon>
        </MapLink>
        {children}
        <StyledLink/>
      </Container>
    </div>
  );
};

IndexPageHeader.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default IndexPageHeader;
