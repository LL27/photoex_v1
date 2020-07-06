import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-mobile is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-6-mobile is-4-desktop">
        <div className="card">
            <div className="card-image">
              <PreviewCompatibleImage imageInfo={item} />
            </div>
            <div className="card-content">
              <p className="title is-4">item title</p>
            <p>{item.text}</p>
            </div>

        </div>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
