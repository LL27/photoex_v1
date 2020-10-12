import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import AlternatingContainer from "../components/AlternatingContainer";
import { Container } from "reactstrap";

import { css } from "@emotion/core";
import styled from "@emotion/styled";


const alternatingContainer = ["photoright", "photoleft"];
const ItemImage = styled.div`
  height: auto;
  width: 100%;
  @media (min-width: 670px) {
    width: 50%;
  }
`;
const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 1.5rem 2rem;

  width: 100%;
  height: 100%;

  @media (min-width: 670px) {
    flex-direction: column;
    width: calc(50% - 4rem);
    justify-content: flex-start;
  }
`;
const ItemHeader = styled.p`
  margin-bottom: .2rem;
  font-weight: 600;
  line-height: 1.2;
  align-self: flex-start;
  @media (min-width: 670px) {
    font-size: 2rem;
  }
`;
const PageContent = ({ intro }) => (
  <div>
    {intro.map((item, index) => (
      <section key={item.title}>
        <AlternatingContainer
          direction={alternatingContainer[index % alternatingContainer.length]}
        >
          <ItemImage>
            <PreviewCompatibleImage imageInfo={item} />
          </ItemImage>

          <ItemText>
            <ItemHeader>{item.title}</ItemHeader>
            <p className="" style={{ fontSize: "14px" }}>
              {item.text}
            </p>
          </ItemText>
        </AlternatingContainer>
      </section>
    ))}
  </div>
);

PageContent.propTypes = {
  intro: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default PageContent;
