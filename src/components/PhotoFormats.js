import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const PhotoFormats = ({ formats }) => (
  <React.Fragment>
    {formats.map((item) => (
      <div key={item.heading} className="container">
        <div className="columns">
          <div className="column is-12">
        <h2 className="title is-size-4-mobile is-size-6-tablet is-size-5-desktop is-size-4-widescreen">
            {item.heading}
          </h2>
          </div>
        </div>
        <div className="columns">
                   <div className="column is-one-fifth">
          <PreviewCompatibleImage imageInfo={item} />
        </div>

        <div className="column">
          <p className="subheading">{item.text}</p>
        </div>
        </div>

      </div>
    ))}
  </React.Fragment>
);

PhotoFormats.propTypes = {
  formats: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      heading: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default PhotoFormats;
