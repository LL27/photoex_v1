import React from "react";

import { Link } from "gatsby";
import styled from "@emotion/styled";
const StyledLink = styled((props) => <Link {...props} />)`
      transition: all 0.3s ease 0s;
      color: rgb(65, 67, 69);
      font-size: 11px;
      letter-spacing: 0.5px;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
        color: #262727;
      }
    `;

const FooterLink = class extends React.Component {

  render() {
    return (
      <StyledLink>
{this.props.children}
      </StyledLink>
    );
  }
};

export default FooterLink;
