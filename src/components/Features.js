import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import theme from "../theme.js";
/** @jsx jsx */
import { jsx } from '@emotion/core'
import facepaint from 'facepaint'
import styled from "@emotion/styled"

const breakpoints = [576, 768, 992, 1200]

const mq = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`)
)


const Grid = styled.div`
  display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 8px;
      @media (min-width: 100px) and (max-width: 575px): {
        grid-template-columns: 1fr;
      };
      @media (min-width: 576px): {
        grid-template-columns: 1fr 1fr;
      },
      @media (min-width: 768px): {
        grid-template-columns": 1fr 1fr;
      };
      @media (min-width: 992px): {
        grid-template-columns: 1fr 1fr 1fr;
      };
      @media (min-width: 1200px): {
        grid-template-columns: 1fr 1fr 1fr;
      };
`

const Card = styled.div`
   padding: ${theme.space[2]}px;
   border-radius: 2px;
   box-shadow: 0 0 8px rgba(0, 0, 0, 0.125);
   width: '100%';
`

const FeatureGrid = ({ gridItems }) => (
  <Grid>
    {gridItems.map((item) => (
      <Card>
        <Link
          to={item.path}
          key={item.title}
         >
          <PreviewCompatibleImage imageInfo={item} />

            <h2
                 css={mq({
      'font-size': ['14px', '16px']
    })}

            >
            {item.title}
          </h2>

        </Link>
      </Card>
    ))}
  </Grid>
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
