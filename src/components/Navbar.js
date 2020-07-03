import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

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

        <div className="navbar-top level is-mobile margin-bottom-0">

          <div className="level-left">
            <div className="navbar-item logo">
              <Link
                to="/"
                title="Logo"
              >
                <img src={logo} alt="Photo Expression" className="logo-svg" />
              </Link>
            </div>
          </div>

          <div className="level-right">

            <div className="level-item is-narrow no-flex">
              <p className="heading">
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
                Nous contacter
              </p>
              <p className="heading margin-left-1">01 46 28 65 16</p>
            </div>

            <div className="level-item is-narrow no-flex">
              <p className="heading">
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
                Horaires:
              </p>
              <p className="heading margin-left-1"> Mar-Sam 9h15-13h et 14h-19h </p>
            </div>

            <div className="level-item is-narrow no-flex">

              <Link
                to="/"
                style={{ borderRight: 5, marginRight: 15 }}
                className="heading"
              >

                  <span className="icon">
                    <img src={github} alt="Github" />
                  </span>
                  2 rue Beccaria

                <p className="heading margin-left-1">75012 Paris</p>
              </Link>
            </div>

            <p className="level-item is-narrow heading"></p>

          </div>
        </div>

        <nav
          className="navbar navbar-bottom is-transparent"
          role="navigation"
          aria-label="main-navigation"
        >

            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
            <div
              id="navMenu"
              className={`navbar-menu ${this.state.navBarActiveClass}`}
            >
              <div className="navbar-start has-text-centered">
                <Link className="navbar-item" to="/about">
                  STUDIO
                </Link>
                <Link className="navbar-item" to="/products">
                  LABORATOIRE
                </Link>
                <Link className="navbar-item" to="/blog">
                  ENCADREMENT
                </Link>
                <Link className="navbar-item" to="/contact">
                  TRANSDER VIDEO
                </Link>
                <Link className="navbar-item" to="/contact/examples">
                  EN BOUTIQUE
                </Link>
              </div>
              <div className="navbar-end has-text-centered">
                <a
                  className="navbar-item"
                  href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <img src={github} alt="Github" />
                  </span> INFO PRATIQUE
                </a>
              </div>
            </div>

        </nav>
      </div>
    );
  }
};

export default Navbar;
