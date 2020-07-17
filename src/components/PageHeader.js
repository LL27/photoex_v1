import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";


const PageHeader = ({ image, title, description }) => (
  <section
    className="content pb-0 mb-0"
    style={{ borderBottom: "1.5rem solid hsl(0, 0%, 86%)" }}
  >
    <div className="columns is-gapless is-vcentered">
      <div className="column is-one-third">
        <div className="hero ml-2">
          <div className="hero-body content">

                 <div className="container">
                    <h1 className="is-capitalized is-size-3-tablet is-size-1-desktop is-size-1-widescreen">
              {title}
            </h1>
            <p
              className=""
              style={{
                color: "#555C5C",
              }}
            >
              {description}
            </p>
                 </div>


           </div>
        </div>
      </div>

      <div className="column is-two-thirds">
        <Img
            fluid={
              !!image.childImageSharp ? image.childImageSharp.fluid : image
            }
            style={{maxHeight: 340}}
          />
      </div>
    </div>
  </section>
);

PageHeader.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
};

export default PageHeader;
