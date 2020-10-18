import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import AlternatingContainer from "../components/AlternatingContainer";
import { Container, Row, Col } from "reactstrap";
import PageHeader from "../components/PageHeader";
import Img from "gatsby-image";
import check from "../img/check-circle-regular.svg";

import { css } from "@emotion/core";
import styled from "@emotion/styled";

const Items = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 1em;
  @media screen and (min-width: 40em) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
 @media (min-width: 992px) {
    margin-top: 0;
  }

`;

const Item = styled.div`
  padding: 6px;
  border-radius: 2px;
  width: 95%;
  transition: all 0.3s ease 0s;
  display: flex;

  @media screen and (min-width: 40em) {
    flex: 1 1 calc(50% - 1em);
  }
  @media screen and (min-width: 60em) {
  }
`;
const ItemImage = styled.div`
  margin-right: .5rem;
      margin-bottom: 0.2rem;


`;
const ItemText = styled.div`
    margin-bottom: 0.2rem;

`;
const ItemHeader = styled.p`
  margin-bottom: 0.2rem;
  font-weight: 600;
  line-height: 1.2;
  @media (min-width: 670px) {
  }
`;
const PageContent = ({ image, title, description, intro }) => (
  <Container className="pb-2 pt-2">
    <PageHeader title={title} description={description} />
    <Row>
      <Col sm="12" lg={{ size: 6 }}>
        <PreviewCompatibleImage imageInfo={image} />
      </Col>
      <Col sm="12" lg={{ size: 6 }}>
        <Items>
          {intro.map((item, index) => (
            <Item key={item.title}>
              <ItemImage>
                <img src={check} alt="checkmark" style={{height: "1.4em", color: "#76b2c6"}}/>
              </ItemImage>

              <ItemText>
                <ItemHeader>
                  {item.title}
                </ItemHeader>
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
  title: PropTypes.string,
  description: PropTypes.string,
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
