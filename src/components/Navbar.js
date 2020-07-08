import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
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
              <p className="heading">
                Nous contacter
                <br />
                01 46 28 65 16
              </p>
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

            <Link to="/" className="info-tile">
              <span className="icon">
                <FontAwesomeIcon icon={faMapMarker} />
              </span>

              <p className="heading">
                2 rue Beccaria <br />
                75012 Paris
              </p>
            </Link>
          </div>
        </div>

        <nav
          className="navbar navbar-bottom has-background-grey-dark has-text-light"
          role="navigation"
          aria-label="main-navigation"
        >
          {/* Hamburger menu */}
          <div className="navbar-brand">
            <div></div>
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
                    Photo d'identité
                  </Link>
                  <Link className="navbar-item" to="/portrait">
                    Portrait
                  </Link>
                </div>
              </div>

              <Link className="navbar-item" to="/labo">
                LABORATOIRE
              </Link>
              <Link className="navbar-item" to="/encadrement">
                ENCADREMENT
              </Link>
              <Link className="navbar-item" to="/transfervideo">
                TRANSDER VIDEO
              </Link>
              <Link className="navbar-item" to="/boutique">
                EN BOUTIQUE
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/contact/examples">
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  style={{ marginRight: 5 }}
                />{" "}
                INFO PRATIQUE
              </Link>

              <div className="level is-hidden-tablet has-text-centered">
                <hr className="" />

                <div className="level-item has-text-grey-dark no-flex">
                  <p className="heading has-text-grey-dark">
                    <span className="icon">
                      <FontAwesomeIcon icon={faPhone} />
                    </span>
                    01 46 28 65 16
                  </p>
                </div>

                <div className="level-item has-text-grey-dark no-flex">
                  <p className="heading">
                    <span className="icon">
                      <FontAwesomeIcon icon={faClock} />
                    </span>
                    Mar-Sam 9h15-13h et 14h-19h  (sans RDV)
                  </p>
                  <p className="heading"> </p>
                </div>

                <div className="level-item no-flex has-text-grey-dark address">
                  <Link to="/" className="heading has-text-grey-dark">
                    <span className="icon">
                      <FontAwesomeIcon icon={faMapMarker} />
                    </span>
                    2 rue Beccaria, 75012 Paris
                  </Link>
                </div>

                <p className="level-item heading"></p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
};

export default Navbar;
