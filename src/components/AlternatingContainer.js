import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"


const ContainerImageLeft = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`
const ContainerImageRight = styled(ContainerImageLeft)`

  flex-direction: row;

`


const AlternatingContainer = (props) => {
 const direction = props.direction;

 if (direction === "photoright") {
  return <ContainerImageRight >{props.children}</ContainerImageRight>;
 } else if (direction === "photoleft") {
 return <ContainerImageLeft>{props.children}</ContainerImageLeft>
} else {
   return <ContainerImageLeft>{props.children}</ContainerImageLeft>
}
}
export default AlternatingContainer;
