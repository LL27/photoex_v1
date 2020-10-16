import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { Container, Row, Col } from "reactstrap";

const PhotoFormats = ({ heading, description, formats }) => (
    <React.Fragment>
  <Row>
    <Col sm="12" md={{ size: 10, offset: 1 }}>
      {formats.map((item) => (
        <div key={item.heading} style={{margin:"1.5em 0"}}>


         <Row>
            <Col md={4}>
              <PreviewCompatibleImage imageInfo={item} imageStyle={{maxWidth: "320px", marginBottom: ".5em"}} />
            </Col>
            <Col md={8}>
                <p style={{margin:"0", fontWeight: "600"}}>{item.heading}</p>
                <p style={{fontSize:".9em", lineHeight: "1.6"}}>{item.text}</p>
            </Col>
                            </Row>

        </div>
      ))}
      </Col>
      </Row>
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
