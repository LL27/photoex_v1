import React from "react";
import styled from "@emotion/styled"

const Text = styled.div`
       display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding: .5rem .5rem;
`


export default function CardText(props) {
  return (
    <Text>
      {props.children}
    </Text>
  )
}
