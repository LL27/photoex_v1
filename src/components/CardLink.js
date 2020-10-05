import Radium from 'radium';
import React from 'react';
import color from 'color';

import { Link } from "gatsby";

class CardLink extends React.Component {


  render() {
    // Radium extends the style attribute to accept an array. It will merge
    // the styles in order. We use this feature here to apply the primary
    // or warning styles depending on the value of the `kind` prop. Since its
    // all just JavaScript, you can use whatever logic you want to decide which
    // styles are applied (props, state, context, etc).
    return (
      <Link style={style}>
        {this.props.children}
      </Link>
    );
  }
}

CardLink = Radium(CardLink);

// You can create your style objects dynamically or share them for
// every instance of the component.
const style = {
    color: '#fff',

    // Adding interactive state couldn't be easier! Add a special key to your
    // style object (:hover, :focus, :active, or @media) with the additional rules.
    ':hover': {
      background: color('#0074d9')

    }
};


export default CardLink;
