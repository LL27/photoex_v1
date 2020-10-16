import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { Container } from "reactstrap";

/** @jsx jsx */
import { jsx } from "@emotion/core";
import facepaint from "facepaint";
import styled from "@emotion/styled";

const breakpoints = [576, 768, 992, 1200];

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media screen and (min-width: 992px) {
    flex: 0 1 calc(33.3333% - 1em);
  }
`;

const Card = styled.div`
  padding: 6px;
  border-radius: 2px;
  width: 95%;
  height: 100%;
  transition: all 0.3s ease 0s;
   
:&hover {

}

  @media screen and (min-width: 576px) {
    flex: 1 1 calc(50% - 1em);
  }
  @media screen and (min-width: 992px) {
    flex: 1 1 calc(33.3333% - 1em);
  }
`;

const StyledLink = styled((props) => <Link {...props} />)`
  display: block;
  background: rgb(250, 250, 250);
  margin-bottom: 0px;
  transition: all 0.3s ease 0s;
  border-radius: 3px;
  height: 100%;
  padding: .8em;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  &:hover {
    text-decoration: none;
    color: #e86f58;
     box-shadow:
0 8px 16px 0 rgba(0,0,0,0.2);
  }
  @media screen and (min-width: 768px) {
    padding: .5em;

  }
`;

const CardText = styled.div`
  padding-top: .8em;
  border-radius: 0 1px 1px;
    text-align: center;
    @media screen and (min-width: 768px) {
    padding-top: .5em;

  }

`;
const CardTitle = styled.span`
  font-size: 1em;
  font-weight: 400;
  border-radius: 0 3px 3px;
    text-align: center;
    @media screen and (min-width: 768px) {

  }

`;
const CardImage = styled.div``;
const Divider = styled.hr`
  border-top: 2px solid;
`;
const FeatureGrid = ({ gridItems }) => (
  <Grid>
    {gridItems.map((item) => (
      <Card>
        <StyledLink to={item.path} key={item.title}  className="body-bg body-color title-font">
          <CardImage>
            <PreviewCompatibleImage
              imageInfo={item}
              imageStyle={{
                display: "block",
                border: 0,
                width: "100%",
                height: "auto",
                "border-radius": "3px"
                              }}
            />
          </CardImage>
          <CardText>
            <CardTitle>{item.title}</CardTitle>
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
