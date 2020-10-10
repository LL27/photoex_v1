import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

import mapbg from "../img/map-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "reactstrap";

const Footer = class extends React.Component {
  render() {
    const FooterContainer = styled.footer`
      margin-top: 25px;
      list-style-type: none;
      background-color: #333331;
      padding: 30px 0;
      color: #ccccc7;
    `

    const NavItem = styled.li`
      font-weight: 400;
      list-style-type: none;
      padding-left: 0;
    `;
    const FooterLink = styled((props) => <Link {...props} />)`
      text-decoration: none;
            padding-left: 0;

      &:hover {
        text-decoration: none;
      }
    `;
    const FooterNav = styled.div`
      list-style-type: none;
            padding-left: 0;

    `;
    return (
      <FooterContainer id="footer">

          <Container fluid="lg">
            <Row>
              <Col sm="12" md="3">
                <ul style={{listStyleType: "none", paddingLeft: 0}}>
                <FontAwesomeIcon icon={faCamera} style={{fontSize: "1.5rem", marginBottom: "1rem", display: "inline"}}/>
                  <NavItem>
                    <h6>
                    Votre photographe portraitiste au 12ème arrondissement de Paris
                    </h6>
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
                  <h4 style={{color: "hsl(3, 83%, 63%)"}}>SERVICES</h4>
                  <li>
                    <FooterLink to="/photoID">PHOTO D'IDENTITÉ</FooterLink>
                  </li>
                  <li>
                    {" "}
                    <FooterLink to="/portrait">PORTRAIT</FooterLink>
                  </li>
                  <li>
                    {" "}
                    <FooterLink to="/labo">LABORATOIRE</FooterLink>
                  </li>
                  <li>
                    {" "}
                    <FooterLink to="/encadrement">ENCADREMENT</FooterLink>
                  </li>
                  <li>
                    {" "}
                    <FooterLink to="/transfervideo">TRANSDER VIDEO</FooterLink>
                  </li>
                  <li>
                    {" "}
                    <FooterLink to="/boutique">EN BOUTIQUE</FooterLink>
                  </li>
                </FooterNav>
              </Col>
              <Col sm="4" md="3">
                <FooterNav>
                  <h4 style={{color: "hsl(3, 83%, 63%)"}}>HORAIRES</h4>
                  <NavItem>
                    Mardi au samedi  <br />
                    9h15-13h et 14h-19h
                  </NavItem>
                  <NavItem>Avec ou Sans RDV</NavItem>
                </FooterNav>
              </Col>

              <Col sm="4" md="3">
                <FooterNav>
                  <h4 style={{color: "hsl(3, 83%, 63%)"}}>{`MOYEN D'ACCÈS`}</h4>
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
      </FooterContainer>
    );
  }
};

export default Footer;
