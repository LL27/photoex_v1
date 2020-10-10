import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import theme from "../theme.js";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import facepaint from "facepaint";
import styled from "@emotion/styled";

import { Container, Row, Col } from "reactstrap";
const breakpoints = [576, 768, 992, 1200];

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (min-width: 40em) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media screen and (min-width: 60em) {
    flex: 0 1 calc(33.3333% - 1em);
  }
`;

const Card = styled.div`
  padding: 6px;
  border-radius: 2px;
  width: 95%;
  transition: all 0.3s ease 0s;

  @media screen and (min-width: 40em) {
    flex: 1 1 calc(50% - 1em);
  }
  @media screen and (min-width: 60em) {
    flex: 1 1 calc(33.3333% - 1em);
  }
`;

const StyledLink = styled((props) => <Link {...props} />)`
  display: block;
  background: #ffffff;
  margin-bottom: 0px;
  transition: all 0.3s ease 0s;
  border-radius: 3px;
  height: 100%;

  &:hover {
    text-decoration: none;
    color: rgb(239, 90, 82);
  }
`;

const CardText = styled.div`
  padding: 18px 14px 0;
  font-size: 12px;
  border-radius: 0 3px 3px;
`;

const CardImage = styled.div``;
const Divider = styled.hr`
  border-top: 2px solid #e5e5e0;
`;
const FeatureGrid = ({ gridItems }) => (
  <Grid>
    {gridItems.map((item) => (
      <Card>
        <StyledLink to={item.path} key={item.title}>
          <CardImage>
            <PreviewCompatibleImage
              imageInfo={item}
              imageStyle={{
                display: "block",
                border: 0,
                width: "100%",
                height: "auto",
                "border-radius": "3px 3px 0 0",
              }}
            />
          </CardImage>
          <CardText>
            <h6>{item.title}</h6>
            <Divider />
            <p>{item.text}</p>
          </CardText>
        </StyledLink>
      </Card>
    ))}
  </Grid>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      path: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
