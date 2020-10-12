import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import AlternatingContainer from "../components/AlternatingContainer";
import { Container } from "reactstrap";

import { css } from "@emotion/core";
import styled from "@emotion/styled";

const alternatingContainer = ["photoright", "photoleft"]


const ItemImage = styled.div`
  height: auto;
  width: 100%;
  @media (min-width: 500px) {
     width: calc(50% - 2rem);

  }
`
const ItemText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
    margin: 2rem;

  width: 100%;
  height: 100%;

  @media (min-width: 500px) {
         flex-direction: column;
         width: calc(50% - 2rem);
          justify-content: flex-start;



  }
`
const ItemHeader = styled.h3`
  margin-bottom: 1rem;
  align-self: flex-start;
  @media (min-width: 500px) {
  }
`
const PageContent = ({ intro }) => (
  <div>
    {intro.map((item, index) => (
      <section
  key={item.title}
      >
      <AlternatingContainer
              direction={
                alternatingContainer[index % alternatingContainer.length]
              }

      >

        <ItemImage>
            <PreviewCompatibleImage imageInfo={item} />
        </ItemImage>

        <ItemText>
          <ItemHeader>
                          {item.title}


          </ItemHeader>
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
