import React from "react";

import { Link } from "gatsby";
import styled from "@emotion/styled";

const StyledLink = styled((props) => <Link {...props} />)`
      &:hover {
        text-decoration: none!important;
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
