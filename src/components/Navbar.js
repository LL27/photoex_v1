import React, { useState } from "react";
import styled from "@emotion/styled";
import { jsx, css } from "@emotion/core";
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
  ListGroup,
  ListGroupItem,
  Popover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faClock,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import theme from "../theme.js";
import { Link } from "gatsby";
import logo from "../img/logo.svg";

import "./Navbar.css";

const SiteNavigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const [popoverMapOpen, setPopoverMapOpen] = useState(false);
  const [popoverClockOpen, setPopoverClockOpen] = useState(false);

  const [popoverPhoneOpen, setPopoverPhoneOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  const toggleMap = () => setPopoverMapOpen(!popoverMapOpen);

  const toggleClock = () => setPopoverClockOpen(!popoverClockOpen);

  const togglePhone = () => setPopoverPhoneOpen(!popoverPhoneOpen);

  return (
    <div>
      <Navbar expand="lg" light fixed="top" style={{backgroundColor: "#fff", borderBottom: "1px solid #e5e5e0"}}>
        <Link to="/" className="navbar-brand">
          <img src={logo} className="navbar-logo" />
        </Link>
        <NavbarToggler onClick={toggleNav} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <Link
                  to="/studio"
                  className="dropdown-link"
                  activeStyle={{ color: "hsl(45, 100%, 58%)" }}
                >
                  STUDIO
                </Link>
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                  <Link to="/photoID" className="navbar-link">
                    PHOTO ID
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/portrait" className="navbar-link">
                    PORTRAIT
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Link
                to="/labo"
                className="navbar-link"
                activeStyle={{ color: "hsl(45, 100%, 58%)" }}
              >
                LABO
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/encadrement"
                className="navbar-link"
                activeStyle={{ color: "hsl(45, 100%, 58%)" }}
              >
                ENCADREMENT
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/transfertvideo"
                className="navbar-link"
                activeStyle={{ color: "hsl(45, 100%, 58%)" }}
              >
                TRANSFER VIDÉO
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/boutique"
                className="navbar-link"
                activeStyle={{ color: "hsl(45, 100%, 58%)" }}
              >
                EN BOUTIQUE
              </Link>
            </NavItem>
          </Nav>
          <NavbarText>
            <span className="nav-icon pr-3 border-right" id="popphone">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <Popover
              placement="bottom"
              isOpen={popoverPhoneOpen}
              target="popphone"
              toggle={togglePhone}
            >
              <PopoverBody>
              <PopoverHeader>Horairess</PopoverHeader>
                <a href="tel:0146286516" className="heading address">
                  01 46 28 65 16
                </a>
              </PopoverBody>
            </Popover>

            <span className="nav-icon pl-3 pr-3 border-right" id="popclock">
              <FontAwesomeIcon icon={faClock} />
            </span>
            <Popover
              placement="bottom"
              isOpen={popoverClockOpen}
              target="popclock"
              toggle={toggleClock}
            >
              <PopoverBody>
                <p className="heading">
                  Mardi-Samedi
                  <br />
                  9h15-13h et 14h-19h 
                </p>
              </PopoverBody>
            </Popover>

            <span className="nav-icon pr-3 pl-3" id="popmap">
              <FontAwesomeIcon icon={faMapMarker} />
            </span>
            <Popover
              placement="bottom"
              isOpen={popoverMapOpen}
              target="popmap"
              toggle={toggleMap}
            >
              <PopoverBody>
                <p className="heading address">
                  2 rue Beccaria <br />
                  75012 Paris
                </p>
              </PopoverBody>
            </Popover>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default SiteNavigation;
