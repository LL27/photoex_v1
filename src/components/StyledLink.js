import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import logo from "../img/logo.svg";

const linkStyle= {width: '150px',
    height: '80px',
    width: '80px',
    position: 'absolute',
    top: '50%',
    left: '25%',
    borderRadius: '50%',
    backgroundSize: 'cover',
    cursor: 'pointer'}

const PulsatingCircle = styled.div `
   position: absolute;
  left: 50%;
  top: 50%;
    border-radius: 50%;
    margin: 20px;
    height: 30px;
    width: 30px;
    transform: scale(2);
    background: rgba(40,167,69, 1);
    box-shadow: 0 0 0 0 rgba(40,167,69, 1);
    animation: pulse-yellow 2s infinite;

    @keyframes pulse-yellow {
    0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(40,167,69, 0.7);
    }

    70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(40,167,69, 0);
    }

    100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(40,167,69, 0);
    }
}

`

const StyledLink = class extends React.Component {

  render() {
    return (
      <Link to="/home" style={linkStyle}>
                  <PulsatingCircle></PulsatingCircle>

      </Link>
    );
  }
};

export default StyledLink;
