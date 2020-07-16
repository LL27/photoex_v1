import React from "react";
import { Link } from "gatsby";
import GoogleMap from '../components/GoogleMap'

import mapbg from "../img/map-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMapMarker} from "@fortawesome/free-solid-svg-icons";

import logo from "../img/logo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <React.Fragment>

        <div className="map-container">

            <div className="container" style={{height: 400, minWidth: 320}}>
              <GoogleMap/>
            </div>




            <div className="container" style={{height: 400, minWidth: 320}}>
              <div style={{ backgroundImage: `url(${mapbg}, height: '100%', width: '100%')`}}>  </div>
            </div>
          </div>








      <footer id="footer" className="footer has-background-black has-text-white-ter">


        <div className="columns">
          <div className="column is-one-third">
            <div className="content">
              <img src={logo} alt="Photo Expression" />
              <p className="footer-nav-item">
                Votre photographe portraitiste au 12ème arr. de Paris
              </p>
              <p className="footer-nav-item">2 rue Beccaria, 75012 Paris</p>
              <p className="footer-nav-item">
                Tél. : 01 46 28 65 16 <br />
                Fax : 09 71 70 35 16
              </p>
              <a
                href="mailto:photo.expression@orange.fr"
                className="footer-nav-item"
              >
                photo.expression@orange.fr
              </a>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <ul className="footer-nav" style={{ marginLeft: 0 }}>
                <h4>SERVICES</h4>
                <li>
                  <Link className="footer-nav-item" to="/photoID">
                    PHOTO D'IDENTITÉ
                  </Link>
                </li>
                <li>
                  <Link className="footer-nav-item" to="/portrait">
                    PORTRAIT
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="footer-nav-item" to="/labo">
                    LABORATOIRE
                  </Link>
                </li>
                <li>
                  <Link className="footer-nav-item" to="/encadrement">
                    ENCADREMENT
                  </Link>
                </li>
                <li>
                  <Link className="footer-nav-item" to="/transfervideo">
                    TRANSDER VIDEO
                  </Link>
                </li>
                <li>
                  <Link className="footer-nav-item" to="/boutique">
                    EN BOUTIQUE
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <ul className="footer-nav">
                <h4>HORAIRES</h4>
                <li className="footer-nav-item">
                  Mardi au samedi  <br />
                  9h15-13h et 14h-19h
                </li>
                <li className="footer-nav-item">Avec ou Sans RDV</li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <ul className="footer-nav">
                <h4>{`MOYEN D'ACCÈS`}</h4>
                <li className="footer-nav-item">
                  Bus ligne 29, arrêt Daumesnil-Diderot
                </li>
                <li className="footer-nav-item">
                  Bus ligne 57, arrêt Daumesnil-Diderot
                </li>
                <li className="footer-nav-item">
                  Métro ligne , arrêt Gare de Lyon
                </li>

                <li className="footer-nav-item">
                  Métro ligne , arrêt Reuilly-Diderot
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
            </React.Fragment>

    );
  }
};

export default Footer;
