import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Row,
  Col,
  Container,
} from "reactstrap";

import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Image } from "theme-ui";

/** @jsx jsx */
import { jsx } from "theme-ui";
import logo from "../img/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faPhone,
  faMapMarker,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const SiteNavigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar>
        <NavbarBrand>
          <Link to="/">
            <Image src={logo} variant="logo" />
          </Link>
        </NavbarBrand>

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

      <Navbar color="light" light bgLight expand="sm" style={{ padding: "0" }}>
        <div></div>

        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar style={{ paddingLeft: "1rem" }}>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="text-warning">
                <Link to="/studio" className="text-warning">
                  Studio
                </Link>
              </DropdownToggle>
              <DropdownMenu left color="dark">
                <DropdownItem>
                  <Link to="/photoID" className="nav-link text-body">
                    Photo D'identité
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/portrait" className="nav-link text-body">
                    Portrait
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Link to="/labo" className="nav-link">
                Laboratoire
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/encadrement" className="nav-link">
                Encadrement
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/transfertvideo" className="nav-link">
                Transfert Vidéo
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/boutique" className="nav-link">
                En Boutique
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default SiteNavigation;
