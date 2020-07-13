import React from 'react'
import Slider from "react-slick";
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faStar
} from "@fortawesome/free-solid-svg-icons";
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
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="testimonials">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
      <div key={v4()} className="has-text-centered mb-1">
          <span className="icon-quote">
                <FontAwesomeIcon icon={faQuoteLeft} />
              </span>
          <div className="quote">{testimonial.quote}</div>
          <div className="content">
                <div className="icon-five-stars">
             <FontAwesomeIcon icon={faStar} className="checked" />
              <FontAwesomeIcon icon={faStar} className="checked" />
               <FontAwesomeIcon icon={faStar} className="checked" />
                <FontAwesomeIcon icon={faStar} className="checked" />
                 <FontAwesomeIcon icon={faStar} className="checked" />
          </div>
          </div>


          <cite> – {testimonial.author}</cite>
      </div>

    ))}
      </Slider>
       </div>
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




