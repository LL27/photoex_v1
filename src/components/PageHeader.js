import React from "react";
import { Link } from "gatsby";
/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types";
import Img from "gatsby-image";
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'




const PageHeader = ({ children, image, title, description, maxHeight }) => {

  return (
        <header
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          variant: "layout.header",
        }}
      >


  <section
    className="content pb-0 mb-0"
    style={{ borderBottom: "1.5rem solid hsl(0, 0%, 86%)" }}
  >
    <div className="columns is-gapless is-vcentered">
      <div className="column is-one-third">
        <div className="hero">
          <div className="hero-body">

                    <div className="content">


                    <h1 className="is-capitalized is-size-3-tablet is-size-2-desktop is-size-1-widescreen" style={{marginBottom:0}}>
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

            {children}
           </div>
        </div>
      </div>

      <div className="column is-two-thirds">

         <PreviewCompatibleImage imageInfo={image} />

      </div>
    </div>
  </section>
    </header>
  )
};

PageHeader.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
};

export default PageHeader;
