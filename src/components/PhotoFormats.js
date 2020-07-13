import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const PhotoFormats = ({ title, text, formats }) => (
  <section className="section">
    <div className="content">


    <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
      {title}
    </h2>
    <p>{text}</p>
     </div>
    {formats.map((item) => (
      <div key={item.heading} className="container content">
        <div className="columns">
          <div className="column is-two-fifths" style={{ maxWidth: "340px" }}>
            <PreviewCompatibleImage imageInfo={item} />
          </div>
          <div className="column is-three-fifths">
            <div className="content">
              <h4 className="title is-size-5">
                {item.heading}
              </h4>
              <p>{item.text}</p>
            </div>
          </div>
        </div>
        </div>

    ))}
  </section>
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
