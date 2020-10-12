import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const PageContent = ({ intro }) => (
  <div>
    {intro.map((item) => (
      <section
        key={item.title}
        className="section"
        style={{
          paddingBottom: 0,
          paddingTop: 0,
          borderBottom: ".25rem solid hsl(0, 0%, 86%)",
        }}
      >
        <Row>
          <Col>
            <PreviewCompatibleImage imageInfo={item} />
          </Col>
          <Col>
            <p className="is-size-4-mobile is-size-6-tablet is-size-5-desktop is-size-4-widescreen">
              {item.title}
            </p>
            <p className="" style={{ fontSize: "14px" }}>
              {item.text}
            </p>
          </Col>
        </Row>
      </section>
    ))}
  </div>
);

PageContent.propTypes = {
  intro: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default PageContent;
