import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Image } from 'theme-ui'

/** @jsx jsx */
import { jsx } from "theme-ui"
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
      <React.Fragment>

      <header
  sx={{
    variant: 'styles.header',
  }}>
  <div
    sx={{
      maxWidth: '100%',
      mx: 'auto',
      px: 3,
      display: 'flex',
      alignItems: 'baseline',
    }}>
    <Link to='/'
   sx={{
    color: 'inherit',
    '&.active': {
      color: 'primary',
    }
  }}>
       <Image
        src={logo}
        variant='logo'
/>

    </Link>
    <div sx={{ mx: 'auto' }} />
    <Link to='/blog'
      sx={{
        variant: 'links.nav',
        ml: 3,
        py: 2,
      }}>
      Blog
    </Link>
    <Link to='/about'
      sx={{
        variant: 'styles.navlink',
        ml: 3,
        py: 2,
      }}>
      About
    </Link>
  </div>
</header>


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
                <Link to="/studio" sx={{
        variant: 'links.nav',
        ml: 3,
        py: 2,
      }}>
                  STUDIO
                </Link>

                <div className="navbar-dropdown">
                  <Link to="/photoID" sx={{
        variant: 'links.nav',
        ml: 3,
        py: 2,
      }}>
                    PHOTO D'IDENTITÉ
                  </Link>

                  <Link to="/portrait" sx={{
        variant: 'links.nav',
        ml: 3,
        py: 2,
      }}>
                    PORTRAIT
                  </Link>
                </div>
              </div>

              <Link to="/labo" sx={{
        variant: 'links.nav',
        ml: 3,
        py: 2,
      }}>
                LABORATOIRE
              </Link>
              <Link to="/encadrement" sx={{
        variant: 'links.nav',
        ml: 3,
        py: 2,
      }}>
                ENCADREMENT
              </Link>
              <Link to="/transfertvideo" sx={{
        variant: 'links.nav',
        ml: 3,
        py: 2,
      }}>
                TRANSFERT VIDEO
              </Link>
              <Link to="/boutique" sx={{
        variant: 'links.nav',
        ml: 3,
        py: 2,
      }}>
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
        </nav>
      </div>
      </React.Fragment>
    );
  }
};

export default Navbar;
