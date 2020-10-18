import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Tooltip,
  Container,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faClock,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";

import { Link } from "gatsby";
import logo from "../img/logo.svg";

const SiteNavigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const [popoverMapOpen, setPopoverMapOpen] = useState(false);
  const [popoverClockOpen, setPopoverClockOpen] = useState(false);

  const [popoverPhoneOpen, setPopoverPhoneOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  const toggleMap = () => setPopoverMapOpen(!popoverMapOpen);

  const toggleClock = () => setPopoverClockOpen(!popoverClockOpen);

  const togglePhone = () => setPopoverPhoneOpen(!popoverPhoneOpen);

  const tooltipColor = "#b2b2ae";
  const activeStyleColor = { color: "#E35E53" };

  const tooltipLink = styled.a`
    color: #E35E53;
    text-decoration: underline;
  `;

  return (
    <div>
      <Navbar
        expand="lg"
        light
        fixed="top"
        style={{ backgroundColor: "#fff", borderBottom: "1px solid #e5e5e0" }}
      >
        <Link to="/" className="navbar-brand">
          <img src={logo} className="navbar-logo" />
        </Link>
        <NavbarToggler onClick={toggleNav} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link
                to="/photoID"
                className="navbar-link"
                activeStyle={activeStyleColor}
              >
                                    Photo D'identité

              </Link>
            </NavItem>

            <NavItem>
              <Link
                to="/portrait"
                className="navbar-link"
                activeStyle={activeStyleColor}
              >
                Portrait
              </Link>
            </NavItem>
                    <NavItem>
              <Link
                to="/labo"
                className="navbar-link"
                activeStyle={activeStyleColor}
              >
                Laboratoire
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/encadrement"
                className="navbar-link"
                activeStyle={activeStyleColor}
              >
                Encadrement
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/transfertvideo"
                className="navbar-link"
                activeStyle={activeStyleColor}
              >
                Transfert vidéo
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/boutique"
                className="navbar-link"
                activeStyle={activeStyleColor}
              >
                En boutique
              </Link>
            </NavItem>
          </Nav>

          <NavbarText>
            <span className="nav-icon pr-3 border-right" id="popphone">
              <FontAwesomeIcon icon={faPhone} style={{color: "#76b2c6"}} />
            </span>

            <Tooltip
              placement="bottom"
              isOpen={popoverPhoneOpen}
              target="popphone"
              toggle={togglePhone}
              autohide={false}
            >
              <Container>
                <a href="tel:0146286516" style={{ color: tooltipColor, textDecoration: "underline" }}>
                  01 46 28 65 16
                </a>
              </Container>
            </Tooltip>

            <span className="nav-icon pl-3 pr-3 border-right" id="popclock">
              <FontAwesomeIcon icon={faClock} style={{color: "#76b2c6"}} />
            </span>
            <Tooltip
              placement="bottom"
              isOpen={popoverClockOpen}
              target="popclock"
              toggle={toggleClock}
              autohide={false}
            >
              <Container>
                <span style={{ color: tooltipColor}}>
                  Mardi-Samedi
                <br />
                9h15-13h et 14h-19h 
                </span>
              </Container>
            </Tooltip>

            <span className="nav-icon pr-3 pl-3" id="popmap">
              <FontAwesomeIcon icon={faMapMarker} style={{color: "#76b2c6"}} />
            </span>
            <Tooltip
              placement="bottom"
              isOpen={popoverMapOpen}
              target="popmap"
              toggle={toggleMap}
              autohide={false}
            >
              <Container>
                <a
                  href="https://www.google.fr/maps/place/Photo+Expression/@48.8462198,2.3773179,17z/data=!3m1!4b1!4m5!3m4!1s0x47e6720fcffb1acd:0x875bd3af8586dc20!8m2!3d48.8462163!4d2.3795119"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: tooltipColor, textDecoration: "underline" }}

                >
                  2 rue Beccaria <br /> 75012 Paris
                </a>
              </Container>
            </Tooltip>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default SiteNavigation;
