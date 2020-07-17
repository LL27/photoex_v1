import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import logo from "../img/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faPhone,
  faMapMarker,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };
  render() {
    return (
      <div className="full-width-container">
        <div className="navbar-top level is-mobile">
          <div className="level-left">
            <div className="navbar-item logo">
              <Link to="/" title="Logo">
                <img src={logo} alt="Photo Expression" className="logo-svg" />
              </Link>
            </div>
          </div>

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

        <nav
          className="navbar navbar-bottom has-background-grey-dark has-text-light"
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="navbar-brand">
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link" to="/studio">
                  STUDIO
                </Link>

                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/photoID">
                    PHOTO D'IDENTITÉ
                  </Link>

                  <Link className="navbar-item" to="/portrait">
                    PORTRAIT
                  </Link>
                </div>
              </div>

              <Link className="navbar-item" to="/labo">
                LABORATOIRE
              </Link>
              <Link className="navbar-item" to="/encadrement">
                ENCADREMENT
              </Link>
              <Link className="navbar-item" to="/transfertvideo">
                TRANSFERT VIDEO
              </Link>
              <Link className="navbar-item" to="/boutique">
                EN BOUTIQUE
              </Link>
            </div>

            <div className="navbar-end has-text-centered">
              <AnchorLink
                className="navbar-item"
                to="/#footer"
                title="INFO PRATIQUE"
              >
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  style={{ marginRight: 5 }}
                />
                INFO PRATIQUE
              </AnchorLink>

              <div className="level is-hidden-tablet has-text-centered">
                <hr />

                <div className="level-item no-flex has-text-white-ter address">
                  <AnchorLink
                    to="/#footer"
                    className="info-tile-mobile"
                    style={{ lineHeight: 2.2 }}
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
        </nav>
      </div>
    );
  }
};

export default Navbar;
