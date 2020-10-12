import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"


const ContainerImageLeft = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #fffff9;
  color: rgb(239, 90, 82);
  width: 100%;

`
const ContainerImageRight = styled(ContainerImageLeft)`

  flex-direction: row;

    background-color: rgb(239, 90, 82);
  color: #fffff9;


`


const AlternatingContainer = (props) => {
 const {direction, bgcolor, children} = props;

 if (direction === "photoright") {
  return <ContainerImageRight>{children}</ContainerImageRight>;
 } else if (direction === "photoleft") {
 return <ContainerImageLeft>{children}</ContainerImageLeft>
} else {
   return <ContainerImageLeft>{children}</ContainerImageLeft>
}
}
export default AlternatingContainer;
