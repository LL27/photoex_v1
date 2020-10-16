import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import AlternatingContainer from "../components/AlternatingContainer";
import { Container, Row, Col } from "reactstrap";

import { css } from "@emotion/core";
import styled from "@emotion/styled";


const Items = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (min-width: 40em) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media screen and (min-width: 60em) {
  }
`

const Item = styled.div`
  padding: 6px;
  border-radius: 2px;
  width: 95%;
  transition: all 0.3s ease 0s;

  @media screen and (min-width: 40em) {
    flex: 1 1 calc(50% - 1em);
  }
  @media screen and (min-width: 60em) {
  }
`;
const ItemImage = styled.div`
  height: auto;

`;
const ItemText = styled.div`
  margin: 1.5rem 0rem;
`;
const ItemHeader = styled.p`
  margin-bottom: .2rem;
  font-weight: 600;
  line-height: 1.2;
  @media (min-width: 670px) {
    font-size: 1.2rem;
  }
`;
const PageContent = ({ image, intro }) => (
  <Container>
    <Row>
      <Col sm="12" md={{ size: 10, offset: 1 }}>
            <PreviewCompatibleImage imageInfo={image} />

  <Items>
    {intro.map((item, index) => (

          <Item key={item.title}>
          <ItemImage>
          </ItemImage>

          <ItemText>
            <ItemHeader>{item.title}</ItemHeader>
            <p className="" style={{ fontSize: "14px" }}>
              {item.text}
            </p>
          </ItemText>
          </Item>
    ))}
  </Items>
  </Col>
    </Row>
    </Container>

);

PageContent.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  intro: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default PageContent;
