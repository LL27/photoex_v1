import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import CardText from "../components/CardText";

/** @jsx jsx */
import { jsx } from "theme-ui";
import { Grid } from "theme-ui";
import { Box } from "theme-ui";
import { Card } from "theme-ui";
import { Text } from "theme-ui";
import { Heading } from "theme-ui";

const FeatureGrid = ({ gridItems }) => (
  <div
    sx={{
      display: "grid",
      "grid-template-columns": "1fr 1fr 1fr",
      "grid-gap": "8px",
      "@media (min-width: 100px) and (max-width: 575px)": {
        "grid-template-columns": "1fr",
      },
      "@media (min-width: 576px)": {
        "grid-template-columns": "1fr 1fr",
      },
      "@media (min-width: 768px)": {
        "grid-template-columns": "1fr 1fr",
      },
      "@media (min-width: 992px)": {
        "grid-template-columns": "1fr 1fr 1fr",
      },
      "@media (min-width: 1200px)": {
        "grid-template-columns": "1fr 1fr 1fr",
      },
    }}
  >
    {gridItems.map((item) => (
      <Box>
      <Card
        sx={{
          variant: "cards.primary",
        }}
      >
        <Link
          to={item.path}
          key={item.title}
          sx={{
            variant: "links.menu"
          }}
        >
          <PreviewCompatibleImage imageInfo={item} />

          <Heading
            pt={2}
            sx={{
              variant: "styles.h5",
            }}
          >
            {" "}
            {item.title}
          </Heading>
        </Link>
      </Card>
      </Box>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      path: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
