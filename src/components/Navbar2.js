import React, { useState } from 'react';
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

import logo from "../img/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Navbar2 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>

      <div className="full-width-container">
        <div className="navbar-top">


          <div className="level-right is-hidden-mobile info-container">
            <div className="info-tile">
              <span className="icon">
                <FontAwesomeIcon icon={faPhone} />
              </span>

              <a href="tel:0146286516" className="heading address">
                Nous contacter
                <br />
                01 46 28 65 16
              </a>
            </div>

            <div className="info-tile">
              <span className="icon">
                <FontAwesomeIcon icon={faClock} />
              </span>
              <p className="heading">
                Mardi-Samedi
                <br />
                9h15-13h et 14h-19h 
              </p>
              <p className="heading"> </p>
            </div>

            <AnchorLink className="info-tile" to="/#footer" title="Adresse">
              <span className="icon">
                <FontAwesomeIcon icon={faMapMarker} />


              </span>

              <p className="heading address">
                2 rue Beccaria <br />
                75012 Paris
              </p>
            </AnchorLink>
          </div>
        </div>






                <div className="level-item no-flex has-text-white-ter address">
                  <AnchorLink
                    to="/#footer"
                    sx={{ variant: 'styles.a',
        ml: 3,
        py: 2,
      }}
                  >
                    <span className="icon">
                      <FontAwesomeIcon icon={faMapMarker} />
                    </span>
                    2 rue Beccaria, 75012 Paris
                  </AnchorLink>
                </div>
                <div className="level-item no-flex address">
                  <a
                    href="tel:0146286516"
                    className="info-tile-mobile"
                    style={{ lineHeight: 2.2 }}
                  >
                    <span className="icon">
                      <FontAwesomeIcon icon={faPhone} />
                    </span>
                    01 46 28 65 16
                  </a>
                </div>

                <div className="level-item no-flex">
                  <p className="info-tile-mobile" style={{ lineHeight: 2.2 }}>
                    <span className="icon">
                      <FontAwesomeIcon icon={faClock} />
                    </span>
                    Mar-Sam 9h15-13h et 14h-19h  (sans RDV)
                  </p>
                </div>

                <p className="level-item info-tile-mobile"></p>
              </div>
      </div>
    </div>
  );
}

export default Navbar2;
