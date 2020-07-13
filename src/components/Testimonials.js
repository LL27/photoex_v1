import React from 'react'
import Slider from "react-slick";
import PropTypes from 'prop-types'

import { v4 } from 'uuid'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Testimonials extends React.Component {
  render() {
    const { testimonials } = this.props
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
      <div key={v4()} className="container">
        <div className="content has-text-centered">
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </div>
    ))}
      </Slider>
    );
  }
}

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
}

export default Testimonials




