import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

import mapbg from "../img/map-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Container, Row, Col } from "reactstrap";

const Footer = class extends React.Component {
  render() {
    const FooterContainer = styled.footer`
      margin-top: 25px;
      list-style-type: none;
      background-color: #333331;
      padding: 30px 0;
    `

    const NavItem = styled.li`
      font-weight: 400;
      list-style-type: none;
      padding-left: 0;
      color: #e5e5e0;
    `;
    const FooterLink = styled((props) => <Link {...props} />)`
      text-decoration: none;
            padding-left: 0;
            color: #e5e5e0;

      &:hover {
        text-decoration: none;
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
              <Col sm="12" md="3">
                <ul style={{listStyleType: "none", paddingLeft: 0}}>
                <FontAwesomeIcon icon={faCamera} style={{fontSize: "1.5rem", marginBottom: "1rem", display: "inline", color: "#e5e5e0"}}/>
                  <NavItem>
                    <p style={{fontWeight: 100}}>
                    Votre photographe portraitiste au 12ème arrondissement de Paris
                    </p>
                  </NavItem>
                  <NavItem>2 rue Beccaria, 75012 Paris</NavItem>
                  <NavItem>
                    Tél. : 01 46 28 65 16 <br />
                    Fax : 09 71 70 35 16
                  </NavItem>
                  <a
                    href="mailto:photo.expression@orange.fr"
                    className="footer-nav-item"
                  >
                    photo.expression@orange.fr
                  </a>
                </ul>
              </Col>
              <Col sm="4" md="3">
                <FooterNav>
                  <h4 style={{color: "#add8e6"}}>Services</h4>
                  <li>
                    <FooterLink to="/photoID">Photo d'identité</FooterLink>
                  </li>
                  <li>
                    {" "}
                    <FooterLink to="/portrait">Portrait</FooterLink>
                  </li>
                  <li>
                    {" "}
                    <FooterLink to="/labo">Labo</FooterLink>
                  </li>
                  <li>
                    {" "}
                    <FooterLink to="/encadrement">Encadrement</FooterLink>
                  </li>
                  <li>
                    {" "}
                    <FooterLink to="/transfervideo">Transfer Vidéo</FooterLink>
                  </li>
                  <li>
                    {" "}
                    <FooterLink to="/boutique">En Boutique</FooterLink>
                  </li>
                </FooterNav>
              </Col>
              <Col sm="4" md="3">
                <FooterNav>
                  <h4  style={{color: "#add8e6"}}>Horaires</h4>
                  <NavItem>
                    Mardi au samedi  <br />
                    9h15-13h et 14h-19h
                  </NavItem>
                  <NavItem>Avec ou Sans RDV</NavItem>
                </FooterNav>
              </Col>

              <Col sm="4" md="3">
                <FooterNav>
                  <h4  style={{color: "#add8e6"}}>Moyens d'accès</h4>
                  <NavItem>
                    Bus ligne 29, arrêt Daumesnil-Diderot
                  </NavItem>
                  <NavItem>
                    Bus ligne 57, arrêt Daumesnil-Diderot
                  </NavItem>
                  <NavItem >
                    Métro ligne 1, arrêt Gare de Lyon
                  </NavItem>

                  <NavItem>
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
