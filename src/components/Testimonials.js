import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";

/** @jsx jsx */
import { jsx } from "theme-ui";
import { v4 } from "uuid";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Testimonials extends React.Component {
  render() {
    const { testimonials } = this.props;
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div
        sx={{
          paddingTop: 64,
          paddingBottom: 64,
        }}
      >
        <Slider {...settings} sx={{
                  marginBottom: 16
                }}>
          {testimonials.map((testimonial) => (
            <div key={v4()} sx={{ textAlign: "center", marginBottom: 16 }}>
              <span
                sx={{
                  display: "inline-block",
                  fontSize: "1.5rem",
                  padding: "1.5rem",
                  textAlign: "center",
                }}
              >
                <FontAwesomeIcon icon={faQuoteLeft} />
              </span>
              <div
                sx={{
                  fontSize: "1rem",
                  fontStyle: "italic",
                  paddingBottom: "1.5rem",
                  textAlign: "center",
                }}
              >
                {testimonial.quote}
              </div>
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
};

export default Testimonials;
