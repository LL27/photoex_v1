import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

import mapbg from "../img/map-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Container, Row, Col, Button } from "reactstrap";

const Footer = class extends React.Component {
  render() {
    const FooterContainer = styled.footer`
      margin-top: 25px;
      list-style-type: none;
      background-color: #333331;
      padding: 30px 0;
    `;

    const NavItem = styled.li`
      font-weight: 400;
      list-style-type: none;
      padding-left: 0;
      font-size: 0.8em;
    `;
    const FooterLink = styled((props) => <Link {...props} />)`
      text-decoration: none;
      padding-left: 0;
      font-size: 0.8em;
      transition: color 0.2s ease-in-out;

      &:hover {
        text-decoration: none;
        color: #76b2c6;
      }
    `;
    const FooterNav = styled.div`
      list-style-type: none;
      padding-left: 0;
      margin-bottom: 25px;
    `;
    return (
      <Navbar color="dark" id="footer">
        <Container className="pt-5 pb-5" fluid="lg">
          <Row>
            <Col sm="12" lg="3">
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <FontAwesomeIcon
                  icon={faCamera}
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "1rem",
                    display: "inline",
                    color: "#e5e5e0",
                  }}
                />
                <NavItem className="text-grey-lighter">
                  <p style={{ fontWeight: 100 }}>
                    Votre photographe portraitiste au 12ème arrondissement de
                    Paris
                    <br />
                    <strong>2 rue Beccaria, 75012 Paris</strong>
                  </p>
                </NavItem>
                <NavItem className="text-grey-lighter"></NavItem>
                <NavItem className="text-grey-lighter">
                  <a href="tel:0146286516" className="action-button-primary-small">                    Contacter
</a>

                  <a                  href="https://www.google.fr/maps/place/Photo+Expression/@48.8462198,2.3773179,17z/data=!3m1!4b1!4m5!3m4!1s0x47e6720fcffb1acd:0x875bd3af8586dc20!8m2!3d48.8462163!4d2.3795119"
                  target="_blank"
                  rel="noreferrer" className="action-button-secondary-small">                     Voir La Carte

</a>

                </NavItem>
                <a
                  href="mailto:photo.expression@orange.fr"
                  style={{ fontSize: ".8em" }}
                >
                  photo.expression@orange.fr
                </a>
              </ul>
            </Col>
            <Col sm="4" lg="3">
              <FooterNav>
                <h4 className="text-grey-lightest">Services</h4>
                <li>
                  <FooterLink to="/photoID" className="text-grey-lighter">
                    Photo d'identité
                  </FooterLink>
                </li>
                <li>
                  {" "}
                  <FooterLink to="/portrait" className="text-grey-lighter">
                    Portrait
                  </FooterLink>
                </li>
                <li>
                  {" "}
                  <FooterLink to="/labo" className="text-grey-lighter">
                    Labo
                  </FooterLink>
                </li>
                <li>
                  {" "}
                  <FooterLink to="/encadrement" className="text-grey-lighter">
                    Encadrement
                  </FooterLink>
                </li>
                <li>
                  {" "}
                  <FooterLink
                    to="/transfertvideo"
                    className="text-grey-lighter"
                  >
                    Transfert Vidéo
                  </FooterLink>
                </li>
                <li>
                  {" "}
                  <FooterLink to="/boutique" className="text-grey-lighter">
                    En Boutique
                  </FooterLink>
                </li>
              </FooterNav>
            </Col>
            <Col sm="4" lg="3">
              <FooterNav>
                <h4 className="text-grey-lightest">Horaires</h4>
                <NavItem
                  className="text-grey-lighter"
                  style={{ fontWeight: "100" }}
                >
                  Mardi au samedi  <br />
                  9h15-13h et 14h-19h
                </NavItem>
                <NavItem className="text-grey-lighter">
                  Avec ou Sans RDV
                </NavItem>
              </FooterNav>
            </Col>

            <Col sm="4" lg="3">
              <FooterNav>
                <h4 className="text-grey-lightest">Moyens d'accès</h4>
                <NavItem
                  className="text-grey-lighter"
                  style={{ fontWeight: "100" }}
                >
                  Bus ligne 29, arrêt Daumesnil-Diderot
                </NavItem>
                <NavItem
                  className="text-grey-lighter"
                  style={{ fontWeight: "100" }}
                >
                  Bus ligne 57, arrêt Daumesnil-Diderot
                </NavItem>
                <NavItem
                  className="text-grey-lighter"
                  style={{ fontWeight: "100" }}
                >
                  Métro ligne 1, arrêt Gare de Lyon
                </NavItem>

                <NavItem
                  className="text-grey-lighter"
                  style={{ fontWeight: "100" }}
                >
                  Métro ligne 1, arrêt Reuilly-Diderot
                </NavItem>
              </FooterNav>
            </Col>
          </Row>
        </Container>
      </Navbar>
    );
  }
};

export default Footer;
