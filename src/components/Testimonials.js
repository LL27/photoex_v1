import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { v4 } from "uuid";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Icon = styled.span`
  display: inline-block;
                  font-size: 1.5rem;
                  padding: 1.5rem;
                  text-align: center;
`
const Quote = styled.div`
       font-size: 1rem;
                  font-style: italic;
                  padding-bottom: 1.5rem;
                  text-align: center;
`
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
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={v4()}>
                        <Container>

              <Icon>
                <FontAwesomeIcon icon={faQuoteLeft} />
              </Icon>
              <Quote>
                {testimonial.quote}
              </Quote>
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
                                    </Container>

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
};

export default Testimonials;
