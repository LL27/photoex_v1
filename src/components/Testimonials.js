import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { v4 } from "uuid";
import { Container } from "reactstrap";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const InnerContainer = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h2`
  font-weight: 600;
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 auto;
    padding: 34px;
  padding-top: 16px;
  margin-bottom: 24px;
  color: #66666;
  min-width: 230px;
  text-align: center;
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
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
    return (
      <Container>
       <Title>Dernier Avis</Title>
        <Slider {...settings}>

          {testimonials.map((testimonial) => (
            <div key={v4()}>

                        <InnerContainer>

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
                                    </InnerContainer>

            </div>

          ))}

        </Slider>
</Container>
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

export default Testimonials;
