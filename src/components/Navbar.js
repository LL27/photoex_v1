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
  NavbarText
} from 'reactstrap';

import theme from "../theme.js";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import './Navbar.css';

const SiteNavigation = (props) => {
   const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    return (
    <div>
      <Navbar color="faded" light expand="md">

        <Link to="/" className="navbar-brand">
          <img src={logo} className="navbar-logo" />
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>

          <Nav className="mr-auto" navbar>

             <UncontrolledDropdown nav inNavbar>

              <DropdownToggle nav caret>
                <Link
                to="/studio" className="dropdown-link">
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
                  <Link to="/portrait"  className="navbar-link">
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
        </Collapse>
      </Navbar>
    </div>
  );
}


export default SiteNavigation;
