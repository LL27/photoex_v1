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
      <Navbar expand="lg" light>
        <Link to="/" className="navbar-brand">
          <img src={logo} className="navbar-logo" />
        </Link>
        <NavbarToggler onClick={toggleNav} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <Link to="/studio" className="dropdown-link">
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
              <Link to="/labo" className="navbar-link">
                LABO
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/encadrement" className="navbar-link">
                ENCADREMENT
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/transfertvideo" className="navbar-link">
                TRANSFER VIDÉO
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/boutique" className="navbar-link">
                EN BOUTIQUE
              </Link>
            </NavItem>
          </Nav>
          <NavbarText>

                <span className="nav-icon pr-3 border-right" id="popphone" type="button">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <Popover
                  placement="bottom"
                  isOpen={popoverPhoneOpen}
                  target="popphone"
                  toggle={togglePhone}
                >
                  <PopoverHeader>Popover Title</PopoverHeader>
                  <PopoverBody>
                    Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                    Pellentesque ornare sem lacinia quam venenatis vestibulum.
                  </PopoverBody>
                </Popover>

                <span className="nav-icon pl-3 pr-3 border-right" id="popclock" type="button">
                  <FontAwesomeIcon icon={faClock} />
                </span>
                <Popover
                  placement="bottom"
                  isOpen={popoverClockOpen}
                  target="popclock"
                  toggle={toggleClock}
                >
                  <PopoverHeader>Popover Title</PopoverHeader>
                  <PopoverBody>
                    Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                    Pellentesque ornare sem lacinia quam venenatis vestibulum.
                  </PopoverBody>
                </Popover>

                <span className="nav-icon pr-3 pl-3" id="popmap" type="button">
                  <FontAwesomeIcon icon={faMapMarker} />
                </span>
                <Popover
                  placement="bottom"
                  isOpen={popoverMapOpen}
                  target="popmap"
                  toggle={toggleMap}
                >
                  <PopoverHeader>Popover Title</PopoverHeader>
                  <PopoverBody>
                    Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                    Pellentesque ornare sem lacinia quam venenatis vestibulum.
                  </PopoverBody>
                </Popover>

          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default SiteNavigation;
