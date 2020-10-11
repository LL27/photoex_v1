import React, { useState } from "react";
import theme from "../theme.js";
import styled from '@emotion/styled'

import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Row,
  Col,
  Container,
  Tooltip
} from "reactstrap";

import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faPhone,
  faMapMarker,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const StoreInfo = (props) => {

  return (
      <Navbar>
        <NavbarText>
          <Row>
            <Col>
              <div
                className="d-flex"
                style={{ fontSize: "12px", lineHeight: "1.4" }}
              >
                <span className="icon">
                  <FontAwesomeIcon icon={faPhone} />
                </span>

                <a href="tel:0146286516" className="text-body" style={{ fontSize: "12px", marginLeft: "8px" }}>
                  Nous contacter
                  <br /> 01 46 28 65 16
                </a>
              </div>
            </Col>

            <Col>
              <div
                className="d-flex"
                style={{ fontSize: "12px", lineHeight: "1.4" }}
              >
                <span className="icon">
                  <FontAwesomeIcon icon={faClock} />
                </span>
                <span style={{ fontSize: "12px", marginLeft: "8px" }}>
                  Mar-Sam <br />
                  9h15-13h; 14h-19h 
                </span>
              </div>
            </Col>
            <Col>

                <AnchorLink className="d-flex text-body" to="/#footer" title="Adresse" style={{fontSize: "12px"}}>
                  <span className="icon" style={{fontSize: "12px"}}>
                    <FontAwesomeIcon icon={faMapMarker} />
                  </span>
                  <span style={{ fontSize: "12px", marginLeft: "8px"}}>
                    2 rue Beccaria <br />
                    75012 Paris
                  </span>
                </AnchorLink>
            </Col>
          </Row>
        </NavbarText>
      </Navbar>
      );
     };
export default StoreInfo;
