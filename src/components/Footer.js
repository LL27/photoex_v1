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
    `

    const NavItem = styled.li`
      font-weight: 400;
      list-style-type: none;
      padding-left: 0;
      font-size: .8em;
    `;
    const FooterLink = styled((props) => <Link {...props} />)`
      text-decoration: none;
            padding-left: 0;
      font-size: .8em;


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
                  <NavItem className="color-dark">
                    <p style={{fontWeight: 100}}>
                    Votre photographe portraitiste au 12ème arrondissement de Paris
                    <br/>
<strong>2 rue Beccaria, 75012 Paris</strong>
                    </p>
                  </NavItem>
                  <NavItem className="color-dark"></NavItem>
                  <NavItem className="color-dark">
                    <Button color="primary" size="sm">
                Contacter
              </Button>{" "}<Button color="secondary" size="sm">
                Voir La Carte
              </Button>
                  </NavItem>
                  <a
                    href="mailto:photo.expression@orange.fr"
                    style={{fontSize: ".8em"}}
                  >
                    photo.expression@orange.fr
                  </a>
                </ul>
              </Col>
              <Col sm="4" md="3">
                <FooterNav>
                  <h4 className="site-blue" style={{color: "#add8e6"}}>Services</h4>
                  <li>
                    <FooterLink to="/photoID" className="color-dark" >Photo d'identité</FooterLink>
                  </li>
                  <li>
                    {" "}
                    <FooterLink to="/portrait" className="color-dark">Portrait</FooterLink>
                  </li>
                  <li>
                    {" "}
                    <FooterLink to="/labo" className="color-dark">Labo</FooterLink>
                  </li>
                  <li>
                    {" "}
                    <FooterLink to="/encadrement" className="color-dark">Encadrement</FooterLink>
                  </li>
                  <li>
                    {" "}
                    <FooterLink to="/transfertvideo" className="color-dark">Transfert Vidéo</FooterLink>
                  </li>
                  <li>
                    {" "}
                    <FooterLink to="/boutique" className="color-dark">En Boutique</FooterLink>
                  </li>
                </FooterNav>
              </Col>
              <Col sm="4" md="3">
                <FooterNav>
                  <h4  className="site-blue">Horaires</h4>
                  <NavItem className="color-dark" style={{fontWeight: "100"}}>
                    Mardi au samedi  <br />
                    9h15-13h et 14h-19h
                  </NavItem>
                  <NavItem className="color-dark">Avec ou Sans RDV</NavItem>
                </FooterNav>
              </Col>

              <Col sm="4" md="3">
                <FooterNav>
                  <h4  className="site-blue">Moyens d'accès</h4>
                  <NavItem className="color-dark" style={{fontWeight: "100"}}>
                    Bus ligne 29, arrêt Daumesnil-Diderot
                  </NavItem>
                  <NavItem className="color-dark" style={{fontWeight: "100"}}>
                    Bus ligne 57, arrêt Daumesnil-Diderot
                  </NavItem>
                  <NavItem className="color-dark" style={{fontWeight: "100"}}>
                    Métro ligne 1, arrêt Gare de Lyon
                  </NavItem>

                  <NavItem className="color-dark" style={{fontWeight: "100"}}>
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
